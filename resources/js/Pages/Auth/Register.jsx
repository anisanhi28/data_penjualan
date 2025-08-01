import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const submit = e => {
    e.preventDefault();

    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <form onSubmit={submit}>
        {/* Name input */}
        <div>
          <InputLabel htmlFor="name" value="Nama" />

          <TextInput
            id="name"
            name="name"
            value={data.name}
            className="mt-1 block w-full"
            autoComplete="name"
            isFocused={true}
            onChange={e => setData('name', e.target.value)}
            required
          />

          <InputError message={errors.name} className="mt-2" />
        </div>
        {/* Email input */}
        <div className="mt-4">
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            onChange={e => setData('email', e.target.value)}
            required
          />

          <InputError message={errors.email} className="mt-2" />
        </div>
        {/* Role Input */}
        <div className="mt-4">
          <InputLabel htmlFor="role" value="Role" />

          <select
            id="role"
            name="role"
            value={data.role}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={e => setData('role', e.target.value)}
            required
          >
            <option value="">Pilih Role</option>
            <option value="sales">Sales</option>
            <option value="supervisor">Supervisor</option>
            <option value="manager">Manager</option>
          </select>

          <InputError message={errors.role} className="mt-2" />
        </div>
        {/* ID Karyawan */}
        <div className="mt-4">
          <InputLabel htmlFor="id_karyawan" value="ID Karyawan" />

          <TextInput
            id="id_karyawan"
            name="id_karyawan"
            value={data.id_karyawan}
            className="mt-1 block w-full"
            autoComplete="id_karyawan"
            isFocused={true}
            onChange={e => setData('id_karyawan', e.target.value)}
            required
          />

          <InputError message={errors.id_karyawan} className="mt-2" />
        </div>
        {/* Password Input */}
        <div className="mt-4">
          <InputLabel htmlFor="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={e => setData('password', e.target.value)}
            required
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel
            htmlFor="password_confirmation"
            value="Confirm Password"
          />

          <TextInput
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={e => setData('password_confirmation', e.target.value)}
            required
          />

          <InputError message={errors.password_confirmation} className="mt-2" />
        </div>

        <div className="mt-4 flex items-center justify-end">
          <Link
            href={route('login')}
            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Already registered?
          </Link>

          <PrimaryButton className="ms-4" disabled={processing}>
            Register
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
