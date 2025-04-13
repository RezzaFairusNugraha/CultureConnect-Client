import api from "./api";

export const register = async (name, email, password) => {
  try {
    const response = await api.post("/auth/register", { name, email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { general: "Registrasi gagal, coba lagi nanti" };
  }
};

export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    const token = response.data.user.token;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    throw error.response?.data || { general: "Login gagal, coba lagi nanti" };
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem("token");
    await api.post(
      "/auth/logout",
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    console.error("Logout failed:", error);
    return false;
  }
};
