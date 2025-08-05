import Main from '@/Layouts/Main';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';

export default function Edit({ auth, product, categories }) {
    const { data, setData, put, processing, errors } = useForm({
        nama_produk: product.nama_produk || '',
        kategori_id: product.kategori_id || '',
        deskripsi: product.deskripsi || '',
        harga: product.harga || '',
        stok: product.stok || '',
        gambar: null,
        kode: product.kode || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/products/${product.id}`);
      };

    return (
        <Main auth={auth}>
            <h1 className="text-2xl font-bold mb-4">Edit Produk</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow-md w-full"
                encType="multipart/form-data"
            >
                <div className="mb-4">
                    <InputLabel htmlFor="kode" value="Kode Produk" />
                    <TextInput
                        id="kode"
                        name="kode"
                        value={data.kode}
                        className="mt-1 block w-full text-black text-sm"
                        autocomplete="off"
                        isFocused={true}
                        onChange={(e) => setData('kode', e.target.value)}
                        required
                    />
                    <InputError message={errors.kode} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="nama_produk" value="Nama Produk" />
                    <TextInput
                        id="nama_produk"
                        name="nama_produk"
                        value={data.nama_produk}
                        className="mt-1 block w-full text-black text-sm"
                        onChange={(e) => setData('nama_produk', e.target.value)}
                        required
                    />
                    <InputError message={errors.nama_produk} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="kategori_id" value="Kategori" />
                    <select
                        id="kategori_id"
                        name="kategori_id"
                        className="mt-1 block w-full text-black text-sm border border-gray-300 rounded"
                        value={data.kategori_id}
                        onChange={(e) => setData('kategori_id', e.target.value)}
                        required
                    >
                        <option value="">-- Pilih Kategori --</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.nama}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.kategori_id} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="deskripsi" value="Deskripsi" />
                    <textarea
                        id="deskripsi"
                        name="deskripsi"
                        value={data.deskripsi}
                        onChange={(e) => setData('deskripsi', e.target.value)}
                        className="mt-1 block w-full text-black text-sm border border-gray-300 rounded"
                        rows="4"
                    ></textarea>
                    <InputError message={errors.deskripsi} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="harga" value="Harga" />
                    <TextInput
                        id="harga"
                        name="harga"
                        type="number"
                        value={data.harga}
                        className="mt-1 block w-full text-black text-sm"
                        onChange={(e) => setData('harga', e.target.value)}
                        required
                    />
                    <InputError message={errors.harga} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="stok" value="Stok" />
                    <TextInput
                        id="stok"
                        name="stok"
                        type="number"
                        value={data.stok}
                        className="mt-1 block w-full text-black text-sm"
                        onChange={(e) => setData('stok', e.target.value)}
                        required
                    />
                    <InputError message={errors.stok} className="mt-2" />
                </div>

                <div className="mb-6">
                    <InputLabel htmlFor="gambar" value="Gambar Produk" />
                    {product.gambar_url && (
                        <div className="mb-2">
                            <img
                                src={product.gambar_url}
                                alt="Gambar Produk"
                                className="w-32 h-32 object-cover rounded"
                            />
                        </div>
                    )}
                    <input
                        type="file"
                        id="gambar"
                        name="gambar"
                        accept="image/*"
                        className="mt-1 block w-full text-sm text-black"
                        onChange={(e) => setData('gambar', e.target.files[0])}
                    />
                    <InputError message={errors.gambar} className="mt-2" />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                    Update
                </button>
            </form>
        </Main>
    );
}
