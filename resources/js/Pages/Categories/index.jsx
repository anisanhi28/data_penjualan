import Main from '@/Layouts/Main';

export default function Index({ auth }) {
  return (
    <Main auth={auth}>
      <h1 className="text-3xl font-bold mb-6">Kategori Produk</h1>
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Penjualan Hari Ini */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-green-600 mb-2">
            Penjualan Hari Ini
          </h2>
          <p className="text-3xl font-bold text-green-600">Rp 2.300.000</p>
          <p className="text-sm text-gray-500 mt-2">Total dari 4 transaksi</p>
        </div>
      </div>
    </Main>
  );
}
