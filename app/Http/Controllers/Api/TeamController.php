<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TeamController extends Controller
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
        $items = Team::paginate($this->perPage);

        return JsonResource::collection($items)->additional([
            'field' => array(
                [
                    'name' => 'name',
                    'label' => trans('team.field.name')
                ], [
                    'key' => 'owner',
                    'label' => trans('team.field.owner'),
                ]
            )
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
