import DSalesNav from '@/Components/DSalesNav';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
            <DSalesNav />

            <div className="pt-32 px-6 md:px-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Selamat Datang di Sales Dashboard</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                    Aplikasi internal untuk mencatat, mengelola, dan memonitor penjualan harian tim sales Anda.
                </p>
            </div>

            <section className="mt-24 px-6 md:px-20">
                <h2 className="text-2xl font-semibold mb-6 text-center">Fitur Utama</h2>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold mb-2">Laporan Harian Sales</h3>
                        <p>Sales dapat mencatat aktivitas penjualan secara harian dengan mudah dan cepat.</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold mb-2">Pemantauan Supervisor & Manager</h3>
                        <p>Supervisor dan manajer dapat melihat performa sales secara real-time.</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold mb-2">Rekap & Statistik Penjualan</h3>
                        <p>Admin dapat merekap seluruh data penjualan dan mengunduh laporan dengan mudah.</p>
                    </div>
                </div>
            </section>

            <footer className="mt-24 py-6 text-center text-sm text-white/80">
                &copy; {new Date().getFullYear()} Sales Dashboard. Semua Hak Dilindungi.
            </footer>
        </div>
    );
}
