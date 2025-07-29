<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        // Pastikan pengguna sudah login
        $user = auth()->user()->role;

        foreach ($roles as $role) {
            if ($user === $role) { // Contoh: jika kolom 'role' ada di tabel users
                return $next($request);
            }
        }

        abort(403, 'Unauthorized role.');
    }
}
