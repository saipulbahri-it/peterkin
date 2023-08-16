<?php

namespace App\Http\Controllers;


class SpaController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('auth');
    }

    public function app()
    {
        // $kamar = Kamar::with('tipeKamar')->orderBy('id', 'DESC')->get()->toJson();
        // $logo = '`/ui/static/logo-17e50649.svg`';
        // $rooms = $kamar;
        // return view('spa.admin', compact('logo', 'rooms'));
        return view('app');
    }
}
