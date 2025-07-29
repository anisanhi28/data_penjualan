import { Link, useForm } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';

export default function DSalesNav() {
    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

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
                    Laporan
                </Link>
                <Link href={route('register')} className="text-white hover:underline">
                    Statistik
                </Link>

                {/* Tombol Logout */}
                <button
                    onClick={handleLogout}
                    className="text-white hover:underline"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}
