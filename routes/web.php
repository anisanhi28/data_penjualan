<?php

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

    // Section Role Sales
    Route::middleware('role:sales')->prefix('sales')->name('sales.')->group(function () {
        Route::prefix('dashboard')->name('dashboard.')->group(function () {
            Route::get('/', function () {
                return Inertia::render('Sales/Dashboard',[
                    'auth' => [
                        'user' => auth()->user(),
                    ],
                ]);
            })->name('index');
        });
    });

    // Section Role Supervisor
    Route::middleware('role:supervisor')->prefix('supervisor')->name('supervisor.')->group(function () {
        Route::prefix('dashboard')->name('dashboard.')->group(function () {
            Route::get('/', function () {
                return Inertia::render('Supervisor/Dashboard',[
                    'auth' => [
                        'user' => auth()->user(),
                    ],
                ]);
            })->name('index');
        });
    });

    // Section Role Manager
    Route::middleware('role:manager')->prefix('manager')->name('manager.')->group(function () {
        Route::prefix('dashboard')->name('dashboard.')->group(function () {
            Route::get('/', function () {
                return Inertia::render('Manager/Dashboard',[
                    'auth' => [
                        'user' => auth()->user(),
                    ],
                ]);
            })->name('index');
        });
    });

    // Section Role Admin
    Route::middleware('role:admin')->prefix('admin')->name('admin.')->group(function () {
        Route::prefix('dashboard')->name('dashboard.')->group(function () {
            Route::get('/', function () {
                return Inertia::render('Admin/Dashboard',[
                    'auth' => [
                        'user' => auth()->user(),
                    ],
                ]);
            })->name('index');
        });

        Route::prefix('categories')->name('categories.')->group(function () {
            Route::get('/', function () {
                return Inertia::render('Admin/Categories/Index', [
                    'auth' => [
                        'user' => auth()->user(),
                    ],
                ]);
            })->name('index');
        });
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
