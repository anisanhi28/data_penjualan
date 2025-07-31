import DSalesSidebar from '@/Components/DSalesSidebar';
import Topbar from '@/Components/Topbar';

export default function Dashboard({auth}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex">
            <DSalesSidebar />
            <div className="flex-1">
                <div className="sticky top-0 z-30 ml-64">
                    <Topbar auth={auth} />
                </div>
                <div className="px-10 ml-64">
                    {/* Heading */}
                    <h1 className="text-3xl font-bold mb-6">Selamat datang Sales 👋</h1>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {/* Penjualan Hari Ini */}
                        <div className="bg-white shadow-md rounded-2xl p-6">
                            <h2 className="text-lg font-semibold text-green-600 mb-2">Penjualan Hari Ini</h2>
                            <p className="text-3xl font-bold text-green-600">Rp 2.300.000</p>
                            <p className="text-sm text-gray-500 mt-2">Total dari 4 transaksi</p>
                        </div>

                        {/* Target Bulanan */}
                        <div className="bg-white shadow-md rounded-2xl p-6">
                            <h2 className="text-lg font-semibold text-blue-600 mb-2">Target Bulanan</h2>
                            <p className="text-2xl font-bold text-blue-600">65%</p>
                            <p className="text-sm text-gray-500 mt-2">Dari target Rp 30.000.000</p>
                        </div>

                        {/* Laporan Belum Diisi */}
                        <div className="bg-white shadow-md rounded-2xl p-6">
                            <h2 className="text-lg font-semibold text-red-600 mb-2">Laporan Belum Diisi</h2>
                            <p className="text-3xl font-bold text-red-600">1 Hari</p>
                            <p className="text-sm text-gray-500 mt-2">Segera lengkapi laporan</p>
                        </div>
                    </div>

                    {/* Section Tambahan */}
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <h2 className="text-lg font-semibold text-red-600 mb-2">Laporan Belum Diisi (Tambahan)</h2>
                        <p className="text-3xl font-bold text-red-600">1 Hari</p>
                        <p className="text-sm text-gray-500 mt-2">Segera lengkapi laporan</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
