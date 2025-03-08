import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/register", form);
      alert("Registrasi berhasil! Silakan login.");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Registrasi gagal! Coba lagi.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input type="text" name="name" placeholder="Nama" value={form.name} onChange={handleChange} className="border p-2 w-full mb-2" required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 w-full mb-2" required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 w-full mb-2" required />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">Register</button>
        <p className="mt-4 text-center">
          Sudah punya akun?{" "}
          <a href="/" className="text-blue-500">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
