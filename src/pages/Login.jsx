import { MdAlternateEmail } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/index";
import Layout from "../components/Layout/CommonLayout";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordView = () => setShowPassword(!showPassword);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      alert("Login berhasil!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pb-30">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Masuk ke akun anda
          </h3>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Masukkan email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5"
                required
              />
            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Masukkan password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5"
                required
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer pt-6"
                onClick={togglePasswordView}
              >
                {showPassword ? (
                  <FaRegEyeSlash className="text-gray-400" />
                ) : (
                  <FaRegEye className="text-gray-400" />
                )}
              </span>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Masuk
            </button>
            <div className="flex justify-between mt-2 text-sm">
              <p className="text-xs md:text-sm text-gray-500 text-center">
                Belum Punya Akun?{" "}
                <span className="text-blue-700 border border-l-0 border-t-0 border-r-0 border-blue-700">
                  <strong>
                    <Link to="/register">Daftar Sekarang</Link>
                  </strong>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
