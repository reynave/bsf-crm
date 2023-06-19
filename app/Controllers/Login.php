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
            $date=  date("Y-m-d H:i:s");
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
        if ($post && filter_var($post['model']['email'], FILTER_VALIDATE_EMAIL)) {

            $email = $post['model']['email'];
            // $pass = $post['model']['passw'];
            $pass = '$pbkdf2-sha512$25000$ghBC6J2zFoJw7l0rBSBESA$27pVjn3WFC4qTQKvl0Vh/2nfJ/UfESABcbcniXsrTy5Dsx88eBXM7U7ErLbokMJBujunD4934f.4Og1v2treug';
            $serialNumber = $post['model']['serialNumber'];
            
            $id = model('Core')->select("id", "res_users", "login='$email' and password = '$pass' ");
            if ($id) {

                $key = $_ENV['SECRETKEY'];
                $payload = [ 
                    "account" =>  $this->db->query("SELECT id, name FROM res_partner WHERE id = '" . $id . "' ")->getResultArray()[0],
                    'iat' => time() . microtime(),
                    'nbf' => strtotime(date("Y-m-d H:i:s")),
                ];
                $jwt = JWT::encode($payload, $key, 'HS256');

                $this->db->table("res_users_log")->insert([
                    "create_uid" => $id, 
                    "create_date" =>  date("Y-m-d H:i:s"),
                    "write_uid" => $id, 
                    "write_date" => date("Y-m-d H:i:s"),
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
                    "post" => "Wrong password or email",
                );
            }
        }

        return $this->response->setJSON($data);
    }
}