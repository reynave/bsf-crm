<?php

namespace App\Controllers;

class Product extends BaseController
{
    public function index()
    {

        $total = $this->db->query("SELECT count(id) FROM product_template ");
        $total = (int) $total->getResultArray()[0]['count'];
        $data = [
            "error" => false,
            "total" => $total,
            "datetime" => date("Y-m-d H:i:s"),
        ];
        return $this->response->setJSON($data);
    }

    public function datatable()
    {
        $post = $this->request->getVar();
        $status = false;
        $data = [
            "error" => true,
            "post" => $post,
            "datetime" => date("Y-m-d H:i:s"),
            "data" => [],
        ];

        if (isset($post['search']) && strlen($post['search']) > 2) {
            $status = true;
            $search = str_replace(["'", '"', "\'"], "", $post['search']);
        }

        if ($status) {

            $where = "   s.x_product_name LIKE '%" . strtoupper($search) . "%'";
            $locationId = 0;
            // if (isset($post['accountId'])) {
                  $accountId = $post['accountId'];
                 $locationId = (int) model("Core")->select("x_location_id", "x_mobile_users", "x_employee_id =  $accountId ");
            // }

             $qBSave = "SELECT  p.id, p.id as product_id,  s.x_product_name  as name,  
             s.x_sales_price as list_price, p.default_code,  
             s.quantity,
             s.reserved_quantity, s.location_id,
             coalesce(s.quantity - s.reserved_quantity,0 ) AS qty_Available 
             FROM product_product AS p
             LEFT JOIN stock_quant AS s ON s.product_id = p.id
             WHERE p.active = 't' AND  s.location_id =  $locationId  AND      ";

            $qB = "SELECT a.id, sum(a.quantity) AS qty_Available , a.name , a.list_price, a.default_code, 
            a.reserved_quantity, a.location_id 
            from (
                SELECT  p.id,  s.x_product_name  as name,              
                s.x_sales_price as list_price, p.default_code, s.quantity, s.reserved_quantity, s.location_id       
                FROM product_product AS p             
                LEFT JOIN stock_quant AS s ON s.product_id = p.id   
                WHERE p.active = 't' AND  s.location_id =   $locationId  AND s.x_product_name 
                LIKE '%".strtoupper($search)."%' 
            ) a 
            GROUP BY a.id, a.name, a.list_price, a.default_code,   a.reserved_quantity, a.location_id   ";

            $q = "SELECT  p.id, p.id as product_id,  s.x_product_name  as name,  
            s.x_sales_price as list_price, p.default_code,  
            s.quantity,
            s.reserved_quantity, s.location_id,
            coalesce(s.quantity - s.reserved_quantity,0 ) AS qty_Available 
            FROM product_product AS p
            LEFT JOIN stock_quant AS s ON s.product_id = p.id
            WHERE  p.active = 't' AND     "; 

            $q2 = "SELECT  p.id, p.id as product_id,  s.x_product_name  as name,  
            s.x_sales_price as list_price, p.default_code,  
            sum(s.quantity) as 'quantity',
            sum(s.reserved_quantity) as 'reserved_quantity',  
            sum(coalesce(s.quantity - s.reserved_quantity,0 )) AS qty_Available 
            FROM product_product AS p
            LEFT JOIN stock_quant AS s ON s.product_id = p.id
            GROUP BY  p.default_code, p.id 
            WHERE  p.active = 't' AND     ";


            $query = $this->db->query(" $qB    ");

            $items = $query->getResultArray();
            $total = 0;




            $newData = [];
            // Iterasi melalui array awal
            foreach ($items as $item) {
                $defaultCode = $item['default_code'];

                // Jika default_code sudah ada dalam array hasil
                if (isset($newData[$defaultCode])) {
                    // Tambahkan quantity ke nilai yang ada
                    if(isset($item['quantity'])){
                        $newData[$defaultCode]['quantity'] +=  (int)$item['quantity'] ;
                    }
                } else {
                    // Jika default_code belum ada dalam array hasil
                    $newData[$defaultCode] = $item;
                }
            }
            $newItems2 = [];
            foreach ($newData as $item) {
                $newItems2[] = $item; 
            }

            // $total = $this->db->query("SELECT count(p.id) FROM product_product  as p WHERE  $where ");
            // $total = (int) $total->getResultArray()[0]['count']; 
            //$x_mobile_user = $this->db->query("select id, x_employee_id, x_location_id, x_user_id  from x_mobile_users  ")->getResultArray();

            $data = [
                "error" => false,
                 "q" => str_replace(["\n","\r"],"",$qB ), 
                "post" => $post,
                "locationId" => $locationId,
                // "x_mobile_user" => $x_mobile_user,
                "total" => $total,
                "datetime" => date("Y-m-d H:i:s"),

                "allData" => $items,
                "data" => $newItems2,
                

            ];
        }
        return $this->response->setJSON($data);
    }

    public function detail($id = "")
    {

        $get = $this->request->getVar();
        // $query = $this->db->query("SELECT *
        // FROM product_template  WHERE id = '$id'  ");
        // $item = $query->getResultArray();

        // $qty = $this->db->query("SELECT  coalesce(quantity - reserved_quantity,0 ) as qty
        // FROM stock_quant  WHERE product_id = '" . $item[0]['id'] . "'  ");
        // $itemqty = $qty->getResultArray();


        $q = "SELECT  p.id, p.id as product_id,  s.x_product_name  as name,  
        s.x_sales_price as list_price, p.default_code,  
        s.quantity,
        s.reserved_quantity, s.location_id,
        coalesce(s.quantity - s.reserved_quantity,0 ) AS qty_Available  

        FROM product_product AS p
        LEFT JOIN stock_quant AS s ON s.product_id = p.id
        WHERE p.active = 't' AND  p.id = " . $get['id'] . " AND  s.location_id  =  " . $get['location_id'];





            $qB = "SELECT a.id, sum(a.quantity) AS qty_Available , a.name , a.list_price, a.default_code, 
            a.reserved_quantity, a.location_id 
            from (
                SELECT  p.id,  s.x_product_name  as name,              
                s.x_sales_price as list_price, p.default_code, s.quantity, s.reserved_quantity, s.location_id       
                FROM product_product AS p             
                LEFT JOIN stock_quant AS s ON s.product_id = p.id   
                WHERE p.active = 't' AND   p.id = " . $get['id'] . "  AND  s.location_id  =  " . $get['location_id']."  
            ) a 
            GROUP BY a.id, a.name, a.list_price, a.default_code,   a.reserved_quantity, a.location_id   ";

 


        $query = $this->db->query($qB);
        $item = $query->getResultArray();

        $accountId = model("Core")->accountId();   
        $q2 = 'SELECT  p.id , p.x_customer, p.x_salesperson_id, p.x_is_magic_order,
            sum(l.x_qty) as "qty", sum(l.x_qty * l.x_subtotal) as "totalAmount"
            FROM x_customer_po  as p
            left join x_customer_po_line as l on p.id = l.x_customer_po_line_id
            where p.x_salesperson_id = ' . $accountId . '  and x_submit = 0
            group by p.id ';
        $x_customer_po = $this->db->query($q2)->getResultArray();

        if($item[0]['qty_available'] < 0) $item[0]['qty_available'] = 0;

        $data = [
            "error" => false,
            "datetime" => date("Y-m-d H:i:s"),
            "item" => $item[0],
            "items" => $item,
            "x_customer_po" => $x_customer_po,
            //"qty" => (int) $item[0]['qty_available'] < 0 ? 0 : $item[0]['qty_available'],
            "qty" => (int) $item[0]['qty_available'],
        ];
        return $this->response->setJSON($data);
    }

    function addToCard()
    {
        $json = file_get_contents('php://input');
        $post = json_decode($json, true);
        $data = [
            "error" => true,
            "post" => $post,
        ];
        if ($post) { 
            $id = $post['cardId'];  
            $this->db->table("x_customer_po_line")->insert([
                "x_customer_po_line_id" => $id,
                "x_product" => $post['item']['id'],
                "x_name" => $post['item']['name'],
                "x_unitprice" => $post['item']['list_price'],
                "x_subtotal" => $post['item']['list_price'] * $post['qty'], 
                "x_qty" => $post['qty'],
                "create_date" => date("Y-m-d H:i:s"),
                "write_date" => date("Y-m-d H:i:s"),
            ]);

            $data = [
                "error" => false,
                "post" => $post,
            ];
        }
        return $this->response->setJSON($data);
    }

}