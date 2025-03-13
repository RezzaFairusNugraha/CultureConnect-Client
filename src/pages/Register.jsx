import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../api/index";
import Layout from "../components/Layout/CommonLayout";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordView = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await register(form.name, form.email, form.password);
      alert("Registrasi berhasil! Silakan login.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pb-30">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Daftar Akun CultureConnect
          </h3>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                placeholder="Nama Lengkap"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5"
              />
            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5"
              />
            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Masukan Password Baru"
                value={form.password}
                onChange={handleChange}
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
                Sudah Punya Akun?{" "}
                <span className="text-blue-700 border border-l-0 border-t-0 border-r-0 border-blue-700">
                  <strong>
                    <Link to="/login">Masuk Sekarang</Link>
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

export default Register;
