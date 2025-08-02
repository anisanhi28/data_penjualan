import Main from '@/Layouts/Main';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';

export default function Edit({ auth, category }) {
  const { data, setData, put, processing, errors } = useForm({
    nama: category.nama || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/categories/${category.id}`);
  };

  return (
    <Main auth={auth}>
      <h1 className="text-2xl font-bold mb-4">Edit Kategori</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full">
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
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Perbarui
        </button>
      </form>
    </Main>
  );
}
