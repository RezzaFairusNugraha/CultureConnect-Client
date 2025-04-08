import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { MdAlternateEmail } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useAuth } from "../../../context/UseAuth";  
import InputField from "./AllUiComponents/InputField";
import PasswordInput from ".//AllUiComponents/PasswordInput";
import ReusableButton from "./AllUiComponents/ReusableButton";

const LoginForm = () => {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();  
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [pending, setPending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const togglePasswordView = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setPending(true);
  
    try {
      await handleLogin(form.email, form.password);
      navigate("/dashboard");
    } catch (err) {
      setPending(false);
      if (err.email || err.password || err.general) {
        setErrors(err);
      } else {
        setErrors({ general: "Terjadi kesalahan saat login" });
      }
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
        error={errors.email} 
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
        error={errors.password} 
      />

      {errors.general && <p className="text-red-500 text-sm text-center">{errors.general}</p>}

      <ReusableButton text="Masuk" pending={pending} className="w-full"/>
    </form>
  );
};

export default LoginForm;
