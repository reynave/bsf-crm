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
    public function test($id="")
    {
        $query = $this->db->query("SELECT * FROM x_sales_activity ". ($id != "" ? "Where id = '$id' " : "" ));
        $results = $query->getResultArray();

        $data = [
            "error" => false,
            "data" =>  $results,
        ];
        return $this->response->setJSON($data);
    }
    public function select($id)
    { 
        $data = [
            "error" => false,
            "data" =>  model("Core")->select("create_uid","x_sales_activity","id = '$id' "), 
        ];
        return $this->response->setJSON($data);
    }
}