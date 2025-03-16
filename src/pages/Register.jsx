import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { MdAlternateEmail } from "react-icons/md";
import { register } from "../api/index";
import InputField from "../components/UI/Form/InputField";
import PasswordInput from "../components/UI/Form/PasswordInput";
import MainForm from "../components/UI/Form/MainForm";
import Layout from "../components/Layout/CommonLayout";
import ReusableButton from "../components/UI/Form/ReusableButton";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [pending, setPending] = useState(false);

  const handleChange = (e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
  
    if (!form.name) newErrors.name = "Nama wajib diisi";
    if (!form.email) newErrors.email = "Email wajib diisi";
    if (!form.password) newErrors.password = "Password wajib diisi";
    if (form.password && form.password.length < 6) newErrors.password = "Password minimal 6 karakter";
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    setPending(true);
    setErrors({});
  
    try {
      await register(form.name, form.email, form.password);
      alert("Registrasi berhasil!");
      window.location.href = "/login";
    } catch (err) {
      setErrors(typeof err === "object" && err !== null ? err : { general: "Terjadi kesalahan, coba lagi nanti" });
    } finally {
      setPending(false);
    }
  };
  

  return (
    <Layout>
      <MainForm
        title="Daftar Akun CultureConnect"
        linkTo={{ text: "Sudah Punya Akun?", href: "/login", label: "Masuk Sekarang" }}
      >
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
          <ReusableButton text="Daftar" pending={pending} />
        </form>
      </MainForm>
      {errors.general && <p className="text-red-500 text-center mt-2">{errors.general}</p>}
    </Layout>
  );
};

export default Register;
