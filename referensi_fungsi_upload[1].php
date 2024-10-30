<?php

public function photo_upload()
{
            if($_SERVER['REQUEST_METHOD'] == 'GET'){
                $this->output
                 ->set_content_type('application/json')
                  ->set_output(json_encode(array('status'=>'404','message'=>'Illegal request status GET!','datetime_stamp'=>date('Y-m-d H:i:s'))));
            } else {
                $id = $this->input->post('id',TRUE);
                $imgName = 'IMG-'.sha1($_SERVER['REMOTE_ADDR'].'-'.date('Ymdhis')).'.jpg';
                $target_dir = './uploads_live/';
                $config['file_name']            = $imgName;
                $config['upload_path']          = $target_dir;
                $config['allowed_types']        = 'jpg|jpeg|png|gif';
                $config['max_size']             = 100240;
                $config['overwrite']            = TRUE;
                $config['encrypt_name']         = FALSE;
        
                $this->load->library('upload', $config);
        
                $gotTxt = '';
                if (!$this->upload->do_upload('filename')) {
                    $data = array('error' => strip_tags($this->upload->display_errors()));
                } else {
                    $data = array(
                        'error' => 0,
                        "result" => array(
                            'upload_data' => $this->upload->data(),
                        )
                    );
                    $gotTxt = base_url().'/uploads_live/'.$imgName;
                    $dataset = [
                        'x_bukti_bayar_url'=>'<img src="'.$gotTxt.'"/>',
                        'write_uid'=>19,
                        'write_date'=>date('Y-m-d H:i:s')
                    ];
                    $this->mydb->update('x_customer_po',$dataset,'id = '.$id);
                    $this->output
                    ->set_content_type('application/json')
                    ->set_output(json_encode(array('data'=>$data,'status'=>'500','message'=>'Upload image succces!','url'=>$gotTxt,'datetime_upload'=>date('Y-m-d H:i:s'))));
                }
            }
}
