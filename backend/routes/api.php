<?php

use App\Models\Beranda;
use App\Models\KelolaIkan;
use App\Models\KsvLaut;
use App\Models\TentangKami;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// menu beranda
// route untuk tampil data
Route::get("/view", [Beranda::class, 'viewData']);

// route untuk tambah data
Route::post("/save", [Beranda::class, 'saveData']);

// route untuk delete data
Route::delete("/delete/{image}", [Beranda::class, 'deleteData']);

// route untuk edit data
Route::put("/edit/{image}", [Beranda::class, 'editData']);


// menu kelola ikan
// route untuk tampil data
Route::get("/view", [KelolaIkan::class, 'viewData']);

// route untuk tambah data
Route::post("/save", [KelolaIkan::class, 'saveData']);

// route untuk delete data
Route::delete("/delete/{image}", [KelolaIkan::class, 'deleteData']);

// route untuk edit data
Route::put("/edit/{image}", [KelolaIkan::class, 'editData']);


// menu konservasi laut
// route untuk tampil data
Route::get("/view", [KsvLaut::class, 'viewData']);

// route untuk tambah data
Route::post("/save", [KsvLaut::class, 'saveData']);

// route untuk delete data
Route::delete("/delete/{image}", [KsvLaut::class, 'deleteData']);

// route untuk edit data
Route::put("/edit/{image}", [KsvLaut::class, 'editData']);


// menu tentang kami
// route untuk tampil data
Route::get("/view", [TentangKami::class, 'viewData']);

// route untuk tambah data
Route::post("/save", [TentangKami::class, 'saveData']);

// route untuk delete data
Route::delete("/delete/{image}", [TentangKami::class, 'deleteData']);

// route untuk edit data
Route::put("/edit/{image}", [TentangKami::class, 'editData']);