<?php

namespace App\Controllers;

class Product extends BaseController
{
    public function index()
    {

        $total = $this->db->query("SELECT count(id) FROM product_template ");
        $total = (int) $total->getResultArray()[0]['count'];

        $data = [
            "error" => false,
            "total" => $total,
            "datetime" => date("Y-m-d H:i:s"),
        ];
        return $this->response->setJSON($data);

    }

    public function datatable()
    {
        $post = $this->request->getVar();
        $status = false;
        $data = [
            "error" => true,
            "post" => $post,
            "datetime" => date("Y-m-d H:i:s"),
            "data" => [],
        ];

        if (isset($post['search']) && strlen($post['search']) > 2) {
            $status = true;
            $search = str_replace(["'", '"', "\'"], "", $post['search']);
        }

        if ($status) {

            $where = "WHERE p.name LIKE '%" . strtoupper($search) . "%'";


            $query = $this->db->query("SELECT p.id, s.product_id, p.name, p.list_price, p.default_code, 
                s.quantity,s.reserved_quantity,
                coalesce(s.quantity - s.reserved_quantity,0 ) as qty_Available
                FROM product_template AS p
                LEFT JOIN stock_quant AS s ON  s.product_id = p.id
                $where
            ");

            $items = $query->getResultArray();

            $total = $this->db->query("SELECT count(p.id) FROM product_template  as p $where ");
            $total = (int) $total->getResultArray()[0]['count'];

            $data = [
                "error" => false,
                "post" => $post,
                "total" => $total,
                "datetime" => date("Y-m-d H:i:s"),
                "data" => $items,

            ];
        }
        return $this->response->setJSON($data);
    }

    public function detail($id = "")
    {
        
 
        $query = $this->db->query("SELECT *
        FROM product_template  WHERE id = '$id'  ");
        $item = $query->getResultArray();

        $qty = $this->db->query("SELECT  coalesce(quantity - reserved_quantity,0 ) as qty
        FROM stock_quant  WHERE product_id = '".$item[0]['id']."'  ");
        $itemqty = $qty->getResultArray();

        $data = [
            "error" => false,
            "datetime" => date("Y-m-d H:i:s"),
            "item" => $item[0], 
            "qty" => (int)$itemqty[0]['qty'],

        ];
        return $this->response->setJSON($data);
    }

    function addToCard()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {
           // $where = "and x_salesperson_id = '" . model("Core")->accountId() . "' ";
           $where = "";
            $id = model("Core")->select("id", "x_customer_po", "x_submit = 0  $where");
            if (!$id) {
                $this->db->table("x_customer_po")->insert([
                   // "x_salesperson_id" => model("Core")->accountId(),
                    "x_order_date" => date("Y-m-d H:i:s"),
                    "create_date" => date("Y-m-d H:i:s"),
                    "write_date" => date("Y-m-d H:i:s"),
                    "x_submit" => 0,
                ]);
                $id = model("Core")->select("id", "x_customer_po", "x_submit = 0  $where  order by create_date DESC");
                ;
            }

            $this->db->table("x_customer_po_line")->insert([
                "x_customer_po_line_id" => $id,
                "x_product" => $post['item']['id'],
                "x_name" => $post['item']['name'],
                "x_unitprice" => $post['item']['list_price'],
                "x_subtotal" => $post['item']['list_price'] *  $post['qty'],
                
                "x_qty" => $post['qty'],
                "create_date" => date("Y-m-d H:i:s"),
                "write_date" => date("Y-m-d H:i:s"),
            ]);

            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }

}