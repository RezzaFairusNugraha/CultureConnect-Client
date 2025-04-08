import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { login, logout } from "../api";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const authStatus = localStorage.getItem("token");
        setIsAuthenticated(!!authStatus);

        if (authStatus) {
          const userData = JSON.parse(localStorage.getItem("user"));
          setUser(userData);
        }
      } catch (error) {
        console.error("Error verifying auth:", error);
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
      setUser(response.user);
      localStorage.setItem("user", JSON.stringify(response.user));
      return response;
    } catch (error) {
      throw error;
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated, 
        user,
        setUser,
        handleLogin,
        handleLogout,
        loading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
