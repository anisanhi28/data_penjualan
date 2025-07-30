import { Link, useForm } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';
import { usePage } from '@inertiajs/react';

export default function DSalesSidebar() {
    const { post } = useForm();
    const { url } = usePage(); 

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    return (
        <aside className="h-screen w-64 bg-white/20 backdrop-blur-md shadow-md fixed top-0 left-0 z-50 flex flex-col px-6 py-8">
            <div className="flex items-center gap-3 mb-12">
                <Link href="/sales/dashboard">
                    <ApplicationLogo className="h-10 w-10 text-white" />
                </Link>
                <span className="text-white text-xl font-bold">Sales Dashboard</span>
            </div>

            <nav className="flex flex-col space-y-2 text-white">
                <Link 
                    href="/sales/dashboard"
                    className={`px-3 py-2 rounded transition ${
                        url.startsWith('/sales/dashboard') ? 'bg-white/30 font-semibold' : 'hover:bg-white/20'
                    }`}
                >
                    🏠 Dashboard
                </Link>

                <button
                    disabled
                    className="text-left text-white px-3 py-2 rounded opacity-50 cursor-not-allowed"
                >
                    📦 Produk (segera)
                </button>

                <button
                    disabled
                    className="text-left text-white px-3 py-2 rounded opacity-50 cursor-not-allowed"
                >
                    🧾 Transaksi (segera)
                </button>

                <button
                    onClick={handleLogout}
                    className="text-left hover:bg-white/20 rounded px-3 py-2 transition"
                >
                    🚪 Logout
                </button>
            </nav>
        </aside>
    );
}
