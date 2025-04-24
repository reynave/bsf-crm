<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use DateTime;
use DateInterval;
class Komisi extends BaseController
{
    function monthlySelect()
    {
        // $q2 = "select  id, name from hr_employee where name != '' ";
        // $hr_employee = $this->db->query($q2)->getResultArray();

         $q2 =  "SELECT x_name from x_incentives  where x_name != '' group by x_name ";
         $selectName = $this->db->query($q2)->getResultArray();


        $q3 = "SELECT id, x_name  from x_mastercabang where x_name != ''  ORDER BY x_name ASC";
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
        $accountId = model("Core")->accountId();
        $q3 = "select * from x_incentives where 
        x_bulan = '" . $post['x_bulan'] . "' and  
        x_cabang_utama = '" . $post['x_cabang'] . "' and 
        x_name = '" . $post['x_name'] . "' and  
        x_tahun = '" . $post['x_tahun'] . "'  
        ";

        $q2 = "SELECT x_jobgroup as x_job, sum(x_on_time_total_amount) as x_on_time_total_amount,
sum(x_late_total_amount) as x_late_total_amount, 
sum(x_unpaid_total_amount) as x_unpaid_total_amount, 
sum(x_commission_total_amount_2) as x_commission_total_amount_2
from x_incentives 
where 
        x_bulan = '" . $post['x_bulan'] . "' and   
        x_name = '" . $post['x_name'] . "' and  
        x_tahun = '" . $post['x_tahun'] . "' 
group by x_jobgroup";
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