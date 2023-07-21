<?php

namespace App\Controllers;

class Table extends BaseController
{
    public function index($table = "")
    {
        $query = $this->db->query("SELECT * FROM $table LIMIT 10 ");
        $results = $query->getResultArray();

        ;

        $field = $this->db->query(" SELECT
            column_name, data_type
        FROM
            information_schema.columns
        WHERE 
        table_name = '$table'");
        $field = $field->getResultArray();

        $data = [
            "error" => false,
            "datetime" => date("Y-m-d H:i:s"),
            "field" => $field,
            "results" => $results,


        ];
        return $this->response->setJSON($data);
    }


}