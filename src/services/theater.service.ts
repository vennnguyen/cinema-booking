import api from "../lib/axios";

export const theaterService = {
  getTheaterService: async () => {
    const res = await api.get(`/theaters`);
    return res.data;
  },
};
