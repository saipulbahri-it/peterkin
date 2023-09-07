<?php

use App\Models\User;
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
    // dd($request->user()->isTeamOwner);
    $user = User::with('currentPosition', 'currentTeam', 'teams')->findOrFail($request->user()->id);
    $user->currentPosition?->makeHidden(['created_at', 'updated_at']);
    $user->currentTeam?->makeHidden(['created_at', 'updated_at']);
    $user->teams?->makeHidden(['pivot', 'created_at', 'updated_at']);
    $user->ownedTeams?->makeHidden(['pivot', 'created_at', 'updated_at']);
    $user->isTeamOwner = $user->isTeamOwner() ?? false;

    return $user;
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
    Route::get('positions', [App\Http\Controllers\Api\PositionController::class, 'all']);
    Route::get('teams', [App\Http\Controllers\Api\TeamController::class, 'all']);
    Route::post('task/{id}/setStatus', [App\Http\Controllers\Api\TaskController::class, 'setStatus']);
    // user/owned-teams
});
