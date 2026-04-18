// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Arrow from "../components/icon/arrow";
// import { useEffect, useState } from "react";
// import useQuickBookingStore from "../stores/quickbooking";


// const HeroSlider = () => {
//   const [open, setOpen] = useState("");

//   const {
//     movies, cinemas, dates, showtimes,
//     selectedMovie, selectedCinema, selectedDate, selectedShowtime,
//     fetchMovies,
//     setSelectedMovie, setSelectedCinema, setSelectedDate, setSelectedShowtime,
//   } = useQuickBookingStore();

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   // ✅ LOG KIỂM TRA DỮ LIỆU
//   useEffect(() => { console.log("🎬 movies:", movies); }, [movies]);
//   useEffect(() => { console.log("🏠 cinemas:", cinemas); }, [cinemas]);
//   useEffect(() => { console.log("📅 dates:", dates); }, [dates]);
//   useEffect(() => { console.log("🕐 showtimes:", showtimes); }, [showtimes]);
//   useEffect(() => { console.log("✅ selectedMovie:", selectedMovie); }, [selectedMovie]);
//   useEffect(() => { console.log("✅ selectedCinema:", selectedCinema); }, [selectedCinema]);
//   useEffect(() => { console.log("✅ selectedDate:", selectedDate); }, [selectedDate]);
//   useEffect(() => { console.log("✅ selectedShowtime:", selectedShowtime); }, [selectedShowtime]);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 4500,
//     slidesToShow: 1,
//     centerMode: true,
//     centerPadding: "190px",
//     autoplay: true,
//     autoplaySpeed: 800,
//     responsive: [
//       { breakpoint: 1280, settings: { centerPadding: "100px" } },
//       { breakpoint: 1024, settings: { centerMode: false, centerPadding: "0px", slidesToShow: 1 } },
//       { breakpoint: 768,  settings: { centerMode: false, centerPadding: "0px", slidesToShow: 1 } },
//     ],
//   };

//   const slides = [
//     "/images/banner/2048-tai.jpg",
//     "/images/banner/cam-on-nguoi-da-thuc-cung-toi.jpg",
//     "/images/banner/chuyen-kinh-di.jpg",
//   ];

//   return (
//     <div className="relative h-auto overflow-hidden pb-10">
//       <Slider {...settings}>
//         {slides.map((img, i) => (
//           <div key={i} className="xl:px-6 lg:px-0">
//             <img src={img} className="w-full object-cover" />
//           </div>
//         ))}
//       </Slider>

//       {/* QUICK BUY - TẠM COMMENT ĐỂ TEST */}
//       {/* 
//       <div className="quick-buy hidden xl:grid absolute z-50 grid-cols-11 max-w-6xl h-14 w-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-white rounded left-2/4 bottom-14 translate-y-1/2 -translate-x-2/4">
//         ...
//       </div>
//       */}

//       {/* DEBUG UI - XÓA SAU KHI KIỂM TRA XONG */}
//       <div className="fixed bottom-4 right-4 z-[9999] bg-black/80 text-white text-xs p-4 rounded-xl max-w-sm space-y-1">
//         <div>🎬 movies: {movies.length > 0 ? `${movies.length} phim` : "❌ chưa có"}</div>
//         <div>🏠 cinemas: {cinemas.length > 0 ? `${cinemas.length} rạp` : "—"}</div>
//         <div>📅 dates: {dates.length > 0 ? `${dates.length} ngày` : "—"}</div>
//         <div>🕐 showtimes: {showtimes.length > 0 ? `${showtimes.length} suất` : "—"}</div>
//         <hr className="border-white/20" />
//         <div>Selected movie: {selectedMovie?.movieName || "—"}</div>
//         <div>Selected cinema: {selectedCinema?.cinemaName || "—"}</div>
//         <div>Selected date: {selectedDate || "—"}</div>
//         <div>Selected showtime: {selectedShowtime?.startTime || "—"}</div>

//         {/* NÚT TEST THỦ CÔNG */}
//         <hr className="border-white/20" />
//         <div className="font-bold">Test chọn:</div>
//         <div className="flex flex-wrap gap-1">
//           {movies.map((m) => (
//             <button
//               key={m.movieId}
//               className="bg-orange-500 px-2 py-0.5 rounded text-[10px]"
//               onClick={() => setSelectedMovie(m)}
//             >
//               {m.movieName}
//             </button>
//           ))}
//         </div>
//         <div className="flex flex-wrap gap-1">
//           {cinemas.map((c) => (
//             <button
//               key={c.cinemaId}
//               className="bg-blue-500 px-2 py-0.5 rounded text-[10px]"
//               onClick={() => setSelectedCinema(c)}
//             >
//               {c.cinemaName}
//             </button>
//           ))}
//         </div>
//         <div className="flex flex-wrap gap-1">
//           {dates.map((d, i) => (
//             <button
//               key={i}
//               className="bg-green-600 px-2 py-0.5 rounded text-[10px]"
//               onClick={() => setSelectedDate(d)}
//             >
//               {d}
//             </button>
//           ))}
//         </div>
//         <div className="flex flex-wrap gap-1">
//           {showtimes.map((s) => (
//             <button
//               key={s.showId}
//               className="bg-purple-500 px-2 py-0.5 rounded text-[10px]"
//               onClick={() => setSelectedShowtime(s)}
//             >
//               {s.startTime}
//             </button>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default HeroSlider;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Arrow from "../components/icon/arrow";
import { useEffect, useState } from "react";
import useQuickBookingStore from "../stores/quickbooking";
import { formatTime,formatDate } from "../utils/utils";

// import useQuickBookingStore from "../stores/useQuickBookingStore";

const HeroSlider = () => {
  const [open, setOpen] = useState("");

  const {
    movies, cinemas, dates, showtimes,
    selectedMovie, selectedCinema, selectedDate, selectedShowtime,
    fetchMovies,
    setSelectedMovie, setSelectedCinema, setSelectedDate, setSelectedShowtime,
  } = useQuickBookingStore();

  useEffect(() => {
    fetchMovies();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 4500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "190px",
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [
      { breakpoint: 1280, settings: { centerPadding: "100px" } },
      { breakpoint: 1024, settings: { centerMode: false, centerPadding: "0px", slidesToShow: 1 } },
      { breakpoint: 768,  settings: { centerMode: false, centerPadding: "0px", slidesToShow: 1 } },
    ],
  };

  const slides = [
    "/images/banner/2048-tai.jpg",
    "/images/banner/cam-on-nguoi-da-thuc-cung-toi.jpg",
    "/images/banner/chuyen-kinh-di.jpg",
  ];

  return (
    <div className="relative h-auto overflow-hidden pb-10">
      <Slider {...settings}>
        {slides.map((img, i) => (
          <div key={i} className="xl:px-6 lg:px-0">
            <img src={img} className="w-full object-cover" />
          </div>
        ))}
      </Slider>

      {/* QUICK BUY */}
      <div className="quick-buy hidden xl:grid absolute z-50 grid-cols-11 max-w-6xl h-14 w-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-white rounded left-2/4 bottom-14 translate-y-1/2 -translate-x-2/4">

        {/* MOVIE */}
        <div
          className="col-span-3 flex items-center gap-2 cursor-pointer relative"
          onClick={() => setOpen(open === "movie" ? "" : "movie")}
        >
          <span className="bg-[#f58020] text-[10px] text-white px-1.5 py-0.5 rounded-full ml-2">1</span>
          <div className="text-sm truncate">{selectedMovie?.movieName || "Chọn phim"}</div>
          <div className="ml-auto pr-2"><Arrow /></div>

          {open === "movie" && (
            <div className="absolute bottom-full left-0 w-full bg-white shadow-lg max-h-56 overflow-y-auto">
              {movies.map((movie) => (
                <div
                  key={movie.movieId}
                  className="px-3 py-2 text-sm hover:bg-gray-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMovie(movie); // tự động fetch cinemas bên trong store
                    setOpen("");
                  }}
                >
                  {movie.movieName}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* THEATER */}
        <div
          className={`col-span-2 flex items-center gap-2 relative ${
            !selectedMovie ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => {
            if (!selectedMovie) return;
            setOpen(open === "theater" ? "" : "theater");
          }}
        >
          <span className="bg-[#f58020] text-[10px] text-white px-1.5 py-0.5 rounded-full ml-2">2</span>
          <div className="text-sm truncate">{selectedCinema?.cinemaName || "Chọn rạp"}</div>
          <Arrow />

          {open === "theater" && (
            <div className="absolute bottom-full left-0 w-full bg-white shadow-lg">
              {cinemas.map((cinema) => (
                <div
                  key={cinema.cinemaId}
                  className="px-3 py-2 text-sm hover:bg-gray-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCinema(cinema); // tự động fetch dates bên trong store
                    setOpen("");
                  }}
                >
                  {cinema.cinemaName}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DATE */}
        <div
          className={`col-span-2 flex items-center gap-2 relative ${
            !selectedCinema ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => {
            if (!selectedCinema) return;
            setOpen(open === "day" ? "" : "day");
          }}
        >
          <span className="bg-[#f58020] text-[10px] text-white px-1.5 py-0.5 rounded-full ml-2">3</span>
          <div className="text-sm">{formatDate(selectedDate) || "Chọn ngày"}</div>
          <Arrow />

          {open === "day" && (
            <div className="absolute bottom-full left-0 w-full bg-white shadow-lg">
              {dates.map((date, i) => (
                <div
                  key={i}
                  className="px-3 py-2 text-sm hover:bg-gray-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDate(date); // tự động fetch showtimes bên trong store
                    setOpen("");
                  }}
                >
                  {formatDate(date)}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* TIME */}
        <div
          className={`col-span-2 flex items-center gap-2 relative ${
            !selectedDate ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => {
            if (!selectedDate) return;
            setOpen(open === "time" ? "" : "time");
          }}
        >
          <span className="bg-[#f58020] text-[10px] text-white px-1.5 py-0.5 rounded-full ml-2">4</span>
          <div className="text-sm">{formatTime(selectedShowtime?.startTime) || "Chọn giờ"}</div>
          <Arrow />

          {open === "time" && (
            <div className="absolute bottom-full left-0 w-full bg-white shadow-lg">
              {showtimes.map((showtime) => (
                <div
                  key={showtime.showId}
                  className="px-3 py-2 text-sm hover:bg-gray-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedShowtime(showtime);
                    setOpen("");
                  }}
                >
                  {formatTime(showtime.startTime)}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* BUTTON */}
        <div className="col-span-2">
          <button
            disabled={!selectedShowtime}
            className={`w-full h-full rounded-sm ${
              selectedShowtime
                ? "bg-[rgb(245,128,32)] cursor-pointer"
                : "bg-orange-300 cursor-not-allowed"
            }`}
          >
            Mua vé nhanh
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;