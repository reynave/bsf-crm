<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use DateTime;
use DateInterval;
class Target extends BaseController
{
    function monthlySelect()
    {
        // $q2 = "select  id, name from hr_employee where name != '' ";
        // $hr_employee = $this->db->query($q2)->getResultArray();

         $q2 =  "select x_name from x_sales_target_line where x_name != '' group by x_name";
         $selectName = $this->db->query($q2)->getResultArray();


        $q3 = "select id, x_name  from x_mastercabang where x_name != '' ";
        $x_mastercabang = $this->db->query($q3)->getResultArray();

        $data = [
            "datetime" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            "selectName" => $selectName,
            "x_mastercabang" => $x_mastercabang,
        ];


        return $this->response->setJSON($data);

    }

    function monthly()
    {
        $post = $this->request->getVar();
      //  $accountId = model("Core")->accountId();
        $x_cabang = '';
        $x_bulan = '';
        $x_name = '';
        $x_tahun = '';



        if(isset($post['x_cabang']) && $post['x_cabang'] != ''){
            $x_cabang =  " and  s.x_cabang = '" . $post['x_cabang'] . "'";
        }
        if(isset($post['x_name']) && $post['x_name'] != '' ){
            $x_name =  " and   s.x_name = '" . $post['x_name'] . "'";
        }
        if(isset($post['x_bulan'])){
            $x_bulan =  " and   s.x_bulan = '" . $post['x_bulan'] . "'";
        }
        if(isset($post['x_tahun'])){
            $x_tahun =  " and   s.x_tahun = '" . $post['x_tahun'] . "'";
        }
         

        $q1 = "SELECT s.*, m.x_name as cabang
        from x_sales_target_line  as s
        left join x_mastercabang as m on m.id = s.x_cabang
        where s.x_name != ''
          $x_bulan  $x_cabang  $x_name  $x_tahun
        ";
        $items = $this->db->query($q1)->getResultArray();

        $data = [
            "error" => false,
            "datetime" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            "items" => $items,
            "post" => $post,
            "q" => $q1,
        ];
        return $this->response->setJSON($data);

    }


    function yearSelect()
    {
        // $q2 = "select  id, name from hr_employee where name != '' ";
        // $hr_employee = $this->db->query($q2)->getResultArray();

         $q2 =  "select x_name from x_sales_target where x_name != '' group by  x_name";
         $selectName = $this->db->query($q2)->getResultArray();


        $q3 = "select id, x_name  from x_mastercabang where x_name != '' ";
        $x_mastercabang = $this->db->query($q3)->getResultArray();

        $data = [
            "datetime" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            "selectName" => $selectName,
            "x_mastercabang" => $x_mastercabang,
        ];


        return $this->response->setJSON($data);

    }
    function yearly()
    {
        $post = $this->request->getVar();


        $x_cabang = ''; 
        $x_name = '';
        $x_tahun = '';
 
        if(isset($post['x_cabang']) && $post['x_cabang'] != ''){
            $x_cabang =  " and  s.x_cabang = '" . $post['x_cabang'] . "'";
        }
        if(isset($post['x_name']) && $post['x_name'] != '' ){
            $x_name =  " and   s.x_name = '" . $post['x_name'] . "'";
        }
        if(isset($post['x_bulan'])){
            $x_bulan =  " and   s.x_bulan = '" . $post['x_bulan'] . "'";
        }
        if(isset($post['x_tahun'])){
            $x_tahun =  " and   s.x_tahun = '" . $post['x_tahun'] . "'";
        }

       // $accountId = model("Core")->accountId();
        $q1 = "select * from x_sales_target where  
        x_cabang = " . $post['x_cabang'] . " and 
        x_name = '" . $post['x_name'] . "' and  
        x_tahun = '" . $post['x_tahun'] . "'  
        ";

        $q2 = "SELECT s.*, m.x_name as cabang
        from x_sales_target  as s
        left join x_mastercabang as m on m.id = s.x_cabang
        where s.x_name != ''
           $x_cabang  $x_name  $x_tahun
        ";


        $items = $this->db->query($q2)->getResultArray();

        $data = [
            "error" => false,
            "datetime" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            "items" => $items,
          //  "x_salesperson_id" => $accountId,
            "q" => $q2,
        ];
        return $this->response->setJSON($data);

    }
}