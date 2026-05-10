
import api from "../lib/axios";
interface ComboInput {
  comboId: number;
  quantity: number;
}

interface SeatInput {
  seatId: number;
  seatTypeId: number;
}
export const orderService = {
  createOrder: async (userId: number|undefined, showId: number,
    combos: ComboInput[],
    seats: SeatInput[]) => {
    const res = await api.post(`/order`, { userId, showId, combos, seats});
    return res.data;
  },
};
