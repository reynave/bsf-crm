<?php

namespace App\Controllers;

class Table extends BaseController
{
    public function index($table="")
    {
        $query = $this->db->query("SELECT * FROM $table LIMIT 10 ");
        $results = $query->getResultArray();
        $data = [
            "error" => false,
            "datetime" => date("Y-m-d H:i:s"),
            "results" => $results,

        ];
        return $this->response->setJSON($data);
    }
 
   
}