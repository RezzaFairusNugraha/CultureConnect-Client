import api from "./api";

export const saveUserPreference = async ({ userId, kategori, deskripsi, rating }) => {
  const response = await api.post("/preferences", {
    userId,
    kategori,
    deskripsi,
    rating,
  });

  return response.data;
};

export const getUserPreference = async (userId) => {
    const response = await api.get(`/preferences/${userId}`);
    return response.data;
  };
  