import Main from '@/Layouts/Main';
import { Link, usePage, router } from '@inertiajs/react';
import AlertMessage from '@/Components/AlertMessage';

export default function Index({ auth, products, success, error }) {
    const handleDelete = id => {
    if (confirm('Apakah kamu yakin ingin menghapus kategori ini?')) {
      router.delete(`/products/${id}`);
    }
  };

  return(
    <Main auth = {auth}>
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Daftar Produk</h1>
        <Link
          href="/products/create"
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg"
        >
          + Tambah Produk
        </Link>
        </div>

        {/* Session Flash Message */}
        <AlertMessage success={success} error={error} />

        <div className="overflow-x-auto bg-white shadow-md rounded-2xl p-6">
            <table className="min-w-full">
                <thead>
                    <tr className="text-left text-sm text-gray-600 border-b">
                        <th className="py-2 px-4">#</th>
                        <th className="py-2 px-4">Nama Produk</th>
                        <th className="py-2 px-4">Kategori</th>
                        <th className="py-2 px-4">Harga</th>
                        <th className="py-2 px-4">Stok</th>
                        <th className="py-2 px-4">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? (
                        <tr>
                            <td colSpan="3" className="py-4 px-4 text-center text-gray-500">
                            Belum ada kategori.
                            </td>
                        </tr>
                    ) : (
                        products.map((product, index) => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">
                            <td className="py-2 px-4 text-black text-sm">{index + 1}</td>
                            <td className="py-2 px-4 text-black text-sm">{product.nama_produk}</td>
                            <td className="py-2 px-4 text-black text-sm">{product.category?.nama || '-'}</td>
                            <td className="py-2 px-4 text-black text-sm">{product.harga}</td>
                            <td className="py-2 px-4 text-black text-sm">{product.stok}</td>
                            <td className="py-2 px-4 space-x-2">
                            <Link
                            href={`/products/${product.id}/edit`}
                            className="text-blue-600 hover:underline text-sm"
                            >
                            Edit
                            </Link>
                            <button
                            onClick={() => handleDelete(product.id)}
                            className="text-red-600 hover:underline text-sm"
                            >
                            Hapus
                            </button>
                        </td>
                        </tr>
                    ))
                    )
                }
                </tbody>
            </table>
        </div>
    </Main>
  );
}
