import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
    user
}) {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    return (
        <section className={`bg-white shadow-md rounded-xl p-6 ${className}`}>
            <header className="mb-6 border-b pb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    Profil Pengguna
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                    Perbarui informasi akun dan alamat email Anda.
                </p>
            </header>

            <form onSubmit={submit} className="space-y-6">
                {/* Nama */}
                <div>
                    <InputLabel htmlFor="name" value="Nama Lengkap" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>

                {/* Email */}
                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />
                    <InputError className="mt-2" message={errors.email} />
                </div>

                {/* Verifikasi email */}
                {mustVerifyEmail && user.email_verified_at === null && (
                    <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded">
                        <p className="text-sm text-yellow-800">
                            Alamat email Anda belum diverifikasi.{' '}
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="text-indigo-600 underline hover:text-indigo-800 font-medium"
                            >
                                Klik di sini untuk mengirim ulang email verifikasi.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <p className="mt-2 text-sm font-medium text-green-600">
                                Link verifikasi baru telah dikirim ke email Anda.
                            </p>
                        )}
                    </div>
                )}

                {/* Tombol */}
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>
                        Simpan Perubahan
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in-out duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-green-600 font-medium">
                            Data berhasil disimpan.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
