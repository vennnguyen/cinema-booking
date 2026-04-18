
import { create } from "zustand";
import api from "../lib/axios";

type Movie = { movieId: number; movieName: string };
type Cinema = { cinemaId: number; cinemaName: string };
type Showtime = { showId: number; startTime: string };

type QuickBookingStore = {
  // Data lists
  movies: Movie[];
  cinemas: Cinema[];
  dates: string[];
  showtimes: Showtime[];

  // Selected values
  selectedMovie: Movie | null;
  selectedCinema: Cinema | null;
  selectedDate: string;
  selectedShowtime: Showtime | null;

  // Actions
  fetchMovies: () => Promise<void>;
  fetchCinemas: (movieId: number) => Promise<void>;
  fetchDates: (movieId: number, cinemaId: number) => Promise<void>;
  fetchShowtimes: (movieId: number, cinemaId: number, date: string) => Promise<void>;

  setSelectedMovie: (movie: Movie) => void;
  setSelectedCinema: (cinema: Cinema) => void;
  setSelectedDate: (date: string) => void;
  setSelectedShowtime: (showtime: Showtime) => void;

  reset: () => void;
};

const useQuickBookingStore = create<QuickBookingStore>((set, get) => ({
  movies: [],
  cinemas: [],
  dates: [],
  showtimes: [],

  selectedMovie: null,
  selectedCinema: null,
  selectedDate: "",
  selectedShowtime: null,

 fetchMovies: async () => {
  const res = await api.get("/products");
  console.log("response products:", res.data); // kiểm tra cấu trúc thật
  set({ movies: res.data.data }); // tuỳ BE trả { data: [...] } hay { data: { movies: [...] } }
},

fetchCinemas: async (movieId) => {
  const res = await api.get(`/quick-booking/cinemas?movieId=${movieId}`);
  console.log("response cinemas:", res.data);
  set({ cinemas: res.data.data });
},

fetchDates: async (movieId, cinemaId) => {
  const res = await api.get(`/quick-booking/dates?movieId=${movieId}&cinemaId=${cinemaId}`);
  console.log("response dates:", res.data);
  
  set({ dates: res.data.data });
},

fetchShowtimes: async (movieId, cinemaId, date) => {
  const res = await api.get(`/quick-booking/showtimes?movieId=${movieId}&cinemaId=${cinemaId}&date=${date}`);
  console.log("response showtimes:", res.data);
  set({ showtimes: res.data.data });
},
  setSelectedMovie: (movie) => {
    set({
      selectedMovie: movie,
      // Reset các bước sau
      selectedCinema: null,
      selectedDate: "",
      selectedShowtime: null,
      cinemas: [],
      dates: [],
      showtimes: [],
    });
    get().fetchCinemas(movie.movieId);
  },

  setSelectedCinema: (cinema) => {
    const { selectedMovie } = get();
    set({
      selectedCinema: cinema,
      selectedDate: "",
      selectedShowtime: null,
      dates: [],
      showtimes: [],
    });
    if (selectedMovie) get().fetchDates(selectedMovie.movieId, cinema.cinemaId);
  },

  setSelectedDate: (date) => {
    const { selectedMovie, selectedCinema } = get();
    set({ selectedDate: date, selectedShowtime: null, showtimes: [] });
    if (selectedMovie && selectedCinema)
      get().fetchShowtimes(selectedMovie.movieId, selectedCinema.cinemaId, date);
  },

  setSelectedShowtime: (showtime) => set({ selectedShowtime: showtime }),

  reset: () =>
    set({
      cinemas: [], dates: [], showtimes: [],
      selectedMovie: null, selectedCinema: null,
      selectedDate: "", selectedShowtime: null,
    }),
}));

export default useQuickBookingStore;