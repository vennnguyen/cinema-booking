import type { Movie } from "../types/product";
import type { ShowDetail, ShowTimeSeat } from "./booking";
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
export interface BookingState {
  showDetail: ShowDetail | null;
  selectedSeats: ShowTimeSeat["seat"][];
  selectedCombos: Combo[];
  loading: boolean;
  error: string | null;

  fetchShowDetail: (showId: number) => Promise<void>;
  // toggleSeat: (seat: ShowTimeSeat["seat"] & { price?: number }) => void;
  // toggleCombo: (combo: Combo) => void;
  // getTotalPrice: () => number;
  resetBooking: () => void;
}
interface SeatState {
  seats: Seat[];
  selectedSeats: Seat[];
  loading: boolean;
  error: string | null;

  fetchSeats: (showId: number) => Promise<void>;
  toggleSeat: (seat: Seat, allSeats: Seat[]) => void;
  resetSeats: () => void;
}
