import { create } from "zustand";
import { toast } from "sonner";
import type { TheaterState } from "../types/store";
import { theaterService } from "../services/theater.service";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
const useTheaterStore = create<TheaterState>((set) => ({
  theaters: [],
  theaterSelected: null,
  loading: false,   
  error: null,

  fetchTheater: async () => {
    set({ loading: true, error: null });
    try {
      const theaters = await theaterService.getTheaterService()
      set({ theaters: theaters.data, loading: false });
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
}));

export default useTheaterStore;
