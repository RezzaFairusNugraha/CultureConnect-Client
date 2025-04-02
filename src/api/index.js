import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

const register = async (name, email, password) => {
  try {
    const response = await api.post("/auth/register", { name, email, password });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data; 
    }
    throw { general: "Registrasi gagal, coba lagi nanti" };
  }
};

const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    const token = response.data.user.token;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw { response: { data: error.response.data } };
    } else {
      throw { response: { data: { general: "Login gagal, coba lagi nanti" } } };
    }
  }
};

const fetchDashboardData = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get("/dashboard", { headers: { "Authorization": `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal mengambil data dashboard");
  }
};

const getAllDestinations = async () => {
  try {
    const response = await api.get("/destinations");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal mengambil data destinasi");
  }
};

const getDestinationById = async (id) => {
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
    const response = await api.post(`/destinations/save`, {
      userId,
      destinationId,
    });
    return response.data;
  } catch (error) {
    console.error("Gagal menyimpan destinasi:", error);
    throw error;
  }
};

export const deleteSavedDestination = async (userId, destinationId) => {
  try {
    const response = await api.delete(`/destinations/saved/delete`, {
      data: { userId, destinationId },
    });
    return response.data;
  } catch (error) {
    console.error("Gagal menghapus destinasi yang disimpan:", error);
    throw error;
  }
};

const logout = async () => {
  try {
    const token = localStorage.getItem("token");
    await api.post("/auth/logout", { headers: { "Authorization": `Bearer ${token}` } });
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    return false;
  }
};

export {
  login,
  register,
  getAllDestinations,
  getDestinationById,
  fetchDashboardData,
  logout,
};