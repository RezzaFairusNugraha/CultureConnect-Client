import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addUserProfile, uploadUserProfile, getUserProfile } from "../../api/index";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { useAuth } from "../../context/UseAuth"; // Tambahkan ini

const steps = ["Foto", "Bio", "Data Pribadi", "Alamat"];

const UserFormData = () => {
  const { setProfile } = useAuth(); // Ambil setProfile dari AuthContext
  const navigate = useNavigate();
  const [profile, setProfileState] = useState({
    profilePic: "",
    bio: "",
    gender: "",
    age: "",
    detailAddress: "",
    address: "",
    province: "",
    city: "",
    district: "",
    village: "",
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  const [selectedProvinceId, setSelectedProvinceId] = useState("");
  const [selectedRegencyId, setSelectedRegencyId] = useState("");
  const [selectedDistrictId, setSelectedDistrictId] = useState("");
  const [selectedVillageId, setSelectedVillageId] = useState("");

  useEffect(() => {
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((res) => res.json())
      .then(setProvinces)
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!selectedProvinceId) return setRegencies([]);
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvinceId}.json`
    )
      .then((res) => res.json())
      .then(setRegencies)
      .catch(() => {});
  }, [selectedProvinceId]);

  useEffect(() => {
    if (!selectedRegencyId) return setDistricts([]);
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegencyId}.json`
    )
      .then((res) => res.json())
      .then(setDistricts)
      .catch(() => {});
  }, [selectedRegencyId]);

  useEffect(() => {
    if (!selectedDistrictId) return setVillages([]);
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedDistrictId}.json`
    )
      .then((res) => res.json())
      .then(setVillages)
      .catch(() => {});
  }, [selectedDistrictId]);

  const handleNext = () => {
    const fields = [
      [],
      ["bio"],
      ["gender", "age"],
      ["province", "city", "district", "village", "detailAddress", "address"],
    ][step];

    if (!fields.every((f) => profile[f])) {
      setError("Mohon lengkapi data terlebih dahulu.");
      return;
    }

    setError("");
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validImageTypes.includes(file.type)) {
      setError("Format gambar tidak valid. Mohon unggah file JPG atau PNG.");
      return;
    }

    setError("");
    setSelectedImageFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileState((p) => ({ ...p, [name]: value }));
  };

  const handleProvinceChange = (e) => {
    const id = e.target.value;
    const name = provinces.find((p) => p.id === id)?.name || "";
    setSelectedProvinceId(id);
    setProfileState((p) => ({
      ...p,
      province: name,
      city: "",
      district: "",
      village: "",
      detailAddress: "",
      address: "",
    }));
    setSelectedRegencyId("");
    setSelectedDistrictId("");
    setSelectedVillageId("");
  };

  const handleRegencyChange = (e) => {
    const id = e.target.value;
    const name = regencies.find((r) => r.id === id)?.name || "";
    setSelectedRegencyId(id);
    setProfileState((p) => ({
      ...p,
      city: name,
      district: "",
      village: "",
      detailAddress: "",
      address: "",
    }));
    setSelectedDistrictId("");
    setSelectedVillageId("");
  };

  const handleDistrictChange = (e) => {
    const id = e.target.value;
    const name = districts.find((d) => d.id === id)?.name || "";
    setSelectedDistrictId(id);
    setProfileState((p) => ({
      ...p,
      district: name,
      village: "",
      detailAddress: "",
      address: "",
    }));
    setSelectedVillageId("");
  };

  const handleVillageChange = (e) => {
    const id = e.target.value;
    const name = villages.find((v) => v.id === id)?.name || "";
    setSelectedVillageId(id);
    setProfileState((p) => ({
      ...p,
      village: name,
      detailAddress: "",
      address: "",
    }));
  };

  const handleDetailAddressChange = (e) => {
    const detail = e.target.value;
    const full = `${detail}, ${profile.village}, ${profile.district}, ${profile.city}, ${profile.province}`;
    setProfileState((p) => ({
      ...p,
      detailAddress: detail,
      address: full,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const defaultImageUrl = "./images/default-avatar-icon.jpg";

    try {
      let uploadedImageUrl = profile.profilePic;
      if (selectedImageFile) {
        const formData = new FormData();
        formData.append("image", selectedImageFile);

        const response = await uploadUserProfile(formData);
        uploadedImageUrl = response.imageUrl;
      }

      const finalProfilePic = uploadedImageUrl || defaultImageUrl;

      const req = [
        "bio",
        "gender",
        "age",
        "province",
        "city",
        "district",
        "village",
        "detailAddress",
        "address",
      ];

      if (!req.every((f) => profile[f])) {
        setError("Mohon lengkapi semua data terlebih dahulu.");
        setLoading(false);
        return;
      }

      await addUserProfile({
        ...profile,
        profilePic: finalProfilePic,
        age: parseInt(profile.age, 10),
      });

      const updatedProfile = await getUserProfile();
      setProfile(updatedProfile.user); 

      toast.success("Profil berhasil dibuat!");
      navigate("/dashboard");
    } catch {
      toast.error("Gagal membuat profil pengguna. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-amber-100 to-amber-200 p-6">
      <div className="bg-white/90 border border-amber-200 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-amber-900 mb-2">
          Hai User!
        </h1>
        <p className="text-center text-amber-800 mb-2">
          Selamat datang di CultureConnect!
        </p>
        <p className="text-sm text-center mb-6">
          Lengkapi data dirimu dulu yuk!
        </p>

        <div className="flex justify-between mb-6">
          {steps.map((_, i) => (
            <div key={i} className="flex-1 flex items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold cursor-pointer ${
                  i <= step
                    ? "bg-amber-700 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    i < step ? "bg-amber-700" : "bg-gray-300"
                  }`}
                />
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
                  <label className="block font-semibold text-amber-900 cursor-pointer">
                    Foto Profil
                  </label>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    name="profilePic"
                    onChange={handleImageChange}
                    className="w-full p-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                  />
                  {previewImage ? (
                    <div className="mt-4 text-center">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-28 h-28 rounded-full object-cover border-2 border-amber-700 mx-auto shadow"
                      />
                    </div>
                  ) : (
                    <div className="mt-4 text-center">
                      <img
                        src="./images/default-avatar-icon.jpg"
                        alt="Default"
                        className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 mx-auto shadow"
                      />
                    </div>
                  )}
                </>
              )}

              {step === 1 && (
                <>
                  <label className="block font-medium text-amber-900 cursor-pointer">
                    Bio
                  </label>
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
                  <label className="block font-medium text-amber-900 mb-1 cursor-pointer">
                    Jenis Kelamin
                  </label>
                  <select
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-amber-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                  <label className="block font-medium text-amber-900 mt-4 mb-1 cursor-pointer">
                    Umur
                  </label>
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
                  <label className="block font-medium text-amber-900 cursor-pointer">
                    Provinsi
                  </label>
                  <select
                    value={selectedProvinceId}
                    onChange={handleProvinceChange}
                    required
                    className="w-full p-3 border border-amber-300 rounded-md shadow mb-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="">Pilih Provinsi</option>
                    {provinces.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>

                  <label className="block font-medium text-amber-900">
                    Kota/Kabupaten
                  </label>
                  <select
                    value={selectedRegencyId}
                    onChange={handleRegencyChange}
                    required
                    disabled={!selectedProvinceId}
                    className="w-full p-3 border border-amber-300 rounded-md shadow mb-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="">Pilih Kabupaten/Kota</option>
                    {regencies.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name}
                      </option>
                    ))}
                  </select>

                  <label className="block font-medium text-amber-900">
                    Kecamatan
                  </label>
                  <select
                    value={selectedDistrictId}
                    onChange={handleDistrictChange}
                    required
                    disabled={!selectedRegencyId}
                    className="w-full p-3 border border-amber-300 rounded-md shadow mb-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="">Pilih Kecamatan</option>
                    {districts.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name}
                      </option>
                    ))}
                  </select>

                  <label className="block font-medium text-amber-900">
                    Kelurahan/Desa
                  </label>
                  <select
                    value={selectedVillageId}
                    onChange={handleVillageChange}
                    required
                    disabled={!selectedDistrictId}
                    className="w-full p-3 border border-amber-300 rounded-md shadow mb-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="">Pilih Kelurahan/Desa</option>
                    {villages.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name}
                      </option>
                    ))}
                  </select>

                  <label className="block font-medium text-amber-900 cursor-pointer">
                    Detail Alamat
                  </label>
                  <input
                    type="text"
                    name="detailAddress"
                    value={profile.detailAddress}
                    onChange={handleDetailAddressChange}
                    required
                    className="w-full p-3 border border-amber-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Contoh: Jl. Merdeka No. 10 RT 01/RW 02"
                  />

                  <label className="block font-medium text-amber-900 cursor-pointer">
                    Alamat Lengkap
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={profile.address}
                    readOnly
                    required
                    className="w-full p-3 border border-amber-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-100"
                    placeholder="Alamat lengkap akan terisi otomatis"
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
                className="px-4 py-2 rounded-lg text-amber-800 hover:text-amber-900 hover:underline transition"
              >
                Kembali
              </button>
            )}
            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-4 py-2 rounded-lg bg-amber-700 text-white hover:bg-amber-800 transition"
              >
                Lanjut
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="ml-auto px-6 py-2 bg-amber-800 text-white rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
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
