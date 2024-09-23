<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use DateTime; 
use DateInterval;
class Carts extends BaseController
{
    function index()
    {
        $accountId = model("Core")->accountId();
        //$accountId = '52';


        // $q1 = "SELECT  * 
        // FROM x_customer_po_line";
        // $x_customer_po_line = $this->db->query($q1)->getResultArray();    

        $q2 = 'SELECT  p.id , p.x_customer, p.x_salesperson_id, p.x_is_magic_order,x_cabangutama,x_cabangpembantu, x_order_date,
            sum(l.x_qty) as "qty", sum(l.x_subtotal) as "totalAmount"
            FROM x_customer_po  as p
            left join x_customer_po_line as l on p.id = l.x_customer_po_line_id
            where p.x_salesperson_id = ' . $accountId . ' and x_submit = 0
            group by p.id ';
        $x_customer_po = $this->db->query($q2)->getResultArray();
        $i = 0;


        foreach ($x_customer_po as $row) {
            // Buat objek DateTime dari string
            $datetime = new DateTime($x_customer_po[$i]['x_order_date']);

            // Tambahkan 7 jam
            $datetime->add(new DateInterval('PT7H'));

            $x_customer_po[$i]['x_order_date'] = $datetime->format('Y-m-d H:i:s');
            $i++;
        }


        $data = [
            "error" => false,
            "datetime" => date("Y-m-d H:i:s"),
            //   "x_customer_po_line" => $x_customer_po_line,
            "x_customer_po" => $x_customer_po,
            "x_salesperson_id" => $accountId,
        ];



        return $this->response->setJSON($data);

    }

    function detail()
    {
        //$accountId = model("Core")->accountId();
        $id = $this->request->getVar()['id'];

        $q1 = 'SELECT  p.id , p.x_customer, p.x_salesperson_id, p.x_is_magic_order, 
        p.x_cabangutama, p.x_cabangpembantu, p.x_order_date,  p.x_note,
        sum(l.x_qty) as "qty", sum(  l.x_subtotal) as "totalAmount"
        FROM x_customer_po  as p
        left join x_customer_po_line as l on p.id = l.x_customer_po_line_id
        left join x_mastercabang as mcu on mcu.id = p.x_cabangutama
        where p.id = ' . $id . '  and x_submit = 0
        group by p.id ';
        $header = $this->db->query($q1)->getResultArray();

        $q2 = "select * 
            from x_customer_po_line 
            where x_customer_po_line_id = '$id'
            order by create_date ASC ";
        $x_customer_po_line = $this->db->query($q2)->getResultArray();


        $data = [
            "error" => false,
            "datetime" => date("Y-m-d H:i:s"),
            "items" => $x_customer_po_line,
            "header" => $header,

        ];



        return $this->response->setJSON($data);

    }
    function fnDeleteDetail()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {
            $this->db->table("x_customer_po_line")->delete([
                "id" => $post['id'],
            ]);
            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }

    function removeCart()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {
            $this->db->table("x_customer_po")->delete([
                "id" => $post['item']['id'],
            ]);
            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }
    function updateQty()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {
            $x_unitprice = model("Core")->select("x_unitprice", "x_customer_po_line", "id=" . $post['item']['id']);
            $this->db->table("x_customer_po_line")->update([
                "x_note" => $post['item']['x_note'],
                "x_qty" => $post['item']['x_qty'],
                "x_subtotal" => $post['item']['x_qty'] * $x_unitprice,
            ], " id = " . $post['item']['id']);



            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }

    function updateHeader()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) { 
            $this->db->table("x_customer_po")->update([
                "x_note" => $post['header']['x_note'], 
            ], " id = " . $post['header']['id']); 

            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }
    function updateCustomer()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {

            $this->db->table("x_customer_po")->update([
                "x_customer_id" => $post['item']['id'],
                "x_customer" => $post['item']['name']
            ], " id = " . $post['id']);



            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }
    function onCloseCart()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {
            $accountId = model("Core")->accountId();
            $x_mobile_users = $this->db->query("SELECT  * FROM x_mobile_users WHERE x_employee_id = '" . $accountId . "' ")->getResultArray()[0];

            $this->db->table("x_customer_po")->update([
                "x_submit" => 1,
                "x_ext_sales_id" => $x_mobile_users['id'],
                "x_ext_salesperson_id" => $x_mobile_users['x_ext_salesperson_id'],
                "create_date" => date("Y-m-d H:i:s"),
                "write_date" => date("Y-m-d H:i:s"),
                "x_order_date" => date("Y-m-d H:i:s"),

            ], " x_submit = 0 and  id = " . $post['id']);

            $data = [
                "error" => false,
                "post" => $post,
                "po" => $this->db->query("SELECT  * FROM x_customer_po   Limit 10 ")->getResultArray()
            ];
        }
        return $this->response->setJSON($data);
    }


    function newOrder()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {
            $accountId = model("Core")->accountId();

            $email = model("Core")->header()['account']['x_email'];
            $x_cabangutama = model("Core")->select("x_cabangutama", "x_mobile_users", " x_email = '$email' ");
            $x_cabangpembantu = model("Core")->select("x_cabangpembantu", "x_mobile_users", " x_email = '$email' ");



            $this->db->table("x_customer_po")->insert([
                "x_order_date" => $this->db->query("SELECT NOW()")->getRowArray()['now'],
                "x_cabangutama" => $x_cabangutama,
                "x_cabangpembantu" => $x_cabangpembantu,
                "x_is_magic_order" => true,
                "x_submit" => 0,
                "x_salesperson_id" => $accountId
            ]);


            $q2 = "select * 
        from x_mobile_users 
        where x_email = '$email'";
            $x_mobile_users = $this->db->query($q2)->getResultArray();


            $data = [
                "header" => model("Core")->header(),
                "error" => false,
                "email" => $email,
                "x_mobile_users" => $x_mobile_users,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }
}