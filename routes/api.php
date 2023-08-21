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
            'users' => 'App\Http\Controllers\Api\UserController',
            'role' => 'App\Http\Controllers\Api\RoleController',
            'task' => 'App\Http\Controllers\Api\TaskController',
            'team' => 'App\Http\Controllers\Api\TeamController',
            'organization' => 'App\Http\Controllers\Api\OrganizationController',
            'department' => 'App\Http\Controllers\Api\DepartmentController',
            'employee' => 'App\Http\Controllers\Api\EmployeeController',
        ]
    );
});
