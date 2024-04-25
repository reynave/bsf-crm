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
          //  $today = $this->db->query("SELECT CURRENT_DATE")->getRowArray();
            $x_clock_in = model("Core")->select("x_clock_in","x_attendance","x_employee_id = '$x_employee_id' and x_date = CURRENT_DATE ");
            if(!$x_clock_in){
                $this->db->table("x_attendance")->insert([
                    "create_date" => $this->db->query("SELECT NOW()")->getRowArray(),
                    "write_date" => $this->db->query("SELECT NOW()")->getRowArray(),
                    "x_clock_in" => $this->db->query("SELECT NOW()")->getRowArray(),

                    "x_employee_id" =>  $x_employee_id,
                    "x_date" => $this->db->query("SELECT CURRENT_DATE")->getRowArray(),
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
            $x_clock_in = model("Core")->select("x_clock_in","x_attendance","x_employee_id = '$x_employee_id' and x_date = CURRENT_DATE ");
            $x_clock_out = model("Core")->select("x_clock_out","x_attendance","x_employee_id = '$x_employee_id' and x_date = CURRENT_DATE ");

            if($x_clock_in &&  !$x_clock_out ){

                $this->db->table("x_attendance")->update([
                    "write_date" => $this->db->query("SELECT NOW()")->getRowArray(),
                    "x_clock_out" => $this->db->query("SELECT NOW()")->getRowArray(),

                ]," x_employee_id = '$x_employee_id' and x_date = CURRENT_DATE ");

                $data = [
                    "error" => false,
                    "post" => $post,
                ];
            }


        }
        return $this->response->setJSON($data);
    }

    function today(){

        $q = "SELECT  *
        FROM x_attendance
        WHERE x_employee_id = '" . model('Core')->header()['account']['id'] . "'
        and x_date = CURRENT_DATE ";

        $item = isset($this->db->query($q)->getResultArray()[0]) ?  $this->db->query($q)->getResultArray()[0] : [];
        $origin = isset($this->db->query($q)->getResultArray()[0]) ?  $this->db->query($q)->getResultArray()[0] : [];

        if(isset($this->db->query($q)->getResultArray()[0]) ){
            $item['x_clock_in'] =  $item['x_clock_in']!= "" ?  date('Y-m-d H:i:s', strtotime($item['x_clock_in'] . ' +7 hours')) : '';
            $item['x_clock_out'] =  $item['x_clock_out']!= "" ?  date('Y-m-d H:i:s', strtotime($item['x_clock_out'] . ' +7 hours'))  : '';

        }
        $datetime = '2024-04-25 04:32:23.334131'; 
      //  $newDatetime = date('Y-m-d H:i:s', strtotime($item[0]['x_clock_in'] . ' +7 hours'));


        $data = [
            "error" => false,
            "items" => isset($this->db->query($q)->getResultArray()[0]) ?  $item : [],
            "origin" => isset($this->db->query($q)->getResultArray()[0]) ?  $origin : [],
            
           // "newDatetime" => $item['x_clock_in'] ,
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

    //     $this->db->table("x_attendance")->delete("  x_date <= CURRENT_DATE ");

    //     echo "done delete today";

    // }
}