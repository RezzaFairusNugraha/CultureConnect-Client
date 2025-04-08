import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUserProfile } from "../../api/index";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const uploadImage = async (file) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(URL.createObjectURL(file));
    }, 1000);
  });
};

const steps = ["Foto", "Bio", "Data Pribadi", "Alamat"];

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

  const [previewImage, setPreviewImage] = useState(null);
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    const fieldsPerStep = [
      ["profilePic"],
      ["bio"],
      ["gender", "age"],
      ["address", "city", "province"]
    ];
    const currentFields = fieldsPerStep[step];
    const isValid = currentFields.every((field) => profile[field]);

    if (!isValid) {
      setError("Mohon lengkapi data terlebih dahulu.");
      return;
    }

    setError("");
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = await uploadImage(file);
      setPreviewImage(imageUrl);
      setProfile((prev) => ({ ...prev, profilePic: imageUrl }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!profile.profilePic || !profile.bio || !profile.gender || !profile.age || !profile.address || !profile.city || !profile.province) {
      setError("Mohon lengkapi semua data terlebih dahulu.");
      setLoading(false);
      return;
    }

    try {
      await addUserProfile({ ...profile, age: parseInt(profile.age, 10) });
      alert("Profil berhasil dibuat!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Gagal membuat profil pengguna:", err);
      setError("Gagal membuat profil pengguna");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-amber-100 to-amber-200 p-6">
      <div className="bg-white/90 border border-amber-200 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-amber-900 mb-2">Hai User!</h1>
        <p className="text-center text-amber-800 mb-2">Selamat datang di CultureConnect!</p>
        <p className="text-sm text-center mb-6">Lengkapi data dirimu dulu yuk!</p>

        <div className="flex justify-between mb-6">
          {steps.map((s, index) => (
            <div key={index} className="flex-1 flex items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold cursor-pointer
                  ${index <= step ? "bg-amber-700 text-white" : "bg-gray-300 text-gray-600"}`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-2 ${index < step ? "bg-amber-700" : "bg-gray-300"}`} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {step === 0 && (
                <>
                  <label className="block font-semibold text-amber-900 cursor-pointer">Foto Profil</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    className="w-full p-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                  />
                  {previewImage && (
                    <div className="mt-4 text-center">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-28 h-28 rounded-full object-cover border-2 border-amber-700 mx-auto shadow"
                      />
                    </div>
                  )}
                </>
              )}

              {step === 1 && (
                <>
                  <label className="block font-medium text-amber-900 cursor-pointer">Bio</label>
                  <textarea
                    name="bio"
                    value={profile.bio}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-amber-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Tulis bio Anda"
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <label className="block font-medium text-amber-900 mb-1 cursor-pointer">Jenis Kelamin</label>
                  <select
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-amber-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                  <label className="block font-medium text-amber-900 mt-4 mb-1 cursor-pointer">Umur</label>
                  <input
                    type="number"
                    name="age"
                    value={profile.age}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-amber-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Masukkan umur Anda"
                  />
                </>
              )}

              {step === 3 && (
                <>
                  <label className="block font-medium text-amber-900 cursor-pointer">Alamat</label>
                  <input
                    type="text"
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-amber-300 rounded-md shadow mb-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Masukkan alamat Anda"
                  />
                  <input
                    type="text"
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-amber-300 rounded-md shadow mb-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Masukkan kota Anda"
                  />
                  <input
                    type="text"
                    name="province"
                    value={profile.province}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-amber-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Masukkan provinsi Anda"
                  />
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="flex justify-between items-center mt-6">
            {step > 0 && (
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-2 rounded-lg text-amber-800 hover:text-amber-900 hover:underline transition cursor-pointer"
              >
                Kembali
              </button>
            )}
            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-4 py-2 rounded-lg bg-amber-700 text-white hover:bg-amber-800 transition cursor-pointer"
              >
                Lanjut
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="ml-auto px-6 py-2 bg-amber-800 text-white rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    Menyimpan...
                  </>
                ) : (
                  "Simpan Profil"
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormData;
