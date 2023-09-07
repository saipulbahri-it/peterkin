<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskController extends Controller
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
        $items = Task::with(["assignedTo", "assignedBy"])
            ->where('user_id', auth()->user()->id)
            ->orWhere('assigned_to', auth()->user()->id)
            ->orderBy('id', 'DESC')->paginate($this->perPage);

        $items->load('jobDesc');

        return JsonResource::collection($items)->additional([
            'field' => [
                [
                    'name' => 'name',
                    'label' => trans('team.field.name'),
                ], [
                    'key' => 'owner',
                    'label' => trans('team.field.owner'),
                ],
            ],
        ]);

        return JsonResource::collection($items);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // assigned_to
        // assigned_by
        $data = $request->all();

        if (!$request->assigned_to) {
            $data['assigned_to'] = auth()->user()->id;
        }

        $data['assigned_by'] = auth()->user()->id;

        return $request->user()->tasks()->create($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Task::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);

        return $task->update($request->all());
    }

    public function setStatus(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        if ($request->task_status) {
            $task->task_status = $request->task_status;
            $task->save();
        }

        return $task;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task = Task::findOrFail($id);

        return $task->delete();
    }
}
