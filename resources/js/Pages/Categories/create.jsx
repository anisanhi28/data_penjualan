import Main from '@/Layouts/Main';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';

export default function Create({ auth }) {
  const { data, setData, post, processing, errors } = useForm({
    nama: '', // Gunakan 'nama' untuk konsistensi dengan field database
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/categories');
  };

  return (
    <Main auth={auth}>
      <h1 className="text-2xl font-bold mb-4">Tambah Kategori</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full"
      >
        <div className="mb-4">
          <InputLabel htmlFor="nama" value="Nama Kategori" />
          <TextInput
            id="nama"
            name="nama"
            value={data.nama}
            className="mt-1 block w-full text-black text-sm"
            autoComplete="off"
            isFocused={true}
            onChange={(e) => setData('nama', e.target.value)}
            required
          />
          <InputError message={errors.nama} className="mt-2" />
        </div>
        <button
          type="submit"
          disabled={processing}
          className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700"
        >
          Simpan
        </button>
      </form>
    </Main>
  );
}