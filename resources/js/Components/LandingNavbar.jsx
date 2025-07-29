// resources/js/Components/LandingNavbar.jsx

import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';

export default function LandingNavbar() {
    return (
        <nav className="w-full px-14 py-4 flex justify-between items-center bg-white/20 backdrop-blur-md shadow-md fixed top-0 z-50">
            <div className="flex items-center gap-2">
                <Link href="/">
                    <ApplicationLogo className="h-10 w-10 text-white" />
                </Link>
                <span className="text-white text-lg font-bold">Sales Dashboard</span>
            </div>

            <div className="space-x-4">
                <Link href={route('login')} className="text-white hover:underline">
                    Login
                </Link>
                <Link href={route('register')} className="text-white hover:underline">
                    Register
                </Link>
            </div>
        </nav>
    );
}