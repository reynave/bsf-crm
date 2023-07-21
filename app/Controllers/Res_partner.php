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

    public function searchCustomer()
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
            $where = " WHERE active = true AND customer_rank > 0  AND name like '%" . $name . "%' ";

            $q = "SELECT id, name,  street, x_latitude, x_longitude
            FROM res_partner  $where";
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

    public function detail($id = "")
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