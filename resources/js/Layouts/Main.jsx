import Sidebar from '@/Components/Sidebar';
import Topbar from '@/Components/Topbar';

export default function Main({ children, auth }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex">
      <Sidebar />
      <div className="flex-1">
        <div className="sticky top-0 z-30 ml-64">
          <Topbar auth={auth} />
        </div>
        <main className="px-10 ml-64">{children}</main>
      </div>
    </div>
  );
}
