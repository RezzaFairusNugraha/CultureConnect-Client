import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { login } from "../../../api"; 
import InputField from "./InputField";
import PasswordInput from "./PasswordInput";
import ReusableButton from "./ReusableButton";

const LoginForm = ({ onSuccess }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pending, setPending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); 
  };

  const togglePasswordView = () => setShowPassword(!showPassword);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setPending(true);

    try {
      const data = await login(form.email, form.password);
      localStorage.setItem("token", data.token);
      onSuccess(); 
    } catch (err) {
      setError(err);
    } finally {
      setPending(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleLogin}>

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
