<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use DateTime; 
use DateInterval;
class ApprovalDiscount extends BaseController
{
    static $table = 'x_log_approval_disc';
   
    function index()
    {
        $q = "select *  from  " . self::$table . " where x_request_status = 'open' ORDER BY x_request_date DESC";
        $items = $this->db->query($q)->getResultArray();


        $data = [
            "datetime" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            "items" => $items,
        ];


        return $this->response->setJSON($data);

    }

    function detail()
    {
        $id = $this->request->getVar()['id'];
        $q = "select *  from  " . self::$table . " where id = $id ";
        $item = $this->db->query($q)->getResultArray()[0];

        $data = [
            "datetime" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            "items" => $item,
        ];


        return $this->response->setJSON($data);

    }

    function onApproved()
    {
      
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $id = $post['id']; 

        $this->db->table( self::$table )->update([
            "x_approve_discount" =>  $post['status'] == 1 ? "t" : "f",
            "x_request_status" => "closed", 
            
        ], "   id = " . $post['id']);

 
        $data = [
            "datetime" => $this->db->query("SELECT NOW() AT TIME ZONE '+00:00'")->getRowArray(),
            "post" => $post,
        ];   
        return $this->response->setJSON($data);

    }

 
}