import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Arrow from "../components/icon/arrow";
import { useEffect, useState } from "react";
import useQuickBookingStore from "../stores/quickbooking";
import { formatTime,formatDate } from "../utils/utils";
import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/auth";
import Signin from "./signin";
const HeroSlider = () => {
  const user = useAuthStore(s=>s.user)
  const [open, setOpen] = useState("");
  const [openSignIn, setOpenSignIn] = useState(false);

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
          <div className="text-sm">{selectedDate ? formatDate(selectedDate) : "Chọn ngày"}</div>
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
           
<Link
  to={selectedShowtime ? `/dat-ve/${selectedMovie?.slug}` : "#"}
  state={selectedShowtime}
  onClick={(e) => {
    if (!selectedShowtime) {
      e.preventDefault(); 
      return;
    }

    if (!user) {
      e.preventDefault();
      setOpenSignIn(true);
    }
  }}
  className={`w-full h-full rounded-sm flex items-center justify-center ${
    selectedShowtime
      ? "bg-[rgb(245,128,32)] cursor-pointer"
      : "bg-orange-300 cursor-not-allowed pointer-events-none"
  }`}
>
  Mua vé nhanh
</Link>
        </div>
      </div>
      <Signin open={openSignIn} setOpen={setOpenSignIn} />
    </div>
  );
};

export default HeroSlider;