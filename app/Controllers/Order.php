<?php

namespace App\Controllers;
use DateTime;
use DateInterval;
class Order extends BaseController
{
    function index()
    {
        $get = $this->request->getVar();

        $data = [
            "error" => false,
            "datetime" => date("Y-m-d H:i:s"),
            "item" => [],
            "x_salesperson_id" => model("Core")->accountId(),
        ];

        $where = " cpo.x_salesperson_id = '" . model("Core")->accountId() . "'  ";
        if ($get['search']) { 

            if (is_numeric($get['search'])) {
                 $where .= " AND (cpo.id  = " . strtoupper($get['search']) . ")";
            } else {
                  $where .= " AND (cpo.x_customer like '%" . strtoupper($get['search']) . "%'  )";
            }
        }

        $q = "SELECT cpo.* , p.name,  p.street
            FROM x_customer_po as cpo
            LEFT JOIN res_partner as p on p.id = cpo.x_customer_id
            WHERE  $where   
            order by cpo.write_date DESC LIMIT 30";

        $db = $this->db->query($q);
        $db = $db->getResultArray();

        $item = [];
        $i = 0;
        foreach ($db as $row) {
            $x_qty = "SELECT sum(x_qty) as total
            FROM x_customer_po_line  
            WHERE x_customer_po_line_id = " . $row['id'];
            $x_qty = $this->db->query($x_qty);
            $x_qty = $x_qty->getResultArray();

            $totalAmount = "SELECT sum(x_subtotal) as total
            FROM x_customer_po_line  
            WHERE x_customer_po_line_id = " . $row['id'];
            $totalAmount = $this->db->query($totalAmount);
            $totalAmount = $totalAmount->getResultArray();


            $temp = [
                "totalItem" => (int) $x_qty[0]['total'],
                "totalAmount" => (int) $totalAmount[0]['total']
            ];
            array_push($item, array_merge($row, $temp));
            $i++;
        }

        $data = [
            "error" => false,
            "datetime" => date("Y-m-d H:i:s"),
            "item" => $item,
            "get" => $get,
            "q" => $q
        ];


        return $this->response->setJSON($data);

    }

    function detail($id)
    {

        $header = "SELECT cpo.* , p.name,  p.street
        FROM x_customer_po as cpo
        LEFT JOIN res_partner as p on p.id = cpo.x_customer_id
        WHERE cpo.id = $id  order by cpo.write_date DESC LIMIT 30";
        $header = $this->db->query($header);
        $header = $header->getResultArray();


        $detail = "SELECT * 
        FROM x_customer_po_line  
        WHERE x_customer_po_line_id = " . $id;
        $detail = $this->db->query($detail);
        $detail = $detail->getResultArray();


        $contact = [];
        $contact[] = array(
            "id" => 0,
            "name" => "",
            "x_end_user" => '',
        );
        if ($header[0]['x_end_user'] != '') {
            $contact = [];
            $q1 = "SELECT 
            id, name,   x_end_user
            FROM res_partner 
            WHERE  id =  " . $header[0]['x_end_user'] . "   ";
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