import { NavLink } from "react-router-dom";
import { Home, Film, Users, Armchair, CreditCard, ChevronRight } from "lucide-react";

const navItems = [
  { label: "Trang chủ", icon: Home, path: "/admin" },
  { label: "Phim", icon: Film, path: "/admin/movies" },
  { label: "Người dùng", icon: Users, path: "/admin/users" },
  { label: "Chỗ ngồi", icon: Armchair, path: "/admin/seats" },
  { label: "Thanh toán", icon: CreditCard, path: "/admin/payments" },
];

const Sidebar = () => {
  return (
    <aside className="w-60 min-h-screen bg-white border-r border-gray-100 flex flex-col shadow-[2px_0_12px_rgba(0,0,0,0.04)]">
      {/* Logo */}
      <div className="px-6 pt-7 pb-5 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-[34px] h-[34px] rounded-[10px] bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0">
            <Film size={18} color="#fff" />
          </div>
          <span className="text-[17px] font-bold text-gray-900 tracking-tight">
            Galaxy Admin
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3">
        <p className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-widest px-3 pt-2 pb-1.5">
          Quản lý
        </p>

        {navItems.map(({ label, icon: Icon, path }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/admin"}
            className={({ isActive }) =>
              [
                "relative flex items-center gap-3 px-3.5 py-2.5 rounded-[10px] mb-0.5 overflow-hidden transition-all duration-150 no-underline text-[14.5px]",
                isActive
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-gray-700 font-medium hover:bg-gray-50",
              ].join(" ")
            }
          >
            {({ isActive }) => (
              <>
                {/* Active left bar */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[60%] rounded-r-[4px] bg-blue-300" />
                )}

                <Icon
                  size={18}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  className={isActive ? "text-white shrink-0" : "text-gray-400 shrink-0"}
                />

                <span className="flex-1">{label}</span>

                {isActive && (
                  <ChevronRight size={14} className="text-blue-200" strokeWidth={2.5} />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100">
        <p className="text-[11px] text-gray-300 text-center">© 2026 CineAdmin</p>
      </div>
    </aside>
  );
};

export default Sidebar;