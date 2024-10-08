<?php

namespace App\Models;

use CodeIgniter\Model;
use CodeIgniter\CodeIgniter;

class Core extends Model
{
    protected   $id    =  null;
    protected   $db    =  null;
    protected   $request    =  null;

    function __construct()
    {
        $this->request = \Config\Services::request();
        $this->db = \Config\Database::connect();
    }


    function select($field = "", $table = "", $where = " 1 ")
    {
        $data = null;
        if ($field != "") {
            $query = $this->db->query("SELECT $field  FROM $table WHERE $where LIMIT 1");
            if ($query->getRowArray()) {
                $row   = $query->getRowArray();
                $data  = $row[$field];
            }
        } else {
            $data  =  null;
        }
        return   $data;
    }

    function header(){
        $jwtObj = explode('.', service('request')->getHeaderLine('Token'));
        $user = base64_decode($jwtObj[1]); 
        return    json_decode($user , true);
    }

   
    function accountId() {
        return self::header() != false ? self::header()['account']['id'] : ""; 
    }

    function x_employee_type() {
        return self::header() != false ? self::header()['account']['x_employee_type'] : ""; 
    }


    function number($name = "")
    {
        if ($name) {
            $number = self::select('runningNumber', 'auto_number', "name = '" . $name . "'") + 1;
            $prefix = self::select('prefix', 'auto_number', "name = '" . $name . "'");
            if ($prefix == '$year') {
                $prefix = date("Y");
            }
          
            $this->db->table("auto_number")->update([ 
                "runningNumber" => $number,
                "updateDate" => time(),
            ],"name = '" . $name . "' ");

            $new_number = str_pad($number, self::select('digit', 'auto_number', "name = '" . $name . "'"), "0", STR_PAD_LEFT);

            return $prefix . $new_number;
        }
    }

    function buildTree($arr, $parentId = 0)
    {
        $tree = [];

        foreach ($arr as $item) {
            if ($item['parent_id'] == $parentId) {
                $item['children'] = self::buildTree($arr, $item['id']);
                $tree[] = $item;
            }
        }

        return $tree;
    }

    function deleteNode($parentId) {
  
        
        // Mengupdate nilai presence menjadi 0 pada parent yang dihapus
        $this->db->table('pages')->where('id', $parentId)->update(['presence' => 0]);
    
        // Mengambil semua child yang terkait dengan parent yang dihapus
        $children = $this->db->table('pages')->where('parent_id', $parentId)->get()->getResultArray();
    
        // Menghapus atau mengupdate presence pada setiap child secara rekursif
        foreach ($children as $child) {
            self::deleteNode($child['id']);
        }
    }

    function cam_to_img($data, $output_file, $filename = "")
    {
        $data =  str_replace("data:image/jpeg;base64,","",$data);

        $data = base64_decode($data);
        $signname = strtolower($filename);
        $signname = str_replace(" ", "-", $signname);

        file_put_contents($output_file . $signname . '.jpeg', $data);

        return $output_file . $signname . '.jpeg';
    }
}