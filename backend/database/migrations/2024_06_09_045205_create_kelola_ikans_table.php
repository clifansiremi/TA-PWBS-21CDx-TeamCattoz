<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kelola_ikan', function (Blueprint $table) {
            $table->id();

            // field nama konten
            $table->string('nama_konten', 100);

            // field foto konten
            $table->string('image');

            // field deskripsi konten
            $table->text('deskripsi_konten');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kelola_ikan');
    }
};
