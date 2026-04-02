import { create } from "zustand";
import type { BookingState } from "../types/store";
import { bookingService } from "../services/booking.service";
import { toast } from "sonner";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
const useBookingStore = create<BookingState>((set, get) => ({
  showDetail: null,
  selectedSeats: [],
  selectedCombos: [],
  loading: false,
  error: null,

  // Lấy thông tin suất chiếu
  fetchShowDetail: async (showId: number) => {
    set({ loading: true, error: null });
    try {
      const res = await bookingService.getShowDetail(showId);
      set({ showDetail: res.data, loading: false });
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

  // Chọn / bỏ chọn ghế
  //   toggleSeat: (seat) => {
  //     const { selectedSeats } = get();
  //     const exists = selectedSeats.find((s) => s.seatId === seat.seatId);
  //     if (exists) {
  //       set({ selectedSeats: selectedSeats.filter((s) => s.seatId !== seat.seatId) });
  //     } else {
  //       set({ selectedSeats: [...selectedSeats, seat] });
  //     }
  //   },

  //   // Thêm / bớt combo
  //   toggleCombo: (combo) => {
  //     const { selectedCombos } = get();
  //     const exists = selectedCombos.find((c) => c.comboId === combo.comboId);
  //     if (exists) {
  //       set({ selectedCombos: selectedCombos.filter((c) => c.comboId !== combo.comboId) });
  //     } else {
  //       set({ selectedCombos: [...selectedCombos, combo] });
  //     }
  //   },

  //   // Tính tổng tiền
  //   getTotalPrice: () => {
  //     const { selectedSeats, selectedCombos } = get();
  //     const seatTotal = selectedSeats.reduce((sum, s) => sum + (s.price ?? 0), 0);
  //     const comboTotal = selectedCombos.reduce((sum, c) => sum + (c.price ?? 0), 0);
  //     return seatTotal + comboTotal;
  //   },

  // Reset khi rời trang
  resetBooking: () => {
    set({
      showDetail: null,
      selectedSeats: [],
      selectedCombos: [],
      loading: false,
      error: null,
    });
  },
}));

export default useBookingStore;
