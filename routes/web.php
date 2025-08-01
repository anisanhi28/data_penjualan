<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Sales\DashboardController as SalesDashboardController;
use App\Http\Controllers\Supervisor\DashboardController as SupervisorDashboardController;
use App\Http\Controllers\Manager\DashboardController as ManagerDashboardController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
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
            Route::get('/', [SalesDashboardController::class, 'index'])->name('index');
        });
    });

    // Section Role Supervisor
    Route::middleware('role:supervisor')->prefix('supervisor')->name('supervisor.')->group(function () {
        Route::prefix('dashboard')->name('dashboard.')->group(function () {
            Route::get('/', [SupervisorDashboardController::class,'index'])->name('index');
        });
    });

    // Section Role Manager
    Route::middleware('role:manager')->prefix('manager')->name('manager.')->group(function () {
        Route::prefix('dashboard')->name('dashboard.')->group(function () {
            Route::get('/', [ManagerDashboardController::class,'index'])->name('index');
        });
    });

    // Section Role Admin
    Route::middleware('role:admin')->prefix('admin')->name('admin.')->group(function () {

        Route::prefix('dashboard')->name('dashboard.')->group(function () {
            Route::get('/', [AdminDashboardController::class,'index'])->name('index');
        });

        Route::prefix('product-management')->name('product-management.')->group(function () {
            Route::prefix('categories')->name('categories.')->group(function () {
                Route::get('/', [CategoryController::class, 'index'])->name('index');
                // Route::get('/create', [CategoryController::class, 'create'])->name('create');
                // Route::post('/', [CategoryController::class, 'store'])->name('store');
                // Route::get('/{category}/edit', [CategoryController::class, 'edit'])->name('edit');
                // Route::put('/{category}', [CategoryController::class, 'update'])->name('update');
                // Route::delete('/{category}', [CategoryController::class, 'destroy'])->name('destroy');
            });
        });
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
