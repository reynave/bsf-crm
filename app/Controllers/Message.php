<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use DateTime;
use DateInterval;
class Message extends BaseController
{
    function index()
    {
        
         
        $q3 = "SELECT *  FROM x_mobile_message where x_end_date >= Now() and x_start_date >= Now() and x_status='active'";
        $items = $this->db->query($q3)->getResultArray();

        $data = [
            "datetime" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            "items" => $items, 
        ];


        return $this->response->setJSON($data);

    }

    function monthly()
    {
        $post = $this->request->getVar();
        $accountId = model("Core")->accountId();
        $q3 = "select * from x_incentives where 
        x_bulan = '" . $post['x_bulan'] . "' and  
        x_cabang_utama = '" . $post['x_cabang'] . "' and 
        x_name = '" . $post['x_name'] . "' and  
        x_tahun = '" . $post['x_tahun'] . "'  
        ";

        $q2 = "SELECT * FROM x_incentives";
        $items = $this->db->query($q2)->getResultArray();

        $data = [
            "error" => false,
            "datetime" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            "items" => $items,
            "x_salesperson_id" => $accountId,
            "q" => $q2,
        ];
        return $this->response->setJSON($data);

    }
 
}