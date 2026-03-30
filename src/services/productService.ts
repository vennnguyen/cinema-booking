import api from "../lib/axios";

export const productService = {
  getProduct: async () => {
    const res = await api.get("/products");
    return res.data;
  },
};
