// resources/js/Components/LandingNavbar.jsx

import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';

function getDashboardRoute(role) {
    switch (role) {
        case 'admin':
            return route('admin.dashboard.index');
        case 'manager':
            return route('manager.dashboard.index');
        case 'supervisor':
            return route('supervisor.dashboard.index');
        case 'sales':
            return route('sales.dashboard.index');
        default:
            return abort(404);
    }
}


export default function LandingNavbar({ auth }) {
    return (
        <nav className="w-full px-14 py-4 flex justify-between items-center bg-white/20 backdrop-blur-md shadow-md fixed top-0 z-50">
            <div className="flex items-center gap-2">
                <Link href="/">
                    <ApplicationLogo className="h-10 w-10 text-white" />
                </Link>
                <span className="text-white text-lg font-bold">Sales Dashboard</span>
            </div>

            <div className="space-x-4">
                {auth && auth.user ? (
                    <>
                        <Link
                            href={getDashboardRoute(auth.user.role)}
                            className="text-white hover:underline"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="text-white hover:underline"
                        >
                            Logout
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href={route('login')} className="text-white hover:underline">
                            Login
                        </Link>
                        <Link href={route('register')} className="text-white hover:underline">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}
