
import api from "../lib/axios";

export const paymentService = {
  createPayment: async () => {
    const res = await api.post(`/payment/create-payment`);
    return res.data;
  },
  callBackPayment: async () => {
    const res = await api.get(`/payment/vnpay-callback`);
    return res.data;
  },
};
