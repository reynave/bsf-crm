<?php 
header('Content-Type: application/javascript');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Token, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST");
$data= array(
    "error" => false,
    "note" => "sudah masuk",
    "time" => time(),
);
echo json_encode($data);