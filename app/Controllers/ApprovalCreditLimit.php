<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use DateTime; 
use DateInterval;
class ApprovalCreditLimit extends BaseController
{
    function index()
    {
        $accountId = model("Core")->accountId();
       

        $q2 = 'SELECT  * from x_approval_credit_limit ';
        $item = $this->db->query($q2)->getResultArray();
        $i = 0;
 
        $data = [
            "error" => false,
            "datetime" =>$this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(), 
            "item" => $item, 
        ];
 
        return $this->response->setJSON($data);

    }
 
}