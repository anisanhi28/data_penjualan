import DAdminSidebar from '@/Components/DAdminSidebar';
import Topbar from '@/Components/Topbar';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ auth, mustVerifyEmail, status, user }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex">
            <DAdminSidebar />
            <div className="flex-1">
                {/* Topbar */}
                <div className="sticky top-0 z-30 ml-64">
                    <Topbar auth={auth} />
                </div>

                {/* Main Content */}
                <div className="px-10 ml-64">
                    <h1 className="text-3xl font-bold mb-2">Profil</h1>
                    <div className="mb-6">
                        <div className="space-y-6">
                            {/* Update Profile */}
                            <div className="bg-white text-black p-4 shadow sm:rounded-lg sm:p-2">
                                <UpdateProfileInformationForm 
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="w-full"
                                    user={user}
                                />
                            </div>

                            {/* Update Password */}
                            <div className="bg-white text-black p-4 shadow sm:rounded-lg sm:p-8">
                                <UpdatePasswordForm className="max-w-xl" />
                            </div>

                            {/* Delete User */}
                            <div className="bg-white text-black p-4 shadow sm:rounded-lg sm:p-8">
                                <DeleteUserForm className="max-w-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}