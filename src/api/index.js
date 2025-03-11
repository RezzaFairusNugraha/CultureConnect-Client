import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://cultureconnect-server.up.railway.app";

// Instance axios untuk konfigurasi default
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: { "Content-Type": "application/json" }
});

// Fungsi untuk Login
export const login = async (email, password) => {
    try {
        const response = await api.post("/auth/login", { email, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || "Login gagal");
    }
};

// Fungsi untuk Register
export const register = async (name, email, password) => {
    try {
        await api.post("/auth/register", { name, email, password });
        return { success: true, message: "Registrasi berhasil!" };
    } catch (error) {
        throw new Error(error.response?.data?.error || "Registrasi gagal");
    }
};

// Fungsi untuk Fetch Dashboard Data
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
