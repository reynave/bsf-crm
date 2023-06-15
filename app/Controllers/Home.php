<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        $data = [
            "error" => false,
        ];
        return $this->response->setJSON($data);
    }
    public function test()
    {
        $query = $this->db->query("SELECT * FROM x_sales_activity");
        $results = $query->getResultArray();

        $data = [
            "error" => false,
            "data" =>  $results,
        ];
        return $this->response->setJSON($data);
    }
}