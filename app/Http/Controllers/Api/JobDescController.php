<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreJobDescRequest;
use App\Http\Requests\UpdateJobDescRequest;
use App\Models\JobDesc;

class JobDescController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreJobDescRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreJobDescRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\JobDesc  $jobDesc
     * @return \Illuminate\Http\Response
     */
    public function show(JobDesc $jobDesc)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateJobDescRequest  $request
     * @param  \App\Models\JobDesc  $jobDesc
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateJobDescRequest $request, JobDesc $jobDesc)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\JobDesc  $jobDesc
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $jobDesc = JobDesc::findOrFail($id);
        return $jobDesc->delete();
    }
}
