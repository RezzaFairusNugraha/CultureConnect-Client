import api from "./api";
export const getAllRecommendedDestinations = async (userId, kategori, deskripsi, rating) => {
  try {
    const response = await api.post("/recommendations", {
      userId, 
      kategori,
      deskripsi,
      rating,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal mengambil data destinasi");
  }
};
