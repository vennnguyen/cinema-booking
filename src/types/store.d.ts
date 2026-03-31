import type { Movie } from "../types/product";
import type { Showtime } from "./showtime";
interface MovieState {
  movies: Movie[];
  selectedMovie: Movie | null;
  loading: boolean;
  error: string | null;
  fetchMovies: () => Promise<void>;
  fetchMovieBySlug: (slug: string) => Promise<void>;
}

interface ShowtimeState {
  showtimes: Showtime[];
  loading: boolean;
  error: string | null;
  selectedDate: string;
  setSelectedDate: (date: string) => void;

  fetchShowtimeByMovie: (slug: string) => Promise<void>;
}
