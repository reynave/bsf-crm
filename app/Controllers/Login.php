<?php

namespace App\Controllers;

use CodeIgniter\Model;
use Firebase\JWT\JWT;

class Login extends BaseController
{
    public function index()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {
            // "$pbkdf2-sha512$25000$ghBC6J2zFoJw7l0rBSBESA$27pVjn3WFC4qTQKvl0Vh/2nfJ/UfESABcbcniXsrTy5Dsx88eBXM7U7ErLbokMJBujunD4934f.4Og1v2treug"
            // lindahamilton2506@gmail.com
            // 142
            $key = $_ENV['SECRETKEY'];
            $date = date("Y-m-d H:i:s");
            $payload = [
                'iat' => strtotime($date),
                'exp' => false,
                'id' => 'S0101',
                'player_id' => 'plauer000001'
            ];
            $jwt = JWT::encode($payload, $key, 'HS256');
            $data = [
                "error" => false,
                "payload" => $payload,
                "token" => $jwt,
                "post" => $post,
            ];
        }

        return $this->response->setJSON($data);
    }

    public function auth()
    {

        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
            "note" => ""
        ];
        if ($post && filter_var($post['email'], FILTER_VALIDATE_EMAIL)) {

            $email = $post['email'];
            $pass = $post['password'];
            ;
            $serialNumber = "";
            if ($post['serialNumber'] != false) {
                // $serialNumber = " AND x_serial_number = '$serialNumber' ";
            }
            $id = model('Core')->select("x_employee_id", "x_mobile_users", "x_email = '$email' AND x_password = '$pass' $serialNumber ");
            if ($id) {

                $key = $_ENV['SECRETKEY'];
                $token = uniqid();
                $payload = [
                    "account" => $this->db->query("SELECT  x_employee_id as id, x_name, x_email FROM x_mobile_users WHERE x_employee_id = '" . $id . "' ")->getResultArray()[0],
                    'token' => md5($token),
                    'iat' => time() . microtime(),
                    'nbf' => strtotime(date("Y-m-d H:i:s")),
                ];
                $jwt = JWT::encode($payload, $key, 'HS256');

                $this->db->table("x_mobile_users_auth")->insert([
                  //  "create_uid" => $id,
                    "create_date" => date("Y-m-d H:i:s") . ".0000",
                   // "write_uid" => 3,
                    "write_date" => date("Y-m-d H:i:s") . ".0000",
                    "x_name" => model('Core')->select("x_name", "x_mobile_users", "id = '$id' "),
                    "x_user_id" => $id,
                    "x_token" => $token,
                ]);

                $data = array(
                    "error" => false,
                    "token" => $jwt,
                    "post" => $post,
                    "payload" => $payload,
                );
            } else {
                $data = array(
                    "post" => $post,
                    "error" => true,
                    "note" => "Wrong password or email",
                );
            }
        }

        return $this->response->setJSON($data);
    }
}