<?php

namespace App\Controllers;

class Res_partner extends BaseController
{
    public function index()
    {
        $where = " WHERE active = true AND customer_rank > 0 ";
        $total = $this->db->query("SELECT count(id) as total FROM res_partner  $where ");
        $total = (int) $total->getResultArray()[0]['total'];
        $data = [
            "error" => false,
            "total" => $total,
            "datetime" => date("Y-m-d H:i:s"),
        ];
        return $this->response->setJSON($data);
    }

    function searchCustomer()
    {
        $post = $this->request->getVar();
        $status = false;
        $data = [
            "error" => true,
            "post" => $post,
            "datetime" => date("Y-m-d H:i:s"),
            "data" => [],
        ];

        if (isset($post['name']) && strlen($post['name']) > 2) {
            $status = true;
            $name = strtoupper(str_replace(["'", '"', "\'"], "", $post['name']));
        }

        if ($status) {
            //AND  salesman   = '".model("Core")->accountId()."'
            // $where = " WHERE active = true AND customer_rank > 0  AND name like '%" . $name . "%'  
            // AND x_salesman = '" . model('Core')->header()['account']['id'] . "'";
             $where = " WHERE active = true AND customer_rank > 0  AND name like '%" . $name . "%'  ";
            

            $q = "SELECT 
                id, name,  street, x_latitude, x_longitude, x_salesman
            FROM res_partner  $where ";

            //  $q = "SELECT  *
            //  FROM res_partner  $where";
            $query = $this->db->query($q);

            $items = $query->getResultArray();

            $total = $this->db->query("SELECT count(id) as total FROM res_partner  $where ");
            $total = (int) $total->getResultArray()[0]['total'];

            $data = [
                "q" => $q,
                "error" => false,
                "post" => $post,
                "total" => $total,
                "datetime" => date("Y-m-d H:i:s"),
                "res_partner" => $items,
            ];
        }
        return $this->response->setJSON($data);
    }


    function onSubmit(){
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);

        $data = [
            "error" => true,
            "post" => $post,
            "response" => [],
        ];

        if ($post ) {

            /*
             * INSERT DI SINI
             */

			$parameters = ['name'=>$post['name'],'email'=>$post['email'],'street'=>$post['street']];
			$q = http_build_query($parameters);
			
			$url = 'http://192.168.131.90/odoo_ext_api/res_partner.php?action=create'; #URL asumsikan ada di server dev
			
			if(!$curl = curl_init()){
				exit();
			}
			
			curl_setopt($curl,CURLOPT_POST,true);
			curl_setopt($curl,CURLOPT_POSTFIELDS,$q);
			curl_setopt($curl,CURLOPT_URL,$url);
			curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
			$response = curl_exec($curl);


            $data = [
                "error" => false,
                "post" => $post,
                "response" => $response,
            ];
        }
        return $this->response->setJSON($data);
    }
    function detail($id = "")
    {
        $query = $this->db->query("SELECT *
        FROM product_template  WHERE id = '$id'  ");
        $item = $query->getResultArray();

        $data = [
            "error" => false,
            "datetime" => date("Y-m-d H:i:s"),
            "item" => $item[0],

        ];
        return $this->response->setJSON($data);
    }

    function modal()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);

        $data = [
            "error" => true,
            "post" => $post,
            "datetime" => date("Y-m-d H:i:s"),
            "data" => [],
        ];

        if ($post && $post['requestFrom'] == "cart") {

            $this->db->table("x_customer_po")->update([ 
                "x_customer_id" => $post['customer']['id'],
                "x_customer" => $post['customer']['id'],
            ]," id = ".$post['id']);

            $data = [
                "error" => false,
                "post" => $post,
                "datetime" => date("Y-m-d H:i:s"),
            ];
        }
        return $this->response->setJSON($data);
    }
}
