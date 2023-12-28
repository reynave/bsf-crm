<?php

namespace App\Controllers;

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
        $where = "cpo.x_salesperson_id = ".model("Core")->accountId() ;
     //   $where = " TRUE " ;
        
        $q = "SELECT cpo.* , p.name,  p.street
            FROM x_customer_po as cpo
            LEFT JOIN res_partner as p on p.id = cpo.x_customer_id
            WHERE $where  order by cpo.write_date";

        $db = $this->db->query($q);
        $db = $db->getResultArray();

        $item = [];
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

            $temp = [
                "totalItem" =>  (int)$x_qty[0]['total'],
                "totalAmount" =>  (int)$totalAmount[0]['total']
            ];
            

            array_push($item, array_merge($row,$temp));

        }

        $data = [
            "error" => false,
            "datetime" => date("Y-m-d H:i:s"),
            "item" => $item,  
        ];


        return $this->response->setJSON($data);

    }

    function detail($id) {
        $detail = "SELECT * 
        FROM x_customer_po_line  
        WHERE x_customer_po_line_id = ".$id; 
        $detail = $this->db->query($detail);
        $detail= $detail->getResultArray();
     
         $data = [
            "id" => $id,
            "error" => false,
            "datetime" => date("Y-m-d H:i:s"),
            "detail" => $detail,  
        ];


        return $this->response->setJSON($data);
    }
}