import { useState } from "react";
import { Search, Plus, Edit2, Trash2, Eye, Star, ChevronLeft, ChevronRight } from "lucide-react";

const moviesData = [
  { id: 1, title: "Avengers: Secret Wars", genre: "Hành động", director: "Russo Brothers", duration: 180, rating: 9.1, views: 4821, status: "Đang chiếu", releaseDate: "2026-04-10", poster: "AV" },
  { id: 2, title: "Inside Out 3", genre: "Hoạt hình", director: "Pete Docter", duration: 105, rating: 8.7, views: 3210, status: "Đang chiếu", releaseDate: "2026-03-22", poster: "IO" },
  { id: 3, title: "Dune: Part Three", genre: "Khoa học viễn tưởng", director: "Denis Villeneuve", duration: 165, rating: 8.9, views: 2984, status: "Sắp chiếu", releaseDate: "2026-05-15", poster: "DN" },
  { id: 4, title: "The Dark Knight Returns", genre: "Hành động", director: "Christopher Nolan", duration: 152, rating: 9.3, views: 2541, status: "Đang chiếu", releaseDate: "2026-02-14", poster: "DK" },
  { id: 5, title: "Moana 3", genre: "Hoạt hình", director: "John Musker", duration: 98, rating: 8.2, views: 1876, status: "Sắp chiếu", releaseDate: "2026-06-01", poster: "MO" },
  { id: 6, title: "Mission Impossible 9", genre: "Hành động", director: "Christopher McQuarrie", duration: 148, rating: 8.5, views: 3102, status: "Đang chiếu", releaseDate: "2026-03-05", poster: "MI" },
  { id: 7, title: "The Batman 2", genre: "Siêu anh hùng", director: "Matt Reeves", duration: 170, rating: 8.8, views: 2670, status: "Ngừng chiếu", releaseDate: "2026-01-20", poster: "BM" },
  { id: 8, title: "Interstellar 2", genre: "Khoa học viễn tưởng", director: "Christopher Nolan", duration: 190, rating: 9.0, views: 1980, status: "Sắp chiếu", releaseDate: "2026-07-10", poster: "IS" },
];

const genres = ["Tất cả", "Hành động", "Hoạt hình", "Khoa học viễn tưởng", "Siêu anh hùng"];
const statusList = ["Tất cả", "Đang chiếu", "Sắp chiếu", "Ngừng chiếu"];

const statusStyle: Record<string, string> = {
  "Đang chiếu": "bg-emerald-50 text-emerald-600",
  "Sắp chiếu": "bg-blue-50 text-blue-600",
  "Ngừng chiếu": "bg-gray-100 text-gray-500",
};

const posterColors: Record<string, string> = {
  AV: "from-red-500 to-orange-500",
  IO: "from-yellow-400 to-amber-500",
  DN: "from-amber-600 to-yellow-700",
  DK: "from-gray-700 to-gray-900",
  MO: "from-teal-400 to-cyan-500",
  MI: "from-blue-500 to-indigo-600",
  BM: "from-slate-600 to-slate-800",
  IS: "from-violet-500 to-purple-700",
};

// Modal thêm/sửa phim
const MovieModal = ({
  movie,
  onClose,
}: {
  movie: (typeof moviesData)[0] | null;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-5">
          {movie ? "Chỉnh sửa phim" : "Thêm phim mới"}
        </h2>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Tên phim</label>
            <input defaultValue={movie?.title} className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-400 transition-colors" placeholder="Nhập tên phim..." />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Thể loại</label>
              <select defaultValue={movie?.genre} className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-400 transition-colors bg-white">
                {genres.filter(g => g !== "Tất cả").map(g => <option key={g}>{g}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Trạng thái</label>
              <select defaultValue={movie?.status} className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-400 transition-colors bg-white">
                {statusList.filter(s => s !== "Tất cả").map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Đạo diễn</label>
              <input defaultValue={movie?.director} className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-400 transition-colors" placeholder="Tên đạo diễn..." />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Thời lượng (phút)</label>
              <input type="number" defaultValue={movie?.duration} className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-400 transition-colors" placeholder="120" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Ngày chiếu</label>
            <input type="date" defaultValue={movie?.releaseDate} className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-400 transition-colors" />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
            Hủy
          </button>
          <button className="flex-1 py-2.5 rounded-xl bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
            {movie ? "Lưu thay đổi" : "Thêm phim"}
          </button>
        </div>
      </div>
    </div>
  );
};

const ITEMS_PER_PAGE = 5;

const Movie = () => {
  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("Tất cả");
  const [statusFilter, setStatusFilter] = useState("Tất cả");
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState<{ open: boolean; movie: (typeof moviesData)[0] | null }>({ open: false, movie: null });
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const filtered = moviesData.filter((m) => {
    const matchSearch = m.title.toLowerCase().includes(search.toLowerCase()) || m.director.toLowerCase().includes(search.toLowerCase());
    const matchGenre = genreFilter === "Tất cả" || m.genre === genreFilter;
    const matchStatus = statusFilter === "Tất cả" || m.status === statusFilter;
    return matchSearch && matchGenre && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="p-6 bg-gray-50 min-h-full space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Quản lý phim</h1>
          <p className="text-sm text-gray-400 mt-0.5">{moviesData.length} phim trong hệ thống</p>
        </div>
        <button
          onClick={() => setModal({ open: true, movie: null })}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
        >
          <Plus size={16} />
          Thêm phim
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-wrap gap-3 items-center">
        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 w-64 group focus-within:border-blue-400 focus-within:bg-white transition-all">
          <Search size={15} className="text-gray-400 shrink-0" />
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Tìm tên phim, đạo diễn..."
            className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
          />
        </div>

        {/* Genre filter */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => { setGenreFilter(g); setPage(1); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${genreFilter === g ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Status filter */}
        <select
          value={statusFilter}
          onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
          className="ml-auto border border-gray-200 rounded-xl px-3.5 py-2 text-sm text-gray-700 outline-none focus:border-blue-400 bg-white transition-colors"
        >
          {statusList.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
                <th className="text-left px-5 py-3.5 font-semibold">Phim</th>
                <th className="text-left px-4 py-3.5 font-semibold">Thể loại</th>
                <th className="text-left px-4 py-3.5 font-semibold">Đạo diễn</th>
                <th className="text-left px-4 py-3.5 font-semibold">Thời lượng</th>
                <th className="text-left px-4 py-3.5 font-semibold">Đánh giá</th>
                <th className="text-left px-4 py-3.5 font-semibold">Lượt xem</th>
                <th className="text-left px-4 py-3.5 font-semibold">Trạng thái</th>
                <th className="text-center px-4 py-3.5 font-semibold">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-12 text-gray-400 text-sm">Không tìm thấy phim nào</td>
                </tr>
              ) : paginated.map((movie) => (
                <tr key={movie.id} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                  {/* Poster + title */}
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-14 rounded-lg bg-gradient-to-br ${posterColors[movie.poster] ?? "from-gray-400 to-gray-600"} flex items-center justify-center shrink-0`}>
                        <span className="text-white text-xs font-bold">{movie.poster}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 leading-tight">{movie.title}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{movie.releaseDate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-gray-500 whitespace-nowrap">{movie.genre}</td>
                  <td className="px-4 py-3.5 text-gray-500 whitespace-nowrap">{movie.director}</td>
                  <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">{movie.duration} phút</td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1 text-amber-500 font-semibold">
                      <Star size={12} fill="#f59e0b" />
                      {movie.rating}
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Eye size={13} className="text-gray-400" />
                      {movie.views.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyle[movie.status]}`}>
                      {movie.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => setModal({ open: true, movie })}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Edit2 size={15} />
                      </button>
                      <button
                        onClick={() => setDeleteId(movie.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Hiển thị {Math.min((page - 1) * ITEMS_PER_PAGE + 1, filtered.length)}–{Math.min(page * ITEMS_PER_PAGE, filtered.length)} / {filtered.length} phim
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={15} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-semibold transition-colors ${p === page ? "bg-blue-600 text-white" : "border border-gray-200 text-gray-500 hover:bg-gray-50"}`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal thêm/sửa */}
      {modal.open && (
        <MovieModal movie={modal.movie} onClose={() => setModal({ open: false, movie: null })} />
      )}

      {/* Modal xác nhận xóa */}
      {deleteId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 size={22} className="text-red-500" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Xác nhận xóa</h3>
            <p className="text-sm text-gray-400 mt-1.5">Bạn có chắc muốn xóa phim này không? Hành động này không thể hoàn tác.</p>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                Hủy
              </button>
              <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 rounded-xl bg-red-500 text-sm font-semibold text-white hover:bg-red-600 transition-colors">
                Xóa phim
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;