<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TentangKami extends Model
{
    // agar table dapat diinput
    protected $fillable = [
        'image', 'nama_konten', 'deskripsi_konten'
    ];

    // buat variabel untuk inisialisasi tabel
    protected $table = "beranda";

    // buat fungsi untuk menampilkan data
    function viewData()
    {
        // kalau ada message, tambahkan where
        $query = $this->select("id AS id_konten", "image AS foto", "nama_konten AS nama", "deskripsi_konten AS deskripsi")->from($this->table)->orderBy("id");

        return $query->get;
    }

    // buat fungsi untuk cek simpan data
    function checkSaveData($image)
    {
        $query = $this->select("image")->from($this->table)->where("image", "=", $image);

        return $query->get();
    }

    // buat fungsi untuk simpan data
    function saveData($image, $nama_konten, $dekripsi_konten)
    {
        $this->insert([
            "image" => $image,
            "nama_konten" => $nama_konten,
            "deskripsi_konten" => $dekripsi_konten,
        ]);
    }

    // buat fungsi untuk check data (berdasarkan foto konten)
    function checkData($image)
    {
        $query = $this->select("id")->whereRaw("TO_BASE64(image) = '$image'");

        return $query->get();
    }

    // buat fungsi untuk hapus data
    function deleteData($image)
    {
        $this->whereRaw("TO_BASE64(image) = '$image'")->delete();
    }

    // buat fungsi untuk cek edit data
    function checkEditData($image_lama, $image)
    {
        $query = $this->select("image")->where("image", "=", $image)->whereRaw("TO_BASE64(image) != '$image_lama'")->get();

        return $query;
    }

    // buat fungsi untuk edit data
    function editData($image, $nama_konten, $dekripsi_konten)
    {
        $this->insert([
            "image" => $image,
            "nama_konten" => $nama_konten,
            "deskripsi_konten" => $dekripsi_konten,
        ]);
    }
}
