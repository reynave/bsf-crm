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

        $data = [
            "datetime" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            "selectYear" => $selectYear,
            "x_mastercabang" => $x_mastercabang,
        ];


        return $this->response->setJSON($data);

    }

    function detail()
    {
        $post = $this->request->getVar();
        $accountId = model("Core")->accountId();
        $q = "select * from  x_report_set_by_customer_per_month ";
 
        $items = $this->db->query($q)->getResultArray();

        $data = [
            "error" => false,
            "datetime" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            "items" => $items,
            "x_salesperson_id" => $accountId,
            "q" => $q,
        ];
        return $this->response->setJSON($data);

    }
 
}