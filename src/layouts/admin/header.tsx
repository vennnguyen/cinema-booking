import { useState } from "react";
import { Search, Bell, ChevronDown,UserCircle  } from "lucide-react";

const Header = () => {
  const [hasNotif] = useState(true);

  return (
    <header className="w-full bg-white border-b border-gray-100 px-6 py-3.5 flex items-center justify-between gap-4 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      
      {/* Search */}
      <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 w-72 group focus-within:border-blue-400 focus-within:bg-white transition-all duration-150">
        <Search size={16} className="text-gray-400 group-focus-within:text-blue-500 shrink-0 transition-colors" />
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">

        {/* Bell */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors duration-150">
          <Bell size={18} className="text-gray-500" />
          {hasNotif && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
          )}
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200 mx-1" />

        {/* User */}
        <button className="flex items-center gap-2.5 pl-1 pr-2.5 py-1.5 rounded-xl hover:bg-gray-100 transition-colors duration-150">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
            <UserCircle size={34} className="text-gray shrink-0" />
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-sm font-semibold text-gray-800 leading-tight">Admin</p>
            <p className="text-[11px] text-gray-400 leading-tight">Quản trị viên</p>
          </div>
          <ChevronDown size={14} className="text-gray-400 ml-0.5" />
        </button>

      </div>
    </header>
  );
};

export default Header;