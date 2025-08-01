<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Manager/Dashboard',[
            'auth' => [
                'user' => auth()->user(),
            ],
        ]);
    }
}
