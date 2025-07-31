import { Link, useForm } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';
import { ChevronDown, ChevronUp, Package, LayoutDashboard, Tag, LogOut } from 'lucide-react';
import { useState } from 'react';

export default function DAdminSidebar() {
    const { post } = useForm();
    const { url } = usePage();
    const [openDropdown, setOpenDropdown] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    return (
        <aside className="h-screen w-64 bg-white/20 backdrop-blur-md shadow-md fixed top-0 left-0 z-50 flex flex-col px-6 py-8">
            <div className="flex items-center gap-3 mb-12">
                <Link href="/admin/dashboard">
                    <ApplicationLogo className="h-10 w-10 text-white" />
                </Link>
                <span className="text-white text-xl font-bold">Sales Dashboard</span>
            </div>

            <nav className="flex flex-col space-y-2 text-white">
                <Link
                    href="/sales/dashboard"
                    className={`flex items-center gap-2 px-3 py-2 rounded transition ${
                        url.startsWith('/admin/dashboard') ? 'bg-white/30 font-semibold' : 'hover:bg-white/20'
                    }`}
                >
                    <LayoutDashboard size={18} />
                    Dashboard
                </Link>

                {/* Manajemen Produk */}
                <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="flex items-center justify-between px-3 py-2 rounded hover:bg-white/20 transition"
                >
                    <span className="flex items-center gap-2">
                        <Package size={18} />
                        Manajemen Produk
                    </span>
                    {openDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {/* Dropdown links */}
                {openDropdown && (
                    <div className="ml-5 flex flex-col space-y-1">
                        <Link
                            href="/kategori"
                            className={`flex items-center gap-2 px-3 py-2 rounded transition ${
                                url.startsWith('/kategori') ? 'bg-white/30 font-semibold' : 'hover:bg-white/10'
                            }`}
                        >
                            <Tag size={16} />
                            Kategori
                        </Link>
                        <Link
                            href="/produk"
                            className={`flex items-center gap-2 px-3 py-2 rounded transition ${
                                url.startsWith('/produk') ? 'bg-white/30 font-semibold' : 'hover:bg-white/10'
                            }`}
                        >
                            <Package size={16} />
                            Produk
                        </Link>
                    </div>
                )}

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-left hover:bg-white/20 rounded px-3 py-2 transition"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </nav>
        </aside>
    );
}
