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
        $items = User::with("teams", "currentTeam")->paginate($this->perPage);

        return JsonResource::collection($items)->additional([
            'field' => array(
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
                ]
            )
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
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
