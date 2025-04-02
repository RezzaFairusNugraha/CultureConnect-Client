import { createContext, useContext, useState, useEffect } from "react";
import { login, logout } from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Tambahkan state user

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const authStatus = localStorage.getItem("token");
        setIsAuthenticated(!!authStatus);

        // Simulasikan fetch data pengguna jika token ada
        if (authStatus) {
          const userData = JSON.parse(localStorage.getItem("user")); // Simpan data user di localStorage
          setUser(userData);
        }
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await login(email, password);
      setIsAuthenticated(true);
      setUser(response.user); // Simpan data user setelah login
      localStorage.setItem("user", JSON.stringify(response.user)); // Simpan di localStorage
      return response;
    } catch (error) {
      throw error.response
        ? error
        : { response: { data: { general: "Terjadi kesalahan saat login" } } };
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
      setUser(null); // Hapus data user
      localStorage.removeItem("user"); // Hapus dari localStorage
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, handleLogin, handleLogout, loading }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);