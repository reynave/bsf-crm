<?php

namespace App\Controllers;

class Cart extends BaseController
{
    function index()
    {
      
       
        $data = [
            "error" => false, 
            "datetime" => date("Y-m-d H:i:s"),
            "customer" => [],
            "item" => [],
            "total" => 0,
            "x_salesperson_id" => model("Core")->accountId(),
        ];
   
        $where = "AND x_salesperson_id = '" . model("Core")->accountId() . "' ";
        
        $id = model("Core")->select("id", "x_customer_po", "x_submit = 0  $where ");
        if ($id) {  
            $q = "SELECT  * 
            FROM x_customer_po_line
            where x_customer_po_line_id =  $id ";

            $db = $this->db->query($q);
            $item = $db->getResultArray();


            if(count($item) < 1){
                $q0 = "DELETE FROM  x_customer_po 
                where x_submit = 0 and x_salesperson_id = '".model("Core")->accountId()."' "; 
                $query = $this->db->query($q0);
            }

            $total = $this->db->query("SELECT sum(x_subtotal)
                FROM x_customer_po_line
                where x_customer_po_line_id = $id");
            $total = $total->getResultArray()[0]['sum'];

            $customer = [
                "id" => 0,
                "name" => "- Select Customer First -",
            ];
            $x_customer_id = model("Core")->select("x_customer", "x_customer_po",  " id = '$id' ");
            if($x_customer_id){
                $q = "SELECT id, name,  street, x_latitude, x_longitude
                FROM res_partner where   id = ".$x_customer_id; 
                $query = $this->db->query($q);
                $customer = $query->getResultArray()[0];
            }
           
            $q0 = "SELECT *
            FROM x_customer_po  
            where x_submit = 0 and x_salesperson_id = '".model("Core")->accountId()."' "; 
            $query = $this->db->query($q0);
            $x_customer_po = $query->getResultArray();


          

            $data = [
                "error" => false, 
                "datetime" => date("Y-m-d H:i:s"),
                "item" =>  $item,
                "customer" => $customer,
                "x_customer_po" => $x_customer_po,
                "id" =>  $id,
                "total" => (int)$total,
                "x_salesperson_id" => model("Core")->accountId(),
            ];
        }
        
      
        return $this->response->setJSON($data);

    }

    function removeCart()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) { 
            $this->db->table("x_customer_po_line")->delete([
                "id" => $post['item']['id'],  
            ]); 
            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }
    function updateQty()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) { 
            $x_unitprice = model("Core")->select("x_unitprice","x_customer_po_line","id=".$post['item']['id']);
            $this->db->table("x_customer_po_line")->update([
                "x_qty"         => $post['item']['x_qty'],  
                "x_subtotal"    => $post['item']['x_qty'] * $x_unitprice,
            ]," id = ".$post['item']['id']); 

            

            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }

    function onCloseCart()  {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) { 
            $this->db->table("x_customer_po")->update([
                "x_submit" => 1,   
            ]," id = ".$post['id']); 
 
            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }
}