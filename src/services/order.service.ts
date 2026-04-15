
import api from "../lib/axios";

export const orderService = {
  createOrder: async (userId: number|undefined, totalPrice: number) => {
    const res = await api.post(`/order`, {userId, totalPrice});
    return res.data;
  },
};
