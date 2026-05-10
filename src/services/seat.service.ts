import api from "../lib/axios";

export const seatService = {
  getSeatByTheater: async (showId: number) => {
    const res = await api.get(`/seat`, { params: { id: showId } });
    return res.data;
  },
};
