<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('beranda', function (Blueprint $table) {
            $table->id();

            // field nama konten
            $table->string('nama_konten', 100);

            // field foto konten
            $table->string('image');

            // field deskripsi konten
            $table->text('deskripsi_konten', 100);
            
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('beranda');
    }
};
