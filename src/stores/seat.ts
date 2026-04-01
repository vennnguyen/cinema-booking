import { create } from "zustand";
import { toast } from "sonner";
import type { SeatState } from "../types/store";
import { seatService } from "../services/seat.service";
import type { Seat } from "../types/seat";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

const useSeatStore = create<SeatState>((set, get) => ({
  seats: [],
  selectedSeats: [],
  loading: false,
  error: null,

  fetchSeats: async (showId: number) => {
    set({ loading: true, error: null });
    try {
      const res = await seatService.getSeatByTheater(showId);
      set({ seats: res.data, loading: false });
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Có lỗi xảy ra, vui lòng thử lại";
      toast.error(message);
      set({ loading: false, error: message });
      throw error;
    }
  },

  toggleSeat: (seat: Seat) => {
    const { selectedSeats } = get();
    const exists = selectedSeats.find((s) => s.seatId === seat.seatId);
    if (exists) {
      set({
        selectedSeats: selectedSeats.filter((s) => s.seatId !== seat.seatId),
      });
    } else {
      set({ selectedSeats: [...selectedSeats, seat] });
    }
  },

  resetSeats: () => {
    set({ seats: [], selectedSeats: [], loading: false, error: null });
  },
}));

export default useSeatStore;
