import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Tambahkan ini
import { MdAlternateEmail } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";  
import InputField from "./InputField";
import PasswordInput from "./PasswordInput";
import ReusableButton from "./ReusableButton";

const LoginForm = () => {
  const navigate = useNavigate();  // Untuk pindah halaman
  const { handleLogin } = useAuth();  
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pending, setPending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); 
  };

  const togglePasswordView = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPending(true);

    try {
      await handleLogin(form.email, form.password);
      navigate("/dashboard"); 
    } catch (err) {
      setError(err);
    } finally {
      setPending(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>

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
      {error && <p className="text-red-500 text-sm">{error.email}</p>}

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
      {error && <p className="text-red-500 text-sm">{error.password}</p>}

      <ReusableButton text="Masuk" pending={pending} />
    </form>
  );
};

export default LoginForm;
