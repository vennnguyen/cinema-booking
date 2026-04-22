import { Film, Users, CreditCard, TrendingUp, ArrowUpRight, ArrowDownRight, Eye, Star } from "lucide-react";

const stats = [
  {
    label: "Tổng doanh thu",
    value: "128,450,000₫",
    change: "+12.5%",
    up: true,
    icon: CreditCard,
    color: "bg-blue-50 text-blue-600",
    iconBg: "bg-blue-600",
  },
  {
    label: "Người dùng",
    value: "3,842",
    change: "+8.1%",
    up: true,
    icon: Users,
    color: "bg-emerald-50 text-emerald-600",
    iconBg: "bg-emerald-500",
  },
  {
    label: "Phim đang chiếu",
    value: "24",
    change: "-2 phim",
    up: false,
    icon: Film,
    color: "bg-orange-50 text-orange-600",
    iconBg: "bg-orange-500",
  },
  {
    label: "Lượt xem hôm nay",
    value: "1,293",
    change: "+5.3%",
    up: true,
    icon: TrendingUp,
    color: "bg-violet-50 text-violet-600",
    iconBg: "bg-violet-500",
  },
];

const recentMovies = [
  { title: "Avengers: Secret Wars", genre: "Hành động", views: 4821, rating: 9.1, status: "Đang chiếu" },
  { title: "Inside Out 3", genre: "Hoạt hình", views: 3210, rating: 8.7, status: "Đang chiếu" },
  { title: "Dune: Part Three", genre: "Khoa học viễn tưởng", views: 2984, rating: 8.9, status: "Sắp chiếu" },
  { title: "The Dark Knight Returns", genre: "Hành động", views: 2541, rating: 9.3, status: "Đang chiếu" },
  { title: "Moana 3", genre: "Hoạt hình", views: 1876, rating: 8.2, status: "Sắp chiếu" },
];

const recentPayments = [
  { user: "Nguyễn Văn A", movie: "Avengers: Secret Wars", amount: "120,000₫", time: "10 phút trước", status: "Thành công" },
  { user: "Trần Thị B", movie: "Inside Out 3", amount: "90,000₫", time: "25 phút trước", status: "Thành công" },
  { user: "Lê Văn C", movie: "Dune: Part Three", amount: "150,000₫", time: "1 giờ trước", status: "Thất bại" },
  { user: "Phạm Thị D", movie: "The Dark Knight Returns", amount: "120,000₫", time: "2 giờ trước", status: "Thành công" },
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-full space-y-6">

      {/* Page title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Trang chủ</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(({ label, value, change, up, icon: Icon, iconBg }) => (
          <div
            key={label}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">{label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1.5 tracking-tight">{value}</p>
                <div className={`flex items-center gap-1 mt-2 text-xs font-semibold ${up ? "text-emerald-500" : "text-red-400"}`}>
                  {up ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
                  <span>{change}</span>
                  <span className="text-gray-400 font-normal ml-0.5">so với tuần trước</span>
                </div>
              </div>
              <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}>
                <Icon size={18} color="#fff" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tables row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

        {/* Recent movies */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h2 className="text-sm font-bold text-gray-800">Phim nổi bật</h2>
            <button className="text-xs text-blue-600 font-medium hover:underline">Xem tất cả</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-xs text-gray-400 uppercase tracking-wide">
                  <th className="text-left px-5 py-3 font-semibold">Tên phim</th>
                  <th className="text-left px-4 py-3 font-semibold">Thể loại</th>
                  <th className="text-left px-4 py-3 font-semibold">Lượt xem</th>
                  <th className="text-left px-4 py-3 font-semibold">Đánh giá</th>
                  <th className="text-left px-4 py-3 font-semibold">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {recentMovies.map((movie, i) => (
                  <tr key={i} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 font-semibold text-gray-800 whitespace-nowrap">{movie.title}</td>
                    <td className="px-4 py-3.5 text-gray-500">{movie.genre}</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <Eye size={13} className="text-gray-400" />
                        {movie.views.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1 text-amber-500 font-semibold">
                        <Star size={12} fill="#f59e0b" />
                        {movie.rating}
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        movie.status === "Đang chiếu"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-blue-50 text-blue-600"
                      }`}>
                        {movie.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent payments */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h2 className="text-sm font-bold text-gray-800">Thanh toán gần đây</h2>
            <button className="text-xs text-blue-600 font-medium hover:underline">Xem tất cả</button>
          </div>
          <div className="divide-y divide-gray-50">
            {recentPayments.map((p, i) => (
              <div key={i} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{p.user}</p>
                    <p className="text-xs text-gray-400 truncate mt-0.5">{p.movie}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{p.time}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-gray-800">{p.amount}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full mt-1 inline-block ${
                      p.status === "Thành công"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-red-50 text-red-500"
                    }`}>
                      {p.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;