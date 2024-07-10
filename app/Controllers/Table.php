<?php

namespace App\Controllers;

class Table extends BaseController
{
    function index()
    {
        $table = $this->request->getVar()['table'];
        $query = $this->db->query("SELECT * FROM $table LIMIT 300 ");
        $results = $query->getResultArray();

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

    function sql()
    {
        $query = $this->request->getVar();
     
        $data = [
            "error" => true, 
            "query" => $this->request->getVar()
        ];
    
        $query = $this->db->query($this->request->getVar()['query']);
        $results = $query->getResultArray();

     //   if( $token == "0Iq8nd06QVIltc8PH4uL0HZmrsAxJ6RJhS0Cz9OQAlY7ncw2fg"  ){
            $data = [
                "error" => false,
                "query" => $this->request->getVar(),
                "results" => (array)json_decode($results, true),
                "datetime" => date("Y-m-d H:i:s"),
               // "q" => $q, 
            //    "token" => $token, 
            ];
           
      //  }
        return $this->response->setJSON($data);
       
    }


}