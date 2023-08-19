<?php

use App\Http\Controllers\SpaController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return ['Larasa' => app()->version()];
// });

Route::prefix('auth')->group(function () {
    require __DIR__ . '/auth.php';
});


Route::middleware('auth')->group(function () {
    Route::get('/app{any}', [SpaController::class, 'app'])->where('any', '.*');
});

Route::get('/{any}', [SpaController::class, 'index'])->where('any', '.*');
