<?php

namespace App\Controllers;
use Faker\Factory;
class Activities extends BaseController
{
    
    public function index()
    {
        // $q = "SELECT s.id, s.x_schedule_date, s.x_schedule_time, rl.x_name   as route_name, 
        // s.x_route_line_id, s.x_salesperson_id 
        // FROM x_sales_activity as s
        // left join x_route_line as rl on s.x_route_line_id = rl.id
        // where s.x_salesperson_id = '" . model('Core')->header()['account']['id'] . "'";

        $q = "SELECT *
        FROM x_sales_activity 
        where x_salesperson_id = '" . model('Core')->header()['account']['id'] . "'";

        $query = $this->db->query($q);
        $results = $query->getResultArray();
        $data = [
            "q" => $q,
            "error" => false,
            "items" => $results,
            "header" => model('Core')->header(),
        ];
        return $this->response->setJSON($data);
    }

    function fake() {
        $faker = Factory::create();
        $name = $faker->name;
        $email = $faker->email;
        $data = [ 
            "error" => false,
           "userName1" =>$faker->name,
           "userName2" =>$faker->name,
           "userName3" =>$faker->name,
           "userName4" =>$faker->name,
        ];
        
        return $this->response->setJSON($data);
    }
    function detail($id = "")
    {
        $query = $this->db->query("SELECT s.* ,rl.x_name   as route_name, p.name as partner_name
        FROM x_sales_activity  as s
        left join x_route_line as rl on s.x_route_line_id = rl.id
        left join res_partner as p on p.id = rl.x_partner_id
            WHERE s.id= '" . $id . "' 
        ");
        $results = $query->getResultArray()[0];
        $data = [
            "error" => false,
            "item" => $results,

        ];
        return $this->response->setJSON($data);
    }
    function selectActivitySchedule($id = "")
    {
        $route = $this->db->query("SELECT id, x_area_id, x_name FROM x_route order by x_name ASC ");
        $x_route = $route->getResultArray();
        $data = [
            "error" => false,
            "x_route" => $x_route,
        ];
        return $this->response->setJSON($data);
    }

    function createActivitySchedule()
    {
        $faker = Factory::create();
        
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {
            $id = model('Core')->header()['account']['id'];
            $this->db->table("x_sales_activity_schedule")->insert([
                "create_uid" => $id,
                "create_date" => date("Y-m-d H:i:s"),
                "write_uid" => $id,
                "write_date" => date("Y-m-d H:i:s"),
                "x_schedule_date" => $post['model']['x_schedule_date'],
                "x_salesperson_id" => $id,
                "x_route_id" => $post['model']['x_route_id'],
                "x_name" => $post['model']['x_name'],
            ]);

            $x_sales_activity_schedule_id = model("Core")->select("id", "x_sales_activity_schedule", "x_salesperson_id= '$id' order by create_date DESC");

            $x_route_line = $this->db->query("SELECT * FROM x_route_line where x_route_id = '" . $post['model']['x_route_id'] . "' ");
            foreach ($x_route_line->getResultArray() as $row) {
                $faker = Factory::create();
                $this->db->table("x_sales_activity")->insert([
                    "create_uid" => $id,
                    "create_date" => date("Y-m-d H:i:s"),
                    "write_uid" => $id,
                    "write_date" => date("Y-m-d H:i:s"),
                    "x_customer" => $faker->name,
                    "x_route_name" =>  $faker->address." ".$faker->city." ".$faker->state." ".$faker->postcode,
                    
                    "x_sales_activity_schedule_id" => $x_sales_activity_schedule_id,
                    "x_schedule_date" => $post['model']['x_schedule_date'],
                    "x_salesperson_id" => $id,
                    "x_route_id" => $post['model']['x_route_id'],
                    "x_route_line_id" => $row['id'],
                ]);
            }
       
            $data = [
                "error" => false,
                "post" => $post,
                "token" => model('Core')->header(),
                "idaccount" => model('Core')->header()['account']['id'],
                "id" => model('Core')->select("id", "x_sales_activity", " true order by create_date DESC "),
            ];
        }
        return $this->response->setJSON($data);
    }

    function remove()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {
            $id = model('Core')->header()['account']['id'];
            $this->db->table("x_sales_activity")->delete([
                "id" => $post['id'],
                "x_salesperson_id" => $id
            ]);
            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }

    function onSubmit()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {
            $id = model('Core')->header()['account']['id'];
            $this->db->table("x_sales_activity")->update([
                "x_summary" => $post['model']['x_summary'],
                "x_schedule_date" => $post['model']['x_schedule_date'],
                "x_schedule_time" => $post['model']['x_schedule_time'],

            ], "id = '" . $post['id'] . "' AND x_salesperson_id = '$id' ");
            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }
}