<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use DateTime;
use DateInterval;
class Message extends BaseController
{
    function index()
    {
        
         
        $q3 = "SELECT *  FROM x_mobile_message where  x_start_date <= Now() and Now() <= x_end_date ";
        $items = $this->db->query($q3)->getResultArray();

        $data = [
            "datetime" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            "items" => $items, 
        ];


        return $this->response->setJSON($data);

    }
    function history()
    {
        
         
        $q3 = "SELECT * 
                FROM x_mobile_message 
                WHERE x_start_date <= NOW() 
                AND NOW() <= x_end_date 
                AND x_end_date >= NOW() - INTERVAL '7 days' order by x_start_date DESC";
        $items = $this->db->query($q3)->getResultArray();

        $data = [
            "datetime" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            "items" => $items, 
        ];


        return $this->response->setJSON($data);

    }

   
 
}