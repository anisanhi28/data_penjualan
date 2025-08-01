import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md rounded-xl bg-white/30 backdrop-blur-md p-8 shadow-2xl ring-1 ring-white/40">
        {children}
      </div>

      <p className="mt-6 text-white text-sm opacity-75">
        &copy; {new Date().getFullYear()} YourApp. All rights reserved.
      </p>
    </div>
  );
}
