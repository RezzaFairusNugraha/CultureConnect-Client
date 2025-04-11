import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { login, logout, getUserProfile } from "../api";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);

        if (token) {
          const userData = JSON.parse(localStorage.getItem("user"));
          setUser(userData);

          const profileData = await getUserProfile(); // ✅ Ambil data profil
          setProfile(profileData);
        }
      } catch (error) {
        console.error("Error verifying auth:", error);
        setIsAuthenticated(false);
        setUser(null);
        setProfile(null);
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

      const profileData = await getUserProfile();
      setProfile(profileData);

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
      setProfile(null);
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
        profile,
        setProfile,
        handleLogin,
        handleLogout,
        loading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
