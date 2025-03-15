import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://cultureconnect-server.up.railway.app";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: { "Content-Type": "application/json" }
});

export const login = async (email, password) => {
    try {
        const response = await api.post("/auth/login", { email, password });
        return response.data;
    } catch (error) {
        throw error.response?.data || { errors: { general: "Login gagal" } };
    }
};

export const register = async (name, email, password) => {
    try {
        const response = await api.post("/auth/register", { name, email, password });
        return response.data;
    } catch (error) {
        throw error.response?.data || { email: "Registrasi gagal, coba lagi" };
    }
};


export const fetchDashboardData = async (token) => {
    try {
        const response = await api.get("/dashboard", {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || "Gagal mengambil data dashboard");
    }
};