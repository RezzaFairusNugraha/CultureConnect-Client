import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { login } from "../../../api"; 
import InputField from "./InputField";
import PasswordInput from "./PasswordInput";

const LoginForm = ({ onSuccess, isModal }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); 
  };

  const togglePasswordView = () => setShowPassword(!showPassword);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(form.email, form.password);
      localStorage.setItem("token", data.token);
      alert("Login berhasil!");
      onSuccess(); 
    } catch (err) {
      setError(err.message || "Login gagal, silakan coba lagi.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleLogin}>
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="name@gmail.com"
        value={form.email}
        onChange={handleChange}
        required
        icon={MdAlternateEmail}
      />

      <PasswordInput
        label="Password"
        name="password"
        placeholder="Masukkan Password"
        value={form.password}
        onChange={handleChange}
        required
        showPassword={showPassword}
        togglePasswordView={togglePasswordView}
        icon={showPassword ? FaRegEyeSlash : FaRegEye}
      />

      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Masuk
      </button>
    </form>
  );
};

export default LoginForm;
