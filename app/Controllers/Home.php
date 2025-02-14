<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        $data = [
            "error" => false,
            "datetime_php" => date("Y-m-d H:i:s"),
            "time()" =>date('Y-m-d H:i:s T', time()),
            "posgreSQL" => $this->db->query("SELECT NOW()")->getRowArray(),
             "posgreSQLPluss" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            
            "CURDATE" => $this->db->query("SELECT CURRENT_DATE")->getRowArray(),
            
            
        ];
        return $this->response->setJSON($data);
    }

    public function welcome()
    {
        return view('welcome_message');
    }
    public function test($id="")
    {
        $query = $this->db->query("SELECT * FROM product_template LIMIT 20 ");
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