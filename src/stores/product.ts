import { create } from "zustand";
import type { MovieState } from "../types/store";
import { productService } from "../services/productService";
import { toast } from "sonner";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
const useMovieStore = create<MovieState>((set) => ({
  movies: [],
  selectedMovie: null,
  loading: false,
  error: null,

  fetchMovies: async () => {
    set({ loading: true, error: null });
    try {
      const products = await productService.getProduct();
      set({ movies: products.data, loading: false });
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Có lỗi xảy ra, vui lòng thử lại";

      toast.error(message);
      set({ loading: false });
      throw error;
    }
  },

  //   fetchMovieBySlug: async (slug: string) => {
  //     set({ loading: true, error: null });
  //     try {
  //       const res = await fetch(`http://localhost:8080/api/movies/${slug}`);
  //       if (!res.ok) throw new Error("Không tìm thấy phim");
  //       const data = await res.json();
  //       set({ selectedMovie: data, loading: false });
  //     } catch (err) {
  //       set({ error: (err as Error).message, loading: false });
  //     }
  //   },
}));

export default useMovieStore;
