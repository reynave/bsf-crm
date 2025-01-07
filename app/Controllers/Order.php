<?php

namespace App\Controllers;
use DateTime; 
use DateInterval;
class Order extends BaseController
{
    function index()
    {
        $data = [
            "error" => false,
            "datetime" => date("Y-m-d H:i:s"),
            "item" => [],
            "x_salesperson_id" => model("Core")->accountId(),
        ];
        // if(model("Core")->x_employee_type() != ''  ){
        //     $accountId = model("Core")->accountId();
        //     $x_mobile_users = $this->db->query("SELECT  * FROM x_mobile_users WHERE x_employee_id = '" .  $accountId . "' ")->getResultArray()[0];

        //     $where = "cpo.x_salesperson_id = ".$x_mobile_users['id'] ; 
        // }else{
        //     $where = "cpo.x_salesperson_id = '".model("Core")->accountId()."' " ;
        // }
        $where = "cpo.x_salesperson_id = '".model("Core")->accountId()."' " ;
     //   $where = " TRUE " ;
        
        $q = "SELECT cpo.* , p.name,  p.street
            FROM x_customer_po as cpo
            LEFT JOIN res_partner as p on p.id = cpo.x_customer_id
            WHERE  $where   order by cpo.write_date";

        $db = $this->db->query($q);
        $db = $db->getResultArray();

        $item = [];
        $i = 0;
        foreach($db as $row){
            $x_qty = "SELECT sum(x_qty) as total
            FROM x_customer_po_line  
            WHERE x_customer_po_line_id = ".$row['id']; 
            $x_qty = $this->db->query($x_qty);
            $x_qty= $x_qty->getResultArray();

            $totalAmount = "SELECT sum(x_subtotal) as total
            FROM x_customer_po_line  
            WHERE x_customer_po_line_id = ".$row['id']; 
            $totalAmount = $this->db->query($totalAmount);
            $totalAmount= $totalAmount->getResultArray();

           // $datetime = new DateTime($row['x_order_date'] );
            // Tambahkan 7 jam
          //  $datetime->add(new DateInterval('PT7H'));  

          //  $row[$i]['x_order_date']  = $datetime->format('Y-m-d H:i:s');

            $temp = [ 
                "totalItem" =>  (int)$x_qty[0]['total'],
                "totalAmount" =>  (int)$totalAmount[0]['total']
            ]; 
            array_push($item, array_merge($row,$temp));
            $i++;
        }

        $data = [
            "error" => false,
            "datetime" => date("Y-m-d H:i:s"),
            "item" => $item,  
        ];


        return $this->response->setJSON($data);

    }

    function detail($id) {

        $header = "SELECT cpo.* , p.name,  p.street
        FROM x_customer_po as cpo
        LEFT JOIN res_partner as p on p.id = cpo.x_customer_id
        WHERE cpo.id = $id  order by cpo.write_date";
        $header = $this->db->query($header);
        $header= $header->getResultArray();


        $detail = "SELECT * 
        FROM x_customer_po_line  
        WHERE x_customer_po_line_id = ".$id; 
        $detail = $this->db->query($detail);
        $detail= $detail->getResultArray();
     

        $contact = [];
        $contact[] = array(
            "id" => 0,
            "name" => "",
            "x_end_user" => '',
        );
        if($header[0]['x_end_user'] != '' ){
            $contact = [];
            $q1 = "SELECT 
            id, name,   x_end_user
            FROM res_partner 
            WHERE  id =  ".$header[0]['x_end_user']."   "; 
            $contact = $this->db->query($q1)->getResultArray();
        }
     
        $data = [
            "id" => $id,
            "error" => false,
            "datetime" => date("Y-m-d H:i:s"),
            "header" => $header,  
            "contact" => $contact,
            "detail" => $detail,  
        ];


        return $this->response->setJSON($data);
    }
}