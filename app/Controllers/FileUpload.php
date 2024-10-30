<?php

namespace App\Controllers;

use CodeIgniter\Controller;

class FileUpload extends BaseController
{
    public function upload()
    {
        // Ambil validasi service
        $validation = \Config\Services::validation();

        // Set aturan validasi untuk file yang diupload
        $validation->setRules([
            'file' => [
                'label' => 'File',
                'rules' => 'uploaded[file]'
                        . '|mime_in[file,image/jpg,image/jpeg,image/png]'
                        . '|max_size[file,5048]', // max size 2MB
            ],
        ]);

        // Jika validasi gagal, kembalikan respon error
        if (!$validation->withRequest($this->request)->run()) {
            return $this->response->setJSON([
                'status' => 'error',
                'errors' => $validation->getErrors()
            ]);
        }

        // Mendapatkan file yang diupload
        $file = $this->request->getFile('file');

        // Tentukan nama file asli
        $fileName = $file->getName();
 
        $uploadPath = './uploads/activity/'; // Jalur absolut di luar folder CI

        // Cek apakah folder ada, jika tidak buat folder baru
        if (!is_dir($uploadPath)) {
            mkdir($uploadPath, 0777, true);
        }

        // Hapus file lama jika ada
        $filePath = $uploadPath . '/' . $fileName;
        if (file_exists($filePath)) {
            unlink($filePath); // Menghapus file lama dengan nama yang sama
        }

        // Simpan file ke folder tujuan (otomatis menimpa jika file sudah ada)
        if ($file->move($uploadPath, $fileName)) {
            return $this->response->setJSON([
               'error' => false,
                'message' => 'File uploaded successfully',
                'file_name' => $fileName,
                'file_path' => $filePath,
                'photo' => $filePath, 
            ]);
        }

        // Jika file gagal diupload, kembalikan respon error
        return $this->response->setJSON([
            'error' => true,
            'message' => 'Failed to upload file'
        ]);
    }


    public function uploads_x_customer_po()
    {
        // Ambil validasi service
        $validation = \Config\Services::validation();

        // Set aturan validasi untuk file yang diupload
        $validation->setRules([
            'file' => [
                'label' => 'File',
                'rules' => 'uploaded[file]'
                        . '|mime_in[file,image/jpg,image/jpeg,image/png]'
                        . '|max_size[file,5048]', // max size 2MB
            ],
        ]);

        // Jika validasi gagal, kembalikan respon error
        if (!$validation->withRequest($this->request)->run()) {
            return $this->response->setJSON([
                'status' => 'error',
                'errors' => $validation->getErrors()
            ]);
        }

        // Mendapatkan file yang diupload
        $file = $this->request->getFile('file');

        // Tentukan nama file asli
        $fileName = $file->getName();
 
        $uploadPath = './uploads/x_customer_po/'; // Jalur absolut di luar folder CI

        // Cek apakah folder ada, jika tidak buat folder baru
        if (!is_dir($uploadPath)) {
            mkdir($uploadPath, 0777, true);
        }

        // Hapus file lama jika ada
        $filePath = $uploadPath .   $fileName;
        if (file_exists($filePath)) {
            unlink($filePath); // Menghapus file lama dengan nama yang sama
        }

        // Simpan file ke folder tujuan (otomatis menimpa jika file sudah ada)
        if ($file->move($uploadPath, $fileName)) {

            $id = $_POST['id'];

            $this->db->table("x_customer_po")->update([
                "x_bukti_bayar_url" =>  $filePath,  
            ]," id = $id ");

            return $this->response->setJSON([
               'error' => false,
                'message' => 'File uploaded successfully',
                'file_name' => $fileName,
                'file_path' => $filePath,
                'photo' => $filePath, 
            ]);
        }

        // Jika file gagal diupload, kembalikan respon error
        return $this->response->setJSON([
            'error' => true,
            'message' => 'Failed to upload file'
        ]);
    }
}
