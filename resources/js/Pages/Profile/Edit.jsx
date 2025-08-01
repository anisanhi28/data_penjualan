import Main from '@/Layouts/Main';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status, auth }) {
  return (
    <Main auth={auth}>
      <h1 className="text-3xl font-bold mb-2">Profil</h1>
      <div className="space-y-6 mb-6">
        {/* Update Profile */}
        <div className="bg-white text-black p-4 shadow sm:rounded-lg sm:p-6">
          <UpdateProfileInformationForm
            mustVerifyEmail={mustVerifyEmail}
            status={status}
            className="w-full"
            user={auth.user}
          />
        </div>

        {/* Update Password */}
        <div className="bg-white text-black p-4 shadow sm:rounded-lg sm:p-6">
          <UpdatePasswordForm className="w-full" />
        </div>

        {/* Delete User */}
        <div className="bg-white text-black p-4 shadow sm:rounded-lg sm:p-6">
          <DeleteUserForm className="w-full" />
        </div>
      </div>
    </Main>
  );
}
