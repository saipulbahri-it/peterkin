<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class UserController extends Controller
{
    protected $perPage = 15;

    public function __construct()
    {
        $this->perPage = request('per_page', 15) <= 100 ? request('per_page') : $this->perPage;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = User::with('teams', 'currentTeam', 'currentPosition')->paginate($this->perPage);

        return JsonResource::collection($items)->additional([
            'field' => [
                [
                    'key' => 'name',
                    'label' => trans('user.field.name'),
                ], [
                    'key' => 'number',
                    'label' => trans('user.field.number'),
                ], [
                    'key' => 'class',
                    'label' => trans('user.field.class'),
                ], [
                    'key' => 'position',
                    'label' => trans('user.field.position'),
                ],
            ],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::with(['currentPosition', 'currentTeam', 'teams'])->findOrFail($id);
        $user->currentTeam?->makeHidden(['created_at', 'updated_at']);
        $user->currentPosition?->makeHidden(['created_at', 'updated_at']);
        $user->teams?->makeHidden(['pivot', 'created_at', 'updated_at']);
        $user->ownedTeams?->makeHidden(['pivot', 'created_at', 'updated_at']);

        return $user;
    }

    /**
     * Update the specified resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update($request->all());

        if ($request->current_team_id) {
            // $user->teams()->detach($request->current_team_id);
            // $user->teams()->attach($request->current_team_id);
            $user->switchTeam($request->current_team_id);
        }

        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        return $user->delete();
    }
}
