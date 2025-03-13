import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/index";

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
    <div className="w-full h-screen flex items-center justify-center bg-sky-200">
      <div className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-[#e8e6fb] flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
        <img src="/logo.png" alt="logo" className="w-12 md:w-14" />
        <h1 className="text-lg md:text-xl font-semibold">Welcome Back</h1>
        {error && <p className="text-red-500">{error}</p>}
        <p className="text-xs md:text-sm text-gray-500 text-center">
          Don't have an account?{" "}
          <span className="text-sky-400">
            <strong>
              <Link to="/register">Sign up</Link>
            </strong>
          </span>
        </p>
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center gap-2 bg-white p-2 rounded-xl">
            <MdAlternateEmail />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
          </div>

          <div className="w-full flex items-center gap-2 bg-white p-2 rounded-xl relative">
            <FaFingerprint />
            <input
              type={showPassword ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
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

        <button className="w-full p-2 bg-transparent border border-black hover:border-[#74d4ff] rounded-xl mt-3 hover:bg-[#74d4ff]  text-sm md:text-base hover:text-white shadow hover:shadow-black">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
