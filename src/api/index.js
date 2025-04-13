import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

const register = async (name, email, password) => {
  try {
    const response = await api.post("/auth/register", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || { general: "Registrasi gagal, coba lagi nanti" }
    );
  }
};

const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    const token = response.data.user.token;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    throw error.response?.data || { general: "Login gagal, coba lagi nanti" };
  }
};

const getUserData = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get("/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || "Gagal mengambil data dashboard"
    );
  }
};

const getAllDestinations = async () => {
  try {
    const response = await api.get("/destinations");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || "Gagal mengambil data destinasi"
    );
  }
};

const getDestinationById = async (id) => {
  try {
    const response = await api.get(`/destinations/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || "Gagal mengambil data destinasi"
    );
  }
};

const getSavedDestinations = async (userId) => {
  try {
    const response = await api.get(`/destinations/saved/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Gagal mendapatkan destinasi yang disimpan:", error);
    throw error;
  }
};

const saveDestination = async (userId, destinationId) => {
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

const deleteSavedDestination = async (userId, destinationId) => {
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

const getUserProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get("/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Gagal mendapatkan profil pengguna:", error);
    throw error;
  }
};

const updateUserProfile = async (profileData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.put("/profile", profileData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Gagal memperbarui profil pengguna:", error);
    throw error;
  }
};

const addUserProfile = async (profileData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.post("/profile", profileData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Gagal membuat profil pengguna:", error);
    throw error;
  }
};

const uploadUserProfile = async (formData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.post("/upload/profile-picture", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Gagal upload profil:", error);
    throw error;
  }
};


export {
  login,
  register,
  getAllDestinations,
  getDestinationById,
  getSavedDestinations,
  saveDestination,
  deleteSavedDestination,
  getUserProfile,
  updateUserProfile,
  addUserProfile,
  getUserData,
  logout,
  uploadUserProfile,
};
