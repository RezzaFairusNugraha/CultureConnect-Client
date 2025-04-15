import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addUserProfile, uploadUserProfile, getUserData } from "../../api/index";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { useAuth } from "../../context/UseAuth";
import InputField from "../../components/UI/Form/AllUiComponents/InputField";
import FileInput from "../../components/UI/Form/AllUiComponents/FileInput";

const steps = ["Foto", "Bio", "Data Pribadi", "Alamat"];

const toPascalCase = (text) => {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const UserFormData = () => {
  const { user } = useAuth();
  const { setProfile } = useAuth();
  const navigate = useNavigate();
  const [profileState, setProfileState] = useState({
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
  const [error, setError] = useState(null);
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
      .then((data) =>
        setProvinces(data.map((item) => ({ ...item, name: toPascalCase(item.name) })))
      )
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!selectedProvinceId) return setRegencies([]);
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvinceId}.json`
    )
      .then((res) => res.json())
      .then((data) =>
        setRegencies(data.map((item) => ({ ...item, name: toPascalCase(item.name) })))
      )
      .catch(() => {});
  }, [selectedProvinceId]);

  useEffect(() => {
    if (!selectedRegencyId) return setDistricts([]);
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegencyId}.json`
    )
      .then((res) => res.json())
      .then((data) =>
        setDistricts(data.map((item) => ({ ...item, name: toPascalCase(item.name) })))
      )
      .catch(() => {});
  }, [selectedRegencyId]);

  useEffect(() => {
    if (!selectedDistrictId) return setVillages([]);
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedDistrictId}.json`
    )
      .then((res) => res.json())
      .then((data) =>
        setVillages(data.map((item) => ({ ...item, name: toPascalCase(item.name) })))
      )
      .catch(() => {});
  }, [selectedDistrictId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && step < steps.length - 1) {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight" && step < steps.length - 1) {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, [step, profileState]);

  const handleNext = () => {
    if (step === steps.length - 1) return;

    const fields = [
      [],
      ["bio"],
      ["gender", "age"],
      ["province", "city", "district", "village", "detailAddress"],
    ][step];

    const invalidField = fields.find((f) => !profileState[f]);
    if (invalidField) {
      setError({ field: invalidField, message: "Mohon lengkapi data ini." });
      return;
    }

    setError(null);
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validImageTypes.includes(file.type)) {
      setError({ field: "profilePic", message: "Format gambar tidak valid. Mohon unggah file JPG atau PNG." });
      return;
    }

    setError(null);
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
    const full = `${detail}, ${profileState.village}, ${profileState.district}, ${profileState.city}, ${profileState.province}`;
    setProfileState((p) => ({
      ...p,
      detailAddress: detail,
      address: full,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const requiredFields = [
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

    const invalidField = requiredFields.find((f) => !profileState[f]);
    if (invalidField) {
      setError({ field: invalidField, message: "Mohon lengkapi semua data." });
      setLoading(false);
      return;
    }

    try {
      let uploadedImageUrl = profileState.profilePic;
      if (selectedImageFile) {
        const formData = new FormData();
        formData.append("image", selectedImageFile);

        const response = await uploadUserProfile(formData);
        uploadedImageUrl = response.imageUrl;
      }

      const finalProfilePic = uploadedImageUrl || "../images/default-avatar-icon.jpg";

      await addUserProfile({
        ...profileState,
        profilePic: finalProfilePic,
        age: parseInt(profileState.age, 10),
      });

      const updatedProfile = await getUserData();
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
          Hai {user?.name?.split(" ")[0] || "User"}!
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
                  <FileInput
                    label="Foto Profil"
                    name="profilePic"
                    onChange={handleImageChange}
                    className="w-full"
                    error={error?.field === "profilePic" ? error.message : null}
                    accept={"image/jpeg, image/png, image/jpg"}
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
                <InputField
                  label="Bio"
                  type="textarea"
                  name="bio"
                  value={profileState.bio}
                  onChange={handleChange}
                  placeholder="Tulis bio Anda"
                  required
                  className={`w-full ${
                    error?.field === "bio" ? "border-red-500" : "border-amber-300"
                  }`}
                  error={error?.field === "bio" ? error.message : null}
                />
              )}

              {step === 2 && (
                <>
                  <InputField
                    label="Jenis Kelamin"
                    type="select"
                    name="gender"
                    value={profileState.gender}
                    onChange={handleChange}
                    required
                    options={[
                      { value: "", label: "Pilih Jenis Kelamin" },
                      { value: "Laki-laki", label: "Laki-laki" },
                      { value: "Perempuan", label: "Perempuan" },
                    ]}
                  />
                  <InputField
                    label="Umur"
                    type="number"
                    name="age"
                    value={profileState.age}
                    onChange={handleChange}
                    placeholder="Masukkan umur Anda"
                    required
                    min={10}
                    max={100}
                    customValidation={(val) => {
                      if (val < 10) return "Umur minimal 10 tahun";
                      if (val > 100) return "Umur maksimal 100 tahun";
                      return "";
                    }}
                  />
                </>
              )}

              {step === 3 && (
                <>
                  <InputField
                    label="Provinsi"
                    type="select"
                    name="province"
                    value={selectedProvinceId}
                    onChange={handleProvinceChange}
                    required
                    options={[
                      { value: "", label: "Pilih Provinsi" },
                      ...provinces.map((p) => ({ value: p.id, label: p.name })),
                    ]}
                  />
                  <InputField
                    label="Kota/Kabupaten"
                    type="select"
                    name="city"
                    value={selectedRegencyId}
                    onChange={handleRegencyChange}
                    required
                    disabled={!selectedProvinceId}
                    options={[
                      { value: "", label: "Pilih Kabupaten/Kota" },
                      ...regencies.map((r) => ({ value: r.id, label: r.name })),
                    ]}
                  />
                  <InputField
                    label="Kecamatan"
                    type="select"
                    name="district"
                    value={selectedDistrictId}
                    onChange={handleDistrictChange}
                    required
                    disabled={!selectedRegencyId}
                    options={[
                      { value: "", label: "Pilih Kecamatan" },
                      ...districts.map((d) => ({ value: d.id, label: d.name })),
                    ]}
                  />
                  <InputField
                    label="Kelurahan/Desa"
                    type="select"
                    name="village"
                    value={selectedVillageId}
                    onChange={handleVillageChange}
                    required
                    disabled={!selectedDistrictId}
                    options={[
                      { value: "", label: "Pilih Kelurahan/Desa" },
                      ...villages.map((v) => ({ value: v.id, label: v.name })),
                    ]}
                  />
                  <InputField
                    label="Detail Alamat"
                    type="text"
                    name="detailAddress"
                    value={profileState.detailAddress}
                    onChange={handleDetailAddressChange}
                    placeholder="Contoh: Jl. Merdeka No. 10 RT 01/RW 02"
                    required
                  />
                  <InputField
                    label="Alamat Lengkap"
                    type="text"
                    name="address"
                    value={profileState.address}
                    readOnly
                    required
                    className="bg-gray-100"
                  />
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {error && <p className="text-red-500 text-sm text-center">{error.message}</p>}

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
                onClick={(e) => {
                  e.preventDefault(); 
                  const fields = [
                    [],
                    ["bio"],
                    ["gender", "age"],
                    ["province", "city", "district", "village", "detailAddress"],
                  ][step];

                  const invalidField = fields.find((f) => !profileState[f]);
                  if (invalidField) {
                    setError({ field: invalidField, message: "Mohon lengkapi data ini." });
                    return;
                  }

                  setError(null);
                  setStep((s) => Math.min(s + 1, steps.length - 1));
                }}
                className="ml-auto px-4 py-2 rounded-lg bg-amber-700 text-white hover:bg-amber-800 transition cursor-pointer"
              >
                Lanjut
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="ml-auto px-6 py-2 bg-amber-800 text-white rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2 disabled:cursor-not-allowed cursor-pointer"
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
