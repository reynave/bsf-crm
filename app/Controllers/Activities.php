<?php

namespace App\Controllers;

use Faker\Factory;

class Activities extends BaseController
{

    function index()
    {
        $where = "";
        if (isset($this->request->getVar()['id'])) {
            $where = " AND x_sales_activity_schedule_id = " . $this->request->getVar()['id'];
        }

        // $q2 = "SELECT 
        // x_route_name,  x_schedule_date, x_activity_status,  x_salesperson_id, 
        // id, create_date, x_customer_name, x_is_visited, x_is_unscheduled
        // FROM x_sales_activity  
        // WHERE TRUE   $where 
        // order by id DESC ";

        $q = "SELECT   x_route_name,  x_schedule_date, x_activity_status,  x_salesperson_id, 
        id, create_date, x_customer_name, x_is_visited, x_is_unscheduled, x_salesperson
        FROM x_sales_activity  
        WHERE x_salesperson_id = '" . model('Core')->header()['account']['id'] . "'   $where 
        order by id DESC ";

        // x_salesperson_id = '" . model('Core')->header()['account']['id'] . "'
        $query = $this->db->query($q);
        $results = $query->getResultArray();
        $data = [
            "q" => $q,
            "error" => false,
            "items" => $results,
            "get" => $this->request->getVar(),
            //  "header" => model('Core')->header(),
        ];
        return $this->response->setJSON($data);
    }

    function fake()
    {
        $faker = Factory::create();
        $name = $faker->name;
        $email = $faker->email;
        $data = [
            "error" => false,
            "userName1" => $faker->name,
            "userName2" => $faker->name,
            "userName3" => $faker->name,
            "userName4" => $faker->name,
        ];

        return $this->response->setJSON($data);
    }
    function detail($id = "")
    {
        $query = $this->db->query("SELECT  *  
        FROM x_sales_activity   
        WHERE id= '" . $id . "' ");
        $results = $query->getResultArray()[0];
        $results['x_photo_url_check_in'] = $results['x_photo_url_check_in'] != "" ? base_url() . $results['x_photo_url_check_in'] : "";
        $results['x_photo_url_check_out'] = $results['x_photo_url_check_out'] != "" ? base_url() . $results['x_photo_url_check_out'] : "";

        $data = [
            "error" => false,
            "item" => $results,
        ];
        return $this->response->setJSON($data);
    }
    function selectActivitySchedule($id = "")
    {
        if ($id == '')
            $id = model("Core")->accountId();
        $route = $this->db->query("SELECT id, x_area_id, x_name  
        FROM x_route 
        WHERE x_sales_person_id = '$id' 
        order by x_name ASC ");
        $x_route = $route->getResultArray();

        $mobile_users = $this->db->query("SELECT id, x_employee_id, x_name 
        FROM x_mobile_users  
        order by x_name ASC ");
        $x_mobile_users = $mobile_users->getResultArray();

        $data = [
            "error" => false,
            "x_route" => $x_route,
            "x_mobile_users" => $x_mobile_users,
            "x_salesperson_id" => model("Core")->accountId(),
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
            $x_route_id = $post['model']['x_route_id'];
           


            $this->db->table("x_sales_activity_schedule")->insert([
                // "create_uid" => $id,
                "create_date" => date("Y-m-d H:i:s") . ".0000",
                //"write_uid" => $id,
                "write_date" => date("Y-m-d H:i:s") . ".0000",
                "x_schedule_date" => $post['model']['x_schedule_date'],
                "x_salesperson_id" => $post['model']['x_salesperson_id'],
                "x_salesperson" => model("Core")->select("x_name", "x_mobile_users", "x_employee_id = '" . $post['model']['x_salesperson_id'] . "' "),

                "x_route_id" => $x_route_id != "" ? $x_route_id : null,
                // "x_name" => model("Core")->select("x_name", "x_mobile_users", "id = '" . $post['model']['x_salesperson_id'] . "' "),
            ]);
            if ($x_route_id) {
                $x_sales_activity_schedule_id = model("Core")->select("id", "x_sales_activity_schedule", " true ORDER BY id DESC");

                $x_route_line = $this->db->query("SELECT * FROM x_route_line where x_route_id = '" . $post['model']['x_route_id'] . "' ");
                foreach ($x_route_line->getResultArray() as $row) {
                   
                    $this->db->table("x_sales_activity")->insert([
                        //  "create_uid" => $id,
                        "create_date" => date("Y-m-d H:i:s") . ".0000",
                        // "write_uid" => $id,
                        "write_date" => date("Y-m-d H:i:s") . ".0000",
                        "x_customer_id" => $row['x_partner_id'],
                        "x_customer_name" =>   $row['x_customer_name'],
                        "x_customer_no" => $row['x_customer_no'],

                        "x_route_name" => $row['x_name'] . " " . $row['x_street'] . " " . $row['x_street_2'] . " " . $row['x_city'] . " " . $row['x_zip'],
                        "x_cust_latitude" => $row['x_latitude'],
                        "x_cust_longitude" => $row['x_longitude'],

                        "x_activity_status" => "OPEN",
                        "x_sales_activity_schedule_id" => $x_sales_activity_schedule_id,
                        "x_schedule_date" => $post['model']['x_schedule_date'],
                        "x_salesperson_id" => $post['model']['x_salesperson_id'],
                        "x_salesperson" => model("Core")->select("x_name", "x_mobile_users", "x_employee_id = '" . $post['model']['x_salesperson_id'] . "' "),
                        "x_route_id" => $post['model']['x_route_id'],
                        //"x_res_name" => $row['x_branch_id'],
                        "x_is_unscheduled" => false,

                    ]);
                }
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

    function createActivity()
    {
        

        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {
            $id = model('Core')->header()['account']['id'];

           
            $this->db->table("x_sales_activity")->insert([
                //  "create_uid" => $id,
                "create_date" => date("Y-m-d H:i:s") . ".0000",
                // "write_uid" => $id,
                "write_date" => date("Y-m-d H:i:s") . ".0000",
                "x_customer_id" => $post['customer']['id'],
                "x_customer_name" => $post['customer']['name'],
                //"x_customer_no" => $row['x_customer_no'],

                "x_route_name" => $post['customer']['street'],
                "x_cust_latitude" => $post['customer']['x_latitude'],
                "x_cust_longitude" => $post['customer']['x_longitude'],

                "x_activity_status" => "OPEN",
                "x_sales_activity_schedule_id" => $post['model']['x_sales_activity_schedule_id'],
                "x_schedule_date" => $post['model']['schedule_date'],
                "x_salesperson_id" => $id,
                "x_salesperson" => model("Core")->select("x_name", "x_mobile_users", "x_employee_id = '" . $id . "' "),
                //  "x_route_id" => $post['model']['x_route_id'],
                //"x_res_name" => $row['x_branch_id'],
                "x_is_unscheduled" => true, 
            ]);


            $data = [
                "error" => false,
                "post" => $post,
                "token" => model('Core')->header(),
                "id" => model('Core')->select("id", "x_sales_activity", " true order by create_date DESC "),
            ];
        }
        return $this->response->setJSON($data);
    }

    function checkIn()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {
            //$id = model('Core')->header()['account']['id'];
            $this->db->table("x_sales_activity")->update([
                "x_activity_status" => "CHECKIN",
                "x_actual_date" => date("Y-m-d"),
                "x_actual_time" => date("H:i:s"),
                "x_note" => $post['model']['x_note'],
                "x_visit_reason" => $post['model']['x_visit_reason'],
                "x_summary" => $post['model']['x_summary'],
                "x_visited_longitude" => $post['geoData']['long'],
                "x_visited_latitude" => $post['geoData']['lat'],
                "x_check_in_date" => date("Y-m-d H:i:s") . ".0000",
                "x_check_in_time" => date("H:i:s"),

              //  "x_is_visited" => true,
            ], "id = '" . $post['id'] . "'  ");
            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }
    function checkOut()
    {
        //x_check_in_date
        //x_check_in_time
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {

            $this->db->table("x_sales_activity")->update([
                "x_activity_status" => "CLOSE",
                "x_summary" => $post['model']['x_summary'],
                //   "x_visited_longitude" => $post['geoData']['long'],
                //    "x_visited_latitude" => $post['geoData']['lat'],
                "x_check_out_date" => date("Y-m-d"),
                "x_check_out_time" => date("H:i:s"),
            //    "x_is_visited" => true,
            ], "id = '" . $post['id'] . "'  ");
            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }

    function remove()
    {
        //x_check_in_date
        //x_check_in_time
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {

            $this->db->table("x_sales_activity")->update([
                "x_not_visit_reason" => $post['model']['x_not_visit_reason'],
              //  "x_is_visited" => false,
                "x_activity_status" => "",
            ], "id = '" . $post['id'] . "'  ");
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

            ], "id = '" . $post['id'] . "' AND  x_salesperson_id = '$id' ");
            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }

    function takePhoto()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = array(
            "error" => true,
            "post" => $post,
        );
        if ($post) {
            $filename = model('Core')->header()['account']['id']."-".date("YmdHis")."-".rand(1999999,9999999);
            $data = [
                "error" => false,
                "photo" => $post['base64Images'] != false ? model("Core")->cam_to_img( $post['base64Images'], "./uploads/activity/", $filename) : "",
                "post" => $post,
            ];
            if ($post['status'] == 'CHECKIN') {
                $this->db->table("x_sales_activity")->update([
                    "x_photo_url_check_in" => $data['photo'],
                ], "id = '" . $post['id'] . "'  ");
            } else {
                $this->db->table("x_sales_activity")->update([
                    "x_photo_url_check_out" => $data['photo'],
                ], "id = '" . $post['id'] . "'  ");
            }


        }
        return $this->response->setJSON($data);
    }

    function schedules()
    {

        $account = "x_salesperson_id = '" . model('Core')->header()['account']['id'] . "'  AND ";
       // $account = "";
        $post = $this->request->getVar();
        $range = 0;
        if (isset($post['type'])) {
            if ($post['type'] == 'range') {
                $range = $post['selectDate'];
            }
        }


        $q = "SELECT *
        FROM x_sales_activity_schedule  
        WHERE  $account 
        x_schedule_date >= date(now()) - $range AND x_schedule_date <= date(now())
        ORDER BY id DESC ";

        if (isset($post['selectDate']) && $post['selectDate'] == 'a') {
            $q = "SELECT *
            FROM x_sales_activity_schedule  
            WHERE  $account 
            x_schedule_date >= date(now())
            ORDER BY id DESC ";
        }



        $query = $this->db->query($q);
        $results = $query->getResultArray();

        $items = [];
        foreach($results as $row){
            // $route = $this->db->query("SELECT id, x_area_id, x_name  
            // FROM x_route 
            // order by x_name ASC "); 
           
            array_push($items, array_merge($row,[
                "x_route_id_name" => $row['x_route_id'] != "" ? model("Core")->select("x_name","x_route","id = '".$row['x_route_id']."'") : null,
            ]));
        }

        $data = [
            "q" => $q,
            "error" => false,
            "items" => $items,
            "noteSelect" => ($range > 0 ? "last $range days" : "Today"),
        ];
        return $this->response->setJSON($data);
    }

    function fnRemove()
    {
        //x_check_in_date
        //x_check_in_time
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {
            $this->db->table("x_sales_activity")->delete([
                "id" => $post['item']['id'],
            ]);
            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }

    function fnCancelActiviesSchedule() {
        //x_check_in_date
        //x_check_in_time
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) {
            $this->db->table("x_sales_activity_schedule")->update([
                "x_status" => 'CANCEL',
            ],"id = ".$post['id'] );
            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }
}