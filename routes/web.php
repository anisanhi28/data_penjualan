<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'auth' => [
            'user' => auth()->user(),
        ],
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::prefix('product-management')->name('product-management.')->group(function () {
        Route::get('/categories', [CategoryController::class, 'index'])->name('categories');
    });

    // Section Role Sales
    Route::middleware('role:sales')->prefix('sales')->name('sales.')->group(function () {
    });

    // Section Role Supervisor
    Route::middleware('role:supervisor')->prefix('supervisor')->name('supervisor.')->group(function () {
    });

    // Section Role Manager
    Route::middleware('role:manager')->prefix('manager')->name('manager.')->group(function () {
    });

    // Section Role Admin
    Route::middleware('role:admin')->prefix('admin')->name('admin.')->group(function () {

    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
