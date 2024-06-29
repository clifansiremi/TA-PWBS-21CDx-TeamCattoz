<?php

namespace App\Http\Controllers;

use App\Models\KsvLaut;
use Illuminate\Http\Request;

class KsvLautController extends Controller
{
    // buat inisialisasi untuk pengambilan model
    protected $model;

    // buat konstruktor
    function __construct()
    {
        // isi nilai variabel "$model"
        $this->model = new KsvLaut();
    }
    function viewData()
    {
        // jika data tidak ada
        if (count($this->model->viewData()) == 0) {
            $data = [];
            $error = 1;
            $message = "Konten tidak dapat ditemukan";
        }
        // jika konten tersedia
        else {
            // mengambil method "viewData" dari model "Beranda"
            $data = $this->model->viewData();
            $error = 0;
            $message = "Konten tersedia!";

        }

        return response(["beranda" => $data, "error" => $error, "message" => "Konten ini tidak dapat ditemukan"], http_response_code());

        // ambil method "viewData" dari model "Beranda"
        $data = $this->model->viewData();
    }

    // fungsi untuk tambah data
    function saveData(Request $req)
    {
        // ambil data foto konten
        $image = $req->image;

        // jika foto konten sudah ada
        if (count($this->model->checkSaveData($image)) != 0) {
            $error = 1;
            $message = "Data tidak bisa disimpan (foto sudah terpakai!)";
        }

        // jika foto kontennya belum ada
        else {

            // ambil request
            $image = $req->image;
            $nama_konten = $req->nama_konten;
            $deskripsi_konten = $req->deskripsi_konten;



            // proses simpan data
            $this->model->saveData($image, $nama_konten, $deskripsi_konten);

            $error = 0;
            $message = "Data Berhasil Disimpan";
        }

        return response(["error" => $error, "message" => $message], http_response_code());
    }

    // buat fungsi hapus data
    function deleteData($image)
    {
        // cek apakah foto konten tersedia atau tidak pada model checkData
        if (count($this->model->checkData($image)) == 1) {

            // panggil model "deleteData"
            $this->model->deleteData($image);

            $error = 0;
            $message = "Foto berhasil dihapus";
        }
        // jika foto tidak tersedia
        else {
            $error = 0;
            $message = "Foto gagal dihapus";
        }
        return response(["error" => $error, "message" => $message], http_response_code());
    }

    // buat fungsi untuk edit data
    function editData($image_lama, Request $req)
    {

        // ambil data foto konten
        $image = $req->image;

        if (count($this->model->checkEditData($image)) == 1) {

        } else {
            if (count($this->model->checkEditData($image_lama, $image)) == 0) {
                $image = $req->image;
                $nama_konten = $req->nama_konten;
                $deskripsi_konten = $req->deskripsi_konten;

                // panggil model "editData"
                $this->model->editData($image, $nama_konten, $deskripsi_konten, $image_lama);

                $error = 0;
                $message = "Foto berhasil diubah!";
            }
            // jika foto tidak tersedia
            else {
                $error = 1;
                $message = "Foto gagal diubah(foto sudah terpakai!";
            }
        }

        // cek apakah foto tersedia atau tidak pada model checkEditData
        // jika data tersedia
        return response(["error" => $error, "message" => $message], http_response_code());
    }
}
