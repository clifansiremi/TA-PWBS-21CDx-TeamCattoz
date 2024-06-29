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
        Schema::create('users', function (Blueprint $table) {
            // field id
            $table->integer('id')->autoIncrement();

            // field nama
            $table->string('nama', 100);

            // field email
            $table->string('email', 100)->unique();

            // field kata sandi
            $table->string('sandi');

            // field ingat kata sandi
            $table->rememberToken();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
