import { Search, Bell, User } from 'lucide-react';

export default function Topbar() {
    return (
        <div className="sticky top-0 z-30 w-full mb-4">
            <div className="flex justify-between items-center bg-white/10 backdrop-blur-md px-6 py-3 shadow-md">
                {/* Search */}
                <div className="flex items-center bg-white/20 rounded-full px-4 w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Cari sesuatu..."
                        className="bg-transparent w-full text-white placeholder-white border-none focus:outline-none focus:ring-0 py-2"
                    />
                    <Search className="text-white ml-2 h-5 w-5 cursor-pointer" />
                </div>

                {/* Profile & Notification */}
                <div className="flex items-center gap-4 ml-6">
                    <button className="relative p-2 rounded-full bg-white/20 hover:bg-white/30 transition">
                        <Bell className="text-white w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div className="flex items-center bg-white/20 px-4 py-2 rounded-full gap-2 hover:bg-white/30 transition cursor-pointer">
                        <span className="text-sm font-medium"></span>
                        <User className="text-white w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}