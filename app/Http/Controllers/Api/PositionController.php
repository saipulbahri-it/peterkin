<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePositionRequest;
use App\Http\Requests\UpdatePositionRequest;
use App\Models\JobDesc;
use App\Models\Position;
use Illuminate\Http\Resources\Json\JsonResource;

class PositionController extends Controller
{
    protected $perPage = 200;

    public function __construct()
    {
        // $this->perPage = request('per_page', 200) <= 200 ? request('per_page') : $this->perPage;
        $this->perPage = 2200;
    }

    public function all()
    {
        $items = Position::withCount('jobDescs')->get();

        $items->load("jobDescs");

        return JsonResource::collection($items);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = Position::withCount('jobDescs')->paginate($this->perPage);

        $items->load("jobDescs");

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
     * @param  \App\Http\Requests\StorePositionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePositionRequest $request)
    {

        $position = Position::create($request->all());

        if ($request->has('job_descs')) {
            $newJobDescs = collect($request->job_descs)->whereNotNull("title")->map(function ($item) {
                return new JobDesc($item);
            });

            $position->jobDescs()->saveMany($newJobDescs);
        }

        return $position;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Position  $position
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Position::with('jobDescs')->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePositionRequest  $request
     * @param  \App\Models\Position  $position
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePositionRequest $request, Position $position)
    {
        if ($request->has('job_descs')) {
            foreach (collect($request->input('job_descs'))->whereNotNull('title') as $jobdesc) {
                $position->jobDescs()->updateOrCreate(["id" => @$jobdesc["id"]], $jobdesc);
            }
        }

        return $position->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Position  $position
     * @return \Illuminate\Http\Response
     */
    public function destroy(Position $position)
    {
        return $position->delete();
    }
}
