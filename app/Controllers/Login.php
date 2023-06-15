<?php

namespace App\Controllers;
use CodeIgniter\Model;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

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
}