<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Beranda extends Model
{
    protected $fillable = [
        'image', 'nama_konten', 'deskripsi_konten'
    ];
}
