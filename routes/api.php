<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::post('/register', [\App\Http\Controllers\Api\AuthController::class, 'register']);
Route::post('/login', [\App\Http\Controllers\Api\AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [\App\Http\Controllers\Api\AuthController::class, 'logout']);
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResources(
        [
            'position' => 'App\Http\Controllers\Api\PositionController',
            'jobdesc' => 'App\Http\Controllers\Api\JobDescController',
            'users' => 'App\Http\Controllers\Api\UserController',
            'role' => 'App\Http\Controllers\Api\RoleController',
            'team' => 'App\Http\Controllers\Api\TeamController',
            'task' => 'App\Http\Controllers\Api\TaskController',
        ]
    );
});
