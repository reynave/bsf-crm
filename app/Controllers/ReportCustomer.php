<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use DateTime;
use DateInterval;
class ReportCustomer extends BaseController
{
    function index()
    {
        // $q2 = "select  id, name from hr_employee where name != '' ";
        // $hr_employee = $this->db->query($q2)->getResultArray();

         $q2 =  "select x_year  from  x_report_set_by_customer_per_month_header group by x_year;";
         $selectYear = $this->db->query($q2)->getResultArray();


        $q3 = "select id, x_name  from x_mastercabang where x_name != '' ";
        $x_mastercabang = $this->db->query($q3)->getResultArray();


        $q2 =  "SELECT x_customer_name  FROM x_report_set_by_customer_per_month GROUP BY x_customer_name ORDER BY x_customer_name ASC";
        $selectName = $this->db->query($q2)->getResultArray();



        $data = [
            "datetime" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            "selectYear" => $selectYear,
            "x_mastercabang" => $x_mastercabang,
            "selectName" => $selectName,
        ];


        return $this->response->setJSON($data);

    }

    function detail()
    {
        $post = $this->request->getVar();
      //  $accountId = model("Core")->accountId();


        $x_cabang = '';
        $x_bulan = '';
        $x_name = '';
        $x_tahun = '';
 

        // if(isset($post['x_cabang']) && $post['x_cabang'] != ''){
        //     $x_cabang =  " and  s.x_cabang = '" . $post['x_cabang'] . "'";
        // }
        if(isset($post['x_name']) && $post['x_name'] != '' ){
            $x_name =  " and   s.x_customer_name = '" . $post['x_name'] . "'";
        }
       
        if(isset($post['x_tahun'])){
            $x_tahun =  " and   s.x_year= '" . $post['x_tahun'] . "'";
        }
        if(isset($post['x_bulan'])){
            $x_bulan =  " and   s.x_month = '" . $post['x_bulan'] . "'";
        }


        $q = "SELECT * from  x_report_set_by_customer_per_month  as s
        where true
         $x_bulan  $x_cabang  $x_name  $x_tahun
        ";
 
        $items = $this->db->query($q)->getResultArray();

        $data = [
            "error" => false,
            "datetime" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            "items" => $items,
          //  "x_salesperson_id" => $accountId,
            "q" => $q,
        ];
        return $this->response->setJSON($data);

    }
 
}