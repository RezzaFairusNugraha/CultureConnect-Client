import { useState, useEffect } from "react";
import { VscAccount } from "react-icons/vsc";
import { MdAlternateEmail } from "react-icons/md";
import InputField from "./AllUiComponents/InputField";
import PasswordInput from "./AllUiComponents/PasswordInput";
import ReusableButton from "./AllUiComponents/ReusableButton";

const RegisterForm = ({ onSubmit, pending, errors: externalErrors }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (externalErrors) {
      setErrors(externalErrors);
    }
  }, [externalErrors]);

  const handleChange = (e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.name) newErrors.name = "Nama wajib diisi";
    if (!form.email) newErrors.email = "Email wajib diisi";
    if (!form.password) newErrors.password = "Password wajib diisi";
    if (form.password && form.password.length < 6)
      newErrors.password = "Password minimal 6 karakter";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        label="Nama Lengkap"
        type="text"
        name="name"
        placeholder="Nama Lengkap"
        value={form.name}
        onChange={handleChange}
        required
        icon={VscAccount}
        error={errors.name}
      />
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
        error={errors.password}
      />
      <ReusableButton text="Daftar" pending={pending} className="w-full" />
    </form>
  );
};

export default RegisterForm;