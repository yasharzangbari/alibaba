export const endpoints = {
  getHotels: {
    url: "/data",
    method: "GET",
  },
  getHotel: (id: string) => ({
    url: `/data/${id}`,
    method: "GET",
  }),
};
