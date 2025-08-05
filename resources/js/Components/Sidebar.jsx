import { Link, useForm, usePage } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';
import {
  ChevronDown,
  ChevronUp,
  Package,
  LayoutDashboard,
  Tag,
  LogOut,
  FileText,
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DAdminSidebar() {
  const { post } = useForm();
  const { url, props } = usePage();
  const [openDropdown, setOpenDropdown] = useState(false);

  const user = props.auth.user;

  const handleLogout = e => {
    e.preventDefault();
    post(route('logout'));
  };

  let dashboardTitle = 'Dashboard';
  if (user.role === 'admin') {
    dashboardTitle = 'Dashboard Admin';
  } else if (user.role === 'manager') {
    dashboardTitle = 'Dashboard Manager';
  } else if (user.role === 'supervisor') {
    dashboardTitle = 'Dashboard Supervisor';
  } else if (user.role === 'sales') {
    dashboardTitle = 'Dashboard Sales';
  }

  const isManajemenProdukActive = url.startsWith('/categories') || url.startsWith('/produk');

  useEffect(() => {
    if (isManajemenProdukActive) {
      setOpenDropdown(true);
    }
  }, []);

  return (
    <aside className="h-screen w-64 bg-white/20 backdrop-blur-md shadow-md fixed top-0 left-0 z-50 flex flex-col px-6 py-8">
      <div className="flex items-center gap-3 mb-12">
        <Link href="/admin/dashboard">
          <ApplicationLogo className="h-10 w-32 text-white" />
        </Link>
        <span className="text-white text-xl font-bold">{dashboardTitle}</span>
      </div>

      <nav className="flex flex-col space-y-2 text-white">
        <Link
          href="/admin/dashboard"
          className={`flex items-center gap-2 px-3 py-2 rounded transition ${
            url.startsWith('/admin/dashboard')
              ? 'bg-white/30 font-semibold'
              : 'hover:bg-white/20'
          }`}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        {user.role === 'admin' && (
          <>
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className={`flex items-center justify-between px-3 py-2 rounded transition ${
                isManajemenProdukActive ? 'bg-white/20 font-semibold' : 'hover:bg-white/20'
              }`}
            >
              <span className="flex items-center gap-2">
                <Package size={18} />
                Manajemen Produk
              </span>
              {openDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {openDropdown && (
              <div className="ml-5 flex flex-col space-y-1">
                <Link
                  href="/categories"
                  className={`flex items-center gap-2 px-3 py-2 rounded transition ${
                    url.startsWith('/categories')
                      ? 'bg-white/30 font-semibold'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Tag size={16} />
                  Kategori
                </Link>
                <Link
                  href="/products"
                  className={`flex items-center gap-2 px-3 py-2 rounded transition ${
                    url.startsWith('/products')
                      ? 'bg-white/30 font-semibold'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Package size={16} />
                  Produk
                </Link>
              </div>
            )}
          </>
        )}

        {user.role === 'sales' && (
          <Link
            href="/laporan-harian"
            className={`flex items-center gap-2 px-3 py-2 rounded transition ${
              url.startsWith('/laporan-harian')
                ? 'bg-white/30 font-semibold'
                : 'hover:bg-white/20'
            }`}
          >
            <FileText size={18} />
            Laporan Harian
          </Link>
        )}

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
