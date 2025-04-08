import React, { useReducer, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUserProfile } from "../../api/index";
import { motion, AnimatePresence } from "framer-motion";
import InputField from "../../components/UI/Form/AllUiComponents/InputField";
import FileInput from "../../components/UI/Form/AllUiComponents/FileInput";
import ReusableButton from "../../components/UI/Form/AllUiComponents/ReusableButton";

const defaultImage = "/images/default-avatar-icon.jpg";

const steps = ["Foto", "Bio", "Data Pribadi", "Alamat"];

const initialState = {
  profile: {
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
  },
  previewImage: null,
  step: 0,
  error: "",
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        profile: { ...state.profile, [action.field]: action.value },
      };
    case "SET_PREVIEW_IMAGE":
      return { ...state, previewImage: action.value };
    case "SET_STEP":
      return { ...state, step: action.value };
    case "SET_ERROR":
      return { ...state, error: action.value };
    case "SET_LOADING":
      return { ...state, loading: action.value };
    default:
      return state;
  }
};

const uploadImage = async (file) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(URL.createObjectURL(file));
    }, 1000);
  });
};

const validateStep = (step, profile) => {
  const fieldsPerStep = [
    [], // Step 0, tidak wajibkan karena default image akan digunakan
    ["bio"],
    ["gender", "age"],
    ["address", "city", "province"],
  ];
  const currentFields = fieldsPerStep[step];
  const missingFields = currentFields.filter((field) => !profile[field]);

  if (missingFields.length > 0) {
    return `Mohon lengkapi data berikut: ${missingFields.join(", ")}`;
  }
  return null;
};

const validateAllFields = (profile) => {
  const requiredFields = ["bio", "gender", "age", "address", "city", "province"];
  const missingFields = requiredFields.filter((field) => !profile[field]);

  if (missingFields.length > 0) {
    return `Mohon lengkapi semua data berikut: ${missingFields.join(", ")}`;
  }
  return null;
};

const UserFormData = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const { profile, previewImage, step, error, loading } = state;

  // Wilayah data
  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  // Selected IDs
  const [selectedProvinceId, setSelectedProvinceId] = useState("");
  const [selectedRegencyId, setSelectedRegencyId] = useState("");
  const [selectedDistrictId, setSelectedDistrictId] = useState("");
  const [selectedVillageId, setSelectedVillageId] = useState("");

  // Load provinces
  useEffect(() => {
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((res) => res.json())
      .then(setProvinces)
      .catch((err) => console.error("Gagal memuat provinsi:", err));
  }, []);

  // Load regencies
  useEffect(() => {
    if (!selectedProvinceId) return setRegencies([]);
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvinceId}.json`
    )
      .then((res) => res.json())
      .then(setRegencies)
      .catch((err) => console.error("Gagal memuat kabupaten:", err));
  }, [selectedProvinceId]);

  // Load districts
  useEffect(() => {
    if (!selectedRegencyId) return setDistricts([]);
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegencyId}.json`
    )
      .then((res) => res.json())
      .then(setDistricts)
      .catch((err) => console.error("Gagal memuat kecamatan:", err));
  }, [selectedRegencyId]);

  // Load villages
  useEffect(() => {
    if (!selectedDistrictId) return setVillages([]);
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedDistrictId}.json`
    )
      .then((res) => res.json())
      .then(setVillages)
      .catch((err) => console.error("Gagal memuat kelurahan:", err));
  }, [selectedDistrictId]);

  const handleNext = () => {
    const errorMessage = validateStep(step, profile);
    if (errorMessage) {
      dispatch({ type: "SET_ERROR", value: errorMessage });
      return;
    }

    dispatch({ type: "SET_ERROR", value: "" });
    dispatch({ type: "SET_STEP", value: Math.min(step + 1, steps.length - 1) });
  };

  const handlePrev = () => {
    dispatch({ type: "SET_STEP", value: Math.max(step - 1, 0) });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = await uploadImage(file);
      dispatch({ type: "SET_PREVIEW_IMAGE", value: imageUrl });
      dispatch({ type: "SET_FIELD", field: "profilePic", value: imageUrl });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", value: true });
    dispatch({ type: "SET_ERROR", value: "" });

    const errorMessage = validateAllFields(profile);
    if (errorMessage) {
      dispatch({ type: "SET_ERROR", value: errorMessage });
      dispatch({ type: "SET_LOADING", value: false });
      return;
    }
    try {
      const profileToSubmit = {
        ...profile,
        age: parseInt(profile.age, 10),
        profilePic: profile.profilePic || defaultImage,
      };

      await addUserProfile(profileToSubmit);

      localStorage.removeItem("isNewUser");

      alert("Profil berhasil dibuat!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Gagal membuat profil pengguna:", err);
      dispatch({ type: "SET_ERROR", value: "Gagal membuat profil pengguna" });
    } finally {
      dispatch({ type: "SET_LOADING", value: false });
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <>
            <FileInput
              label="Foto Profil"
              name="profilePic"
              onChange={handleImageChange}
              required={false}
            />
            <div className="mt-4 text-center">
              <img
                src={previewImage || defaultImage}
                alt="Preview"
                className="w-28 h-28 rounded-full object-cover border-2 border-amber-700 mx-auto shadow"
              />
            </div>
          </>
        );
      case 1:
        return (
          <InputField
            label="Bio"
            type="textarea"
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            required
            placeholder="Tulis bio Anda"
          />
        );
      case 2:
        return (
          <>
            <InputField
              label="Jenis Kelamin"
              type="select"
              name="gender"
              value={profile.gender}
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
              value={profile.age}
              onChange={handleChange}
              required
              placeholder="Masukkan umur Anda"
            />
          </>
        );
      case 3:
        return (
          <>
            <InputField
              label="Alamat"
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              required
              placeholder="Masukkan alamat Anda"
            />
            <InputField
              label="Kota"
              type="text"
              name="city"
              value={profile.city}
              onChange={handleChange}
              required
              placeholder="Masukkan kota Anda"
            />
            <InputField
              label="Provinsi"
              type="text"
              name="province"
              value={profile.province}
              onChange={handleChange}
              required
              placeholder="Masukkan provinsi Anda"
            />
          </>
        );
      default:
        return null;
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
              {renderStepContent()}
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
              <ReusableButton
                text="Simpan Profil"
                pending={loading}
                className="ml-auto px-6 py-2 bg-amber-800 text-white rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormData;