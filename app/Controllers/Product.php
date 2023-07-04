<?php

namespace App\Controllers;

class Product extends BaseController
{
    public function index()
    {
        $query = $this->db->query("SELECT *
        FROM product_template  limit 200");
        $items = $query->getResultArray();

        $total = $this->db->query("SELECT count(id) FROM product_template ");
        $total = (int) $total->getResultArray()[0]['count'];

        $data = [
            "error" => false,
            "total" => $total,
            "datetime" => date("Y-m-d H:i:s"),
            "items" => $items,

        ];
        return $this->response->setJSON($data);
    }
    public function detail($id="")
    {
        $query = $this->db->query("SELECT *
        FROM product_template  WHERE id = '$id'  ");
        $item = $query->getResultArray();
  
        $data = [
            "error" => false, 
            "datetime" => date("Y-m-d H:i:s"),
            "item" => $item[0],

        ];
        return $this->response->setJSON($data);
    }

}