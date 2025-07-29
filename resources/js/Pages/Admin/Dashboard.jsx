import DSalesNav from '@/Components/DSalesNav';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
            <DSalesNav />

            <div className="pt-28 pb-8 px-6 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Selamat datang Admin👋</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Penjualan Hari Ini */}
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <h2 className="text-lg font-semibold mb-2 text-green-600">Penjualan Hari Ini</h2>
                        <p className="text-3xl font-bold text-green-600">Rp 2.300.000</p>
                        <p className="text-sm text-gray-500 mt-2">Total dari 4 transaksi</p>
                    </div>

                    {/* Target Bulanan */}
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <h2 className="text-lg font-semibold mb-2 text-blue-600">Target Bulanan</h2>
                        <p className="text-2xl font-bold text-blue-600">65%</p>
                        <p className="text-sm text-gray-500 mt-2">Dari target Rp 30.000.000</p>
                    </div>

                    {/* Laporan Belum Diisi */}
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <h2 className="text-lg font-semibold mb-2 text-red-600">Laporan Belum Diisi</h2>
                        <p className="text-3xl font-bold text-red-600">1 Hari</p>
                        <p className="text-sm text-gray-500 mt-2">Segera lengkapi laporan</p>
                    </div>
                </div>
            {/* Laporan Belum Diisi */}
                <div className="bg-white shadow-md rounded-2xl p-6">
                    <h2 className="text-lg font-semibold mb-2 text-red-600">Laporan Belum Diisi</h2>
                    <p className="text-3xl font-bold text-red-600">1 Hari</p>
                    <p className="text-sm text-gray-500 mt-2">Segera lengkapi laporan</p>
                </div>
            </div>
        </div>
    )}

