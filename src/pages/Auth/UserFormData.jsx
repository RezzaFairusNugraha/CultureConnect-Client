import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUserProfile } from "../../api/index";

const UserFormData = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    profilePic: "",
    bio: "",
    gender: "",
    age: "",
    address: "",
    city: "",
    province: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: name === "age" ? parseInt(value, 10) || "" : value, // Konversi age ke integer
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await addUserProfile(profile); // Panggil API untuk menambahkan profil
      alert("Profil berhasil dibuat!");
      navigate("/dashboard"); // Arahkan ke dashboard setelah berhasil
    } catch (err) {
      setError("Gagal membuat profil pengguna");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Buat Profil Pengguna</h1>
      <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Foto Profil</label>
          <input
            type="text"
            name="profilePic"
            value={profile.profilePic}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="URL Foto Profil"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Bio</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Tulis bio Anda"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Jenis Kelamin</label>
          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Umur</label>
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Masukkan umur Anda"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Alamat</label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Masukkan alamat Anda"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Kota</label>
          <input
            type="text"
            name="city"
            value={profile.city}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Masukkan kota Anda"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Provinsi</label>
          <input
            type="text"
            name="province"
            value={profile.province}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Masukkan provinsi Anda"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Menyimpan..." : "Simpan Profil"}
        </button>
      </form>
    </div>
  );
};

export default UserFormData;