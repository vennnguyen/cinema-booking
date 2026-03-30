import type { Movie } from "../types/product";
interface MovieState {
  movies: Movie[];
  selectedMovie: Movie | null;
  loading: boolean;
  error: string | null;
  fetchMovies: () => Promise<void>;
  // fetchMovieBySlug: (slug: string) => Promise<void>;
}
