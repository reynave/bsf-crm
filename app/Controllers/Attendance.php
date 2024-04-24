<?php

namespace App\Controllers;

class Attendance extends BaseController
{
    function index()
    { 

        // $q = "SELECT  *
        // FROM x_attendance  
        // WHERE x_employee_id = '" . model('Core')->header()['account']['id'] . "'  order by id DESC limit 300 ";

        $q = "SELECT  *
        FROM x_attendance  
        order by id DESC limit 300 ";
   
        $data = [ 
            "error" => false,
            "items" => $this->db->query($q)->getResultArray(), 
        ];

        return $this->response->setJSON($data);

    }

    function clockIn()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) { 
            $x_employee_id = model('Core')->header()['account']['id'];
            $today = date("Y-m-d");
            $x_clock_in = model("Core")->select("x_clock_in","x_attendance","x_employee_id = '$x_employee_id' and x_date = '$today' ");
            if(!$x_clock_in){
                $this->db->table("x_attendance")->insert([ 
                    "create_date" => date("Y-m-d H:i:s") . ".0000", 
                    "write_date" => date("Y-m-d H:i:s") . ".0000",
                    "x_clock_in" =>  date("Y-m-d H:i:s"),
    
                    "x_employee_id" =>  $x_employee_id, 
                    "x_date" => date("Y-m-d"), 
                ]);
                $data = [
                    "error" => false,
                    "post" => $post,
                    "duplicate" => false
                ];
            }else{
                $data = [
                    "error" => true,
                    "post" => $post,
                    "duplicate" => true
                ];
            }
           
           
        }
        return $this->response->setJSON($data);
    }

   
    function clockOut()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) { 
            $x_employee_id = model('Core')->header()['account']['id'];
            $today = date("Y-m-d");
            $x_clock_in = model("Core")->select("x_clock_in","x_attendance","x_employee_id = '$x_employee_id' and x_date = '$today' ");
            $x_clock_out = model("Core")->select("x_clock_out","x_attendance","x_employee_id = '$x_employee_id' and x_date = '$today' ");
            
            if($x_clock_in &&  !$x_clock_out ){

                $this->db->table("x_attendance")->update([  
                    "write_date" => date("Y-m-d H:i:s") . ".0000",
                    "x_clock_out" =>  date("Y-m-d H:i:s"),

                ]," x_employee_id = '$x_employee_id' and x_date = '$today' ");

                $data = [
                    "error" => false,
                    "post" => $post, 
                ];
            } 
           
           
        }
        return $this->response->setJSON($data);
    }

    function today(){
        $date = date("Y-m-d");
        $q = "SELECT  *
        FROM x_attendance  
        WHERE x_employee_id = '" . model('Core')->header()['account']['id'] . "'  
        and x_date = '$date' ";
 
        $data = [ 
            "error" => false,
            "items" => isset($this->db->query($q)->getResultArray()[0]) ?  $this->db->query($q)->getResultArray()[0] : [], 
        ];

        return $this->response->setJSON($data);
    }
 
    function historyAll(){ 
        $q = "SELECT *
        FROM x_attendance  
        limit 100 ";
 
        $data = [ 
            "error" => false,
            "items" =>   $this->db->query($q)->getResultArray(), 
        ];

        return $this->response->setJSON($data); 

    }

    function history(){ 
        $q = "SELECT *
        FROM x_attendance  
        WHERE x_employee_id = '" . model('Core')->header()['account']['id'] . "' limit 100 ";
 
        $data = [ 
            "error" => false,
            "items" =>   $this->db->query($q)->getResultArray(), 
        ];

        return $this->response->setJSON($data); 

    }
    // function delete(){
    //     $today = date("Y-m-d");
    //     $this->db->table("x_attendance")->delete("  x_date = '$today' ");
 
    //     echo "done delete today";
 
    // }
}