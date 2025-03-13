import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/index";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordView = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await register(form.name, form.email, form.password);
      alert("Registrasi berhasil! Silakan login.");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-sky-200">
      <div className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-[#e8e6fb] flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
        <img src="/logo.png" alt="logo" className="w-12 md:w-14" />
        <h1 className="text-lg md:text-xl font-semibold">Welcome Back</h1>
        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center gap-2 bg-white p-2 rounded-xl">
            <VscAccount />
            <input
              type="text"
              name="name"
              placeholder="Nama"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
          </div>
          <div className="w-full flex items-center gap-2 bg-white p-2 rounded-xl">
            <MdAlternateEmail />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
          </div>

          <div className="w-full flex items-center gap-2 bg-white p-2 rounded-xl relative">
            <FaFingerprint />
            <input
              type={showPassword ? "password" : "text"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base focus:bg-white"
            />
            {showPassword ? (
              <FaRegEyeSlash
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordView}
              />
            ) : (
              <FaRegEye
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordView}
              />
            )}
          </div>
        </form>

        <button className="w-full p-2 bg-transparent border border-black hover:border-[#74d4ff] rounded-xl mt-3 hover:bg-[#74d4ff]  text-sm md:text-base hover:text-white shadow hover:shadow-black ">
          Daftar
        </button>
        <p className="text-xs md:text-sm text-gray-500 text-center">
          Sudah punya akun?{" "}
          <span className="text-sky-400">
            <strong>
              <Link to="/login">Login</Link>
            </strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
