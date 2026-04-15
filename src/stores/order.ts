import { create } from "zustand";
import type { OrderState } from "../types/store";
import { toast } from "sonner";
import { orderService } from "../services/order.service";
import { paymentService } from "../services/payment.service";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
const useOrder = create<OrderState>((set)=>({
    loading: false,
  error: null,
 createOrder: async (userId: number | undefined, totalPrice: number) => {
    set({ loading: true, error: null });
    try {
      const order = await orderService.createOrder(userId, totalPrice);
      set({ loading: false });
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
  createPayment: async() => {
    try {
        const payment = await paymentService.createPayment()

        if(payment?.paymentUrl){
             window.location.href = payment.paymentUrl;
        }
        set({ loading: false });
    } catch (error:any) {
        const message =
        error?.response?.data?.message ||
        error?.message ||
        "Có lỗi xảy ra, vui lòng thử lại";

      toast.error(message);
      set({ loading: false,error: message  });
      throw error;
    }
  }
  
}))
export default useOrder