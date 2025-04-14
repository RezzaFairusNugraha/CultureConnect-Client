import api from "./api";

export const getUserData = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get("/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Gagal mendapatkan data pengguna:", error);
    throw new Error(error.response?.data?.error || "Gagal mengambil data pengguna");
  }
};

export const getUserProfile = async () => {
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

export const updateUserProfile = async (profileData) => {
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

export const addUserProfile = async (profileData) => {
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

export const uploadUserProfile = async (formData) => {
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
