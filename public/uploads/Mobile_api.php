<?php
class Mobile_api extends CI_Controller {
	
	public $mydb;
	
	public $db70;
	public $db69;

	public function __construct()
	{
		parent::__construct();
		$this->load->library('session');
		$dsn = [
			'DSN'      => '',
			'hostname' => '192.168.131.70',
			'username' => 'root',
			'password' => '7x4pD1R*Jr6o',
			'database' => 'BSF-LIVE',
			'dbdriver' => 'postgre',
			'dbprefix' => '',
			'pconnect' => FALSE,
			'db_debug' => (ENVIRONMENT !== 'production'),
			'cache_on' => FALSE,
			'cachedir' => '',
			'char_set' => 'utf8',
			'dbcollat' => 'utf8_general_ci',
			'swap_pre' => '',
			'encrypt' => FALSE,
			'compress' => FALSE,
			'stricton' => FALSE,
			'failover' => array(),
			'save_queries' => FALSE
		];
		$this->mydb = $this->load->database($dsn, TRUE);
		
		$dsn70 = [
			'DSN'      => '',
			'hostname' => '192.168.131.70',
			'username' => 'root',
			'password' => '7x4pD1R*Jr6o',
			'database' => 'BSF-LIVE',
			'dbdriver' => 'postgre',
			'dbprefix' => '',
			'pconnect' => FALSE,
			'db_debug' => (ENVIRONMENT !== 'production'),
			'cache_on' => FALSE,
			'cachedir' => '',
			'char_set' => 'utf8',
			'dbcollat' => 'utf8_general_ci',
			'swap_pre' => '',
			'encrypt' => FALSE,
			'compress' => FALSE,
			'stricton' => FALSE,
			'failover' => array(),
			'save_queries' => FALSE
		];
		$this->db70 = $this->load->database($dsn70, TRUE);
		
		$dsn69 = [
			'DSN'      => '',
			'hostname' => '192.168.131.69',
			'username' => 'root',
			'password' => '7x4pD1R*Jr6o',
			'database' => 'BSF-LIVE-TEST-14022023',
			'dbdriver' => 'postgre',
			'dbprefix' => '',
			'pconnect' => FALSE,
			'db_debug' => (ENVIRONMENT !== 'production'),
			'cache_on' => FALSE,
			'cachedir' => '',
			'char_set' => 'utf8',
			'dbcollat' => 'utf8_general_ci',
			'swap_pre' => '',
			'encrypt' => FALSE,
			'compress' => FALSE,
			'stricton' => FALSE,
			'failover' => array(),
			'save_queries' => FALSE
		];
		$this->db69 = $this->load->database($dsn69, TRUE);	
	}
	
	# TES COBA KONEK KE SERVER
	public function product(){
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
		header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With');
		header('Content-Type:application/json');
		
		$query = $this->db70->query('SELECT * FROM product_template LIMIT 20');
		
		$rows = $query->result_array();
		echo json_encode($rows);
	}
	
	public function product2(){
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
		header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With');
		header('Content-Type:application/json');
		
		$query = $this->db69->query('SELECT * FROM product_template LIMIT 20');
		
		$rows = $query->result_array();
		echo json_encode($rows);
	}
	
	public function get_all($user_id=''){
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
		header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With');
		header('Content-Type:application/json');

		if($user_id!=''){
			$query = $this->mydb->query('SELECT * FROM mail_activity WHERE user_id = ? AND res_model = \'res.partner\'',array($user_id));
		} else {
			$query = $this->mydb->query('SELECT * FROM mail_activity WHERE res_model = \'res.partner\'');
		}
		$rows = $query->result_array();
		echo json_encode($rows);
		
	}
	
	public function sales_login(){

		$username = $this->input->post('username');
		$password = md5($this->input->post('password'));
		//$this->mydb->query('UPDATE hr_employee SET x_password = MD5(identification_id)');
		$qry = $this->mydb->query('SELECT * FROM hr_employee WHERE identification_id = ? AND x_password = ?',[$username,$password]);
		$row = $qry->row_array();
		if($qry->num_rows() > 0):
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode(['msg'=>'Success!','user_id'=>$row['id'],'name'=>$row['name'],'flag'=>1]));
		else:
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode(['msg'=>'Failed!','user_id'=>'','name'=>'','flag'=>0]));
		endif;
	}
	
	public function add_schedule($user_id){
		$data['summary'] = '';
		$data['user_id'] = $user_id;
		$this->load->view('mobile_api/add_schedule',$data);
	}
	
	public function photo_upload()
	{
		if($_SERVER['REQUEST_METHOD'] == 'GET'){
			echo 'It&#39;s not permitted to request by GET method!';
		} else {		
			$imgName = 'IMG-'.sha1($_SERVER['REMOTE_ADDR'].'-'.date('Ymdhis')).'.jpg';
			$target_dir = '../android/uploads/';
			$data = file_get_contents('php://input');
			$gotTxt = '';
			if(!(file_put_contents($target_dir.$imgName,$data) === FALSE)){
				$gotTxt = 'http://'.$_SERVER['SERVER_NAME'].'/android/uploads/'.$imgName;
			}
			echo $gotTxt;
		}
	}
	
	public function selfie_upload()
	{
		if($_SERVER['REQUEST_METHOD'] == 'GET'){
			echo 'It&#39;s not permitted to request by GET method!';
		} else {		
			$imgName = 'PHOTO-'.md5($_SERVER['REMOTE_ADDR'].'-'.date('Ymdhis')).'.jpg';
			$target_dir = '../android/selfie/';
			$data = file_get_contents('php://input');
			$gotTxt = '';
			if(!(file_put_contents($target_dir.$imgName,$data) === FALSE)){
				$gotTxt = 'http://'.$_SERVER['SERVER_NAME'].'/android/selfie/'.$imgName;
			}
			
			$this->mydb->update('x_sales_activity',['x_photo_url'=>$gotTxt],'x_customer_id = \''.$this->input->post('res_id').'\' AND x_user_id = \''.$this->input->post('user_id').'\'');
			
			echo $gotTxt;
		}
	}
	
	public function activity_action(){ // SAVE
		
		$qryc = $this->mydb->query('SELECT id,x_cust_latitude,x_cust_longitude,x_customersequence,name FROM res_partner WHERE customer_rank > 0 AND id = ?',[$this->input->post('customer')]);
		$rowc = $qryc->row_array();
		
		$qryu = $this->mydb->query('SELECT x_lat,x_long,x_imei FROM hr_employee WHERE id = ?',[$this->input->post('user_id')]);
		$rowu = $qryu->row_array();
		
		/*$qry_route_line = $this->mydb->query('SELECT * FROM x_route_line WHERE x_partner_id = ?',[$rowc['id']]);
		$row_route_line = $qry_route_line->row_array();
		
		$qry_sa = $this->mydb->query('SELECT * FROM x_x_sales_activity_3 WHERE x_route_id = ? LIMIT 1',[$row_route_line['x_route_id']]);
		$row_sa = $qry_sa->row_array();
		
		*/
		
		$dataset['x_customer'] = $this->input->post('customer');
		$dataset['x_customer_id'] = $rowc['x_customersequence'];
		$dataset['x_res_name'] = $rowc['name'];
		$dataset['x_summary'] = $this->input->post('summary');
		$dataset['x_user_id'] = $this->input->post('user_id');
		$dataset['x_date_deadline'] = $this->input->post('plan_date');
		$dataset['x_plan_time'] = $this->input->post('plan_time');
		$dataset['x_cust_latitude'] = $rowc['x_cust_latitude'];
		$dataset['x_cust_longitude'] = $rowc['x_cust_longitude']; #latitude
		$dataset['x_latitude'] = $rowu['x_lat'];
		$dataset['x_longitude'] = $rowu['x_long']; #latitude
		$dataset['x_imei'] = $rowu['x_imei']; #latitude
		$dataset['x_note'] = $this->input->post('note');
		$dataset['x_activity_type_id'] = 4; #longitude
		$dataset['create_uid'] = 2;
		$dataset['create_date'] = date('Y-m-d H:i:s');
		$this->mydb->insert('x_sales_activity',$dataset);
	}
	
	public function save_lat_long(){
		$lat = $this->input->post('lat');
		$lng = $this->input->post('lng');
		$imei = $this->input->post('imei');
		$user_id = $this->input->post('user_id');
		$this->mydb->update('hr_employee',['x_lat'=>$lat,'x_long'=>$lng,'x_imei'=>$imei],'id = \''.$user_id.'\'');
	}
	
	public function get_user_list(){
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
		header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With');
		header('Content-Type:application/json');

		$query = $this->mydb->query('SELECT * ,MD5(identification_id) AS col_pass FROM hr_employee WHERE active = True AND x_lat IS NOT NULL OR x_long IS NOT NULL');
		$rows = $query->result_array();
		echo json_encode($rows);
	}

	public function save_schedule(){
		/*
		 * Jika ada data yang sudah ada (setelah lakukan query)
		 * maka dia update berdasarkan parameter: res_id, user_id, dan x_actual_date.
		 * Dan field yang akan diubah ialah: x_visited dari yang tadinya NULL/0 menjadi 1
		 */
		
		$cust = $this->mydb->query('SELECT id,x_cust_latitude,x_cust_longitude FROM res_partner WHERE x_customersequence = ?',[$this->input->post('res_id')]);
		$row_cust = $cust->row();
		
		
		$dataset['x_visited'] = True;
		$dataset['x_actual_date'] = $_POST['actual_date'];
		$dataset['x_actual_time'] = $_POST['actual_time'];
		$dataset['x_imei'] = $_POST['imei'];
		$dataset['x_latitude'] = $_POST['latitude'];
		$dataset['x_longitude'] = $_POST['longitude'];
		$dataset['x_distance'] = $this->distance($row_cust->x_cust_latitude,$row_cust->x_cust_longitude,$dataset['x_latitude'],$dataset['x_longitude'],'Meter');
		#$this->mydb->update('x_sales_activity',$dataset,'x_customer_id = \''.$this->input->post('res_id').'\' AND x_user_id = \''.$this->input->post('user_id').'\' AND x_date_deadline = DATE(NOW())');
		$this->mydb->update('x_sales_activity',$dataset,'x_customer_id = \''.$this->input->post('res_id').'\' AND x_user_id = \''.$this->input->post('user_id').'\'');
		
		/*$query = $this->mydb->query('SELECT id AS record_id,x_res_name,x_customer_id,x_user_id FROM x_sales_activity WHERE x_customer_id = \''.$this->input->post('res_id').'\' AND x_user_id = \''.$this->input->post('user_id').'\'');
		$rows = $query->result();
		if($query->num_rows() > 0):
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode($rows));
		else:
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode(['msg'=>'Data is empty!']));
		endif;*/
		
		echo json_encode(['msg'=>'Success!']);
	}
	
	public function show_view_web($user_id='')
	{
		//$query = $this->mydb->query('SELECT * FROM mail_activity WHERE user_id = ? AND res_model = \'res.partner\' AND date_deadline = DATE(NOW())',array($user_id));
		$query = $this->mydb->query('SELECT * FROM x_sales_activity WHERE x_user_id = ?',array($user_id));
		$rows = $query->result();
		$data['user_id'] = $user_id;
		$data['rows'] = $rows;
		$this->load->view('mobile_api/listpage',$data);
	}
	
	public function get_sales_activity($user_id){
		$query = $this->mydb->query('SELECT * FROM x_sales_activity WHERE x_user_id = ?',array($user_id));
		$rows = $query->result();
		if($query->num_rows() > 0):
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode($rows));
		else:
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode(['msg'=>'Data is empty!']));
		endif;
	}

	public function get_customer(){
		$query = $this->mydb->query('SELECT * FROM res_partner WHERE customer_rank > 0 ORDER BY name LIMIT 80 ');
		$rows = $query->result();
		if($query->num_rows() > 0):
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode($rows));
		else:
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode(['msg'=>'Data is empty!']));
		endif;
	}

	public function search_customer($custname){
		// echo $custname;
		// $query = $this->mydb->query("SELECT * FROM res_partner WHERE name LIKE '%?%' ",array($custname));
		$this->mydb->select('*');
		$this->mydb->from('res_partner');
		$this->mydb->like('name', $custname, 'both');
		$query = $this->mydb->get();
		$rows = $query->result();
		if($query->num_rows() > 0):
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode($rows));
		else:
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode(['msg'=>'Data is empty!']));
		endif;
	}
	
	public function get_sales_activity_detail($record_id){
		$query = $this->mydb->query('SELECT * FROM x_sales_activity WHERE id = ?',array($record_id));
		$rows = $query->row();
		if($query->num_rows() > 0):
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode($rows));
		else:
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode(['msg'=>'Data not found!']));
		endif;
	}
	
	public function activity_save()
	{
		$id = $this->input->post('id');
		$note = htmlentities($this->input->post('note'), ENT_QUOTES | ENT_IGNORE, "UTF-8");
		//$this->mydb->update('mail_activity',['note'=>$note],'id = \''.$id.'\'');
		$this->mydb->update('x_sales_activity',['x_note'=>$note],'id = \''.$id.'\'');
	}
	
	public function distance($lat1, $lon1, $lat2, $lon2, $unit){
		if (($lat1 == $lat2) && ($lon1 == $lon2)) {
			return 0;
		}
		else {
			$theta = $lon1 - $lon2;
			$dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
			$dist = acos($dist);
			$dist = rad2deg($dist);
			$miles = $dist * 60 * 1.1515;
			$unit = strtoupper($unit);

			if ($unit == "K") {
				return ($miles * 1.609344);
			} else if ($unit == "N") {
				return ($miles * 0.8684);
			} else if ($unit == "METER") {
				return ($miles * 1609.34);
			} else {
				return $miles;
			}
		}
	}
	
	public function get_json_data(){
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
		header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With');
		header('Content-Type:application/json');
		
		$data = [['id'=>'1882030','name'=>'John Doe','gender'=>'Male'],['id'=>'289892','name'=>'Olivia','gender'=>'Female']];
		
		echo json_encode($data);
				
	}
	
}
