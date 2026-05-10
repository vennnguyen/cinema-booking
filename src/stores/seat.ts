import { create } from "zustand";
import { toast } from "sonner";
import type { SeatState } from "../types/store";
import { seatService } from "../services/seat.service";
import type { Seat } from "../types/seat";
import { getSocket } from "./socket";

const useSeatStore = create<SeatState>((set, get) => ({
  seats: [],
  selectedSeats: [],
  showId: null,        
  loading: false,
  error: null,

  fetchSeats: async (showId: number) => {
    set({ loading: true, error: null, showId });  // ← lưu showId
    try {
      const res = await seatService.getSeatByTheater(showId);
      set({ seats: res.data, loading: false });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  toggleSeat: (seat: Seat, allSeats: Seat[]) => {
    const { selectedSeats, showId } = get();
    const socket = getSocket();
    const isCoupleSeat = seat.seatTypeId === 3;

    if (isCoupleSeat) {
      const partnerColumn =
        seat.seatColumn % 2 === 0 ? seat.seatColumn - 1 : seat.seatColumn + 1;
      const partnerSeat = allSeats.find(
        (s) =>
          s.seatRow === seat.seatRow &&
          s.seatColumn === partnerColumn &&
          s.seatTypeId === 3,
      );

      const isSelected = selectedSeats.some((s) => s.seatId === seat.seatId);
      const seatIds = [seat.seatId, partnerSeat?.seatId].filter(Boolean) as number[];

      if (isSelected) {
        // Bỏ chọn → release
        socket.emit("release_seat", { showId, seatIds });

        const idsToRemove = new Set(seatIds);
        set({
          selectedSeats: selectedSeats.filter((s) => !idsToRemove.has(s.seatId)),
        });
      } else {
        // Chọn → hold
        socket.emit("hold_seat", { showId, seatIds });

        const seatsToAdd: Seat[] = [
          { ...seat, isPrimary: true },
          ...(partnerSeat ? [{ ...partnerSeat, isPrimary: false }] : []),
        ].filter((s) => !selectedSeats.some((sel) => sel.seatId === s.seatId));

        set({ selectedSeats: [...selectedSeats, ...seatsToAdd] });
      }
    } else {
      // Ghế thường
      const exists = selectedSeats.some((s) => s.seatId === seat.seatId);

      if (exists) {
        // Bỏ chọn → release
        socket.emit("release_seat", { showId, seatIds: [seat.seatId] });
        set({
          selectedSeats: selectedSeats.filter((s) => s.seatId !== seat.seatId),
        });
      } else {
        // Chọn → hold
        socket.emit("hold_seat", { showId, seatIds: [seat.seatId] });
        set({
          selectedSeats: [...selectedSeats, { ...seat, isPrimary: true }],
        });
      }
    }
  },

  // ← thêm hàm này để ChoiceSeat gọi khi nhận seat_updated
  updateSeatStatus: (updatedSeats: { seatId: number; status: string }[]) => {
    set((state) => ({
      seats: state.seats.map((seat) => {
        const updated = updatedSeats.find((u) => u.seatId === seat.seatId);
        if (!updated) return seat;
        return {
          ...seat,
          // AVAILABLE → true, HOLDING/BOOKED → false
          status: updated.status === "AVAILABLE",
          showtimeSeatStatus: updated.status,
        };
      }),
    }));
  },

  resetSeats: () => {
    set({ seats: [], selectedSeats: [], showId: null, loading: false, error: null });
  },
}));

export default useSeatStore;