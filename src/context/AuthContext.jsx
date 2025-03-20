import { createContext, useContext, useState, useEffect } from "react";
import { checkAuth, login, logout } from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const authStatus = await checkAuth();
        setIsAuthenticated(authStatus);
      } catch (error) {
        setIsAuthenticated(false);
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
      return response;
    } catch (error) {
      throw error.response ? error : { response: { data: { general: "Terjadi kesalahan saat login" } } };
    }
  };
  

  const handleLogout = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleLogin, handleLogout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);