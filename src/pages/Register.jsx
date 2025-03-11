import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/index";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
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
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input type="text" name="name" placeholder="Nama" value={form.name} onChange={handleChange} className="border p-2 w-full mb-2" required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 w-full mb-2" required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 w-full mb-2" required />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">Register</button>
        <p className="mt-4 text-center">
          Sudah punya akun?{" "}
          <Link to="/" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
