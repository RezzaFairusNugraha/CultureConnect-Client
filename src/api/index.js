import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" }
});

export const register = async (name, email, password) => {
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


export const login = async (email, password) => {
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



export const checkAuth = async () => {
  try {
    const response = await api.get("/auth/check", { withCredentials: true });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal mengecek status login");
  }
};


export const fetchDashboardData = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get("/dashboard", {headers: { "Authorization": `Bearer ${token}` }});
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal mengambil data dashboard");
  }
}; 


export const logout = async () => {
  try {
    const token = localStorage.getItem("token");
    await api.post("/auth/logout", {headers: { "Authorization": `Bearer ${token}` }});
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    return false;
  }
};
