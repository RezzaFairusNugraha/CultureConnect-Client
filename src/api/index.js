import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://cultureconnect-server.up.railway.app";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" }
});

export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Login gagal" };
  }
};

export const checkAuth = async () => {
    try {
      const response = await api.get("/auth/check");
      return response.data.isAuthenticated;
    } catch (error) {
      console.error("Check Auth Error:", error.response?.data || error);
      return false;
    }
  };
  

export const register = async (name, email, password) => {
  try {
    const response = await api.post("/auth/register", { name, email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Registrasi gagal" };
  }
};

export const fetchDashboardData = async () => {
  try {
    const response = await api.get("/dashboard");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal mengambil data dashboard");
  }
};

export const logout = async () => {
  try {
    await api.post("/auth/logout");
    return true;
  } catch (error) {
    console.error("Logout gagal:", error);
    return false;
  }
};
