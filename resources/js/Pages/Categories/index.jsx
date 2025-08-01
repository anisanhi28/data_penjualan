import Main from '@/Layouts/Main';
import { Link, usePage, router } from '@inertiajs/react';

export default function Index({ auth, categories }) {
  const handleDelete = (id) => {
    if (confirm('Apakah kamu yakin ingin menghapus kategori ini?')) {
      router.delete(`/categories/${id}`);
    }
  };

  return (
    <Main auth={auth}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Kategori Produk</h1>
        <Link
          href="/categories/create"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          + Tambah Kategori
        </Link>
      </div>

      {/* Tabel Kategori */}
      <div className="overflow-x-auto bg-white shadow-md rounded-2xl p-6">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-sm text-gray-600 border-b">
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Nama Kategori</th>
              <th className="py-2 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan="3" className="py-4 px-4 text-center text-gray-500">
                  Belum ada kategori.
                </td>
              </tr>
            ) : (
              categories.map((category, index) => (
                <tr key={category.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4 text-black text-sm">{index + 1}</td>
                  <td className="py-2 px-4 text-black text-sm">{category.nama}</td>
                  <td className="py-2 px-4 space-x-2">
                    <Link
                      href={`/categories/${category.id}/edit`}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(category.id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Main>
  );
}