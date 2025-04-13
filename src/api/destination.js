import api from "./api";

export const getAllDestinations = async () => {
  try {
    const response = await api.get("/destinations");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal mengambil data destinasi");
  }
};

export const getDestinationById = async (id) => {
  try {
    const response = await api.get(`/destinations/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal mengambil data destinasi");
  }
};

export const getSavedDestinations = async (userId) => {
  try {
    const response = await api.get(`/destinations/saved/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Gagal mendapatkan destinasi yang disimpan:", error);
    throw error;
  }
};

export const saveDestination = async (userId, destinationId) => {
  try {
    const response = await api.post("/destinations/save", { userId, destinationId });
    return response.data;
  } catch (error) {
    console.error("Gagal menyimpan destinasi:", error);
    throw error;
  }
};

export const deleteSavedDestination = async (userId, destinationId) => {
  try {
    const response = await api.delete("/destinations/saved/delete", {
      data: { userId, destinationId },
    });
    return response.data;
  } catch (error) {
    console.error("Gagal menghapus destinasi yang disimpan:", error);
    throw error;
  }
};
