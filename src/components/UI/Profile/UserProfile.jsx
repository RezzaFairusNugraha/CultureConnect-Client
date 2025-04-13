import React, { useState, useEffect, useCallback, memo } from "react";
import {
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaCity,
  FaTransgender,
} from "react-icons/fa";
import { HiOutlineHomeModern } from "react-icons/hi2";
import {
  getUserData,
  getUserProfile,
  getSavedDestinations,
  updateUserProfile,
} from "../../../api";
import Card from "../../Card";

const toTitleCase = (text) =>
  text
    .toLowerCase()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const ProfileSidebar = memo(({ profile }) => (
  <div className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-6 border border-amber-800">
    <div className="flex flex-col items-center">
      <img
        src={profile.profilePic || "https://via.placeholder.com/150"}
        alt="Profil"
        className="w-32 h-32 rounded-full object-cover border-2 border-amber-800 mb-4"
      />
      <h2 className="text-xl font-bold text-amber-900">{profile.name}</h2>
      <p className="text-sm text-gray-600">{profile.bio || "Tidak ada bio."}</p>
    </div>
    <div className="mt-6 space-y-4">
      <div className="flex items-center gap-3">
        <FaBirthdayCake className="text-amber-800" />
        <span className="text-sm text-gray-700">{profile.age || "-"}</span>
      </div>
      <div className="flex items-center gap-3">
        <FaTransgender className="text-amber-800" />
        <span className="text-sm text-gray-700">{profile.gender || "-"}</span>
      </div>
      <div className="flex items-center gap-3">
        <FaMapMarkerAlt className="text-amber-800" />
        <span className="text-sm text-gray-700">{profile.province || "-"}</span>
      </div>
      <div className="flex items-center gap-3">
        <FaCity className="text-amber-800" />
        <span className="text-sm text-gray-700">{profile.city || "-"}</span>
      </div>
      <div className="flex items-center gap-3">
        <HiOutlineHomeModern className="text-amber-800" />
        <span className="text-sm text-gray-700">{profile.address || "-"}</span>
      </div>
    </div>
  </div>
));

const SavedDestinations = memo(({ destinations }) => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {destinations.length > 0 ? (
      destinations.map((dest, i) => <Card key={i} item={dest.destination} />)
    ) : (
      <p className="text-center text-gray-500 col-span-full">
        Tidak ada destinasi tersimpan.
      </p>
    )}
  </div>
));

const ProfileForm = memo(
  ({
    formData,
    detailAddress,
    fullAddress,
    provinces,
    regencies,
    districts,
    villages,
    selectedProvinceId,
    selectedRegencyId,
    selectedDistrictId,
    selectedVillageId,
    handleInputChange,
    handleDetailAddressChange,
    handleProvinceChange,
    handleRegencyChange,
    handleDistrictChange,
    handleVillageChange,
    handleFormSubmit,
  }) => (
    <form
      onSubmit={handleFormSubmit}
      className="space-y-4 py-4 px-6 bg-white rounded-2xl border border-amber-300 shadow-md"
    >
      <div className="border-b border-amber-100">
        <label className="block text-sm font-semibold text-amber-800 mb-1">
          Nama
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm transition-shadow duration-150"
        />
      </div>
      <div className="border-b border-amber-100">
        <label className="block text-sm font-semibold text-amber-800 mb-1">
          Bio
        </label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm transition-shadow duration-150"
        />
      </div>
      <div className="border-b border-amber-100">
        <label className="block text-sm font-semibold text-amber-800 mb-1">
          Umur
        </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm transition-shadow duration-150"
        />
      </div>
      <div className="border-b border-amber-100">
        <label className="block text-sm font-semibold text-amber-800 mb-1">
          Jenis Kelamin
        </label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm transition-shadow duration-150"
        >
          <option value="">Pilih</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      </div>
      {[
        {
          label: "Provinsi",
          value: selectedProvinceId,
          handler: handleProvinceChange,
          options: provinces,
        },
        {
          label: "Kota/Kabupaten",
          value: selectedRegencyId,
          handler: handleRegencyChange,
          options: regencies,
        },
        {
          label: "Kecamatan",
          value: selectedDistrictId,
          handler: handleDistrictChange,
          options: districts,
        },
        {
          label: "Kelurahan/Desa",
          value: selectedVillageId,
          handler: handleVillageChange,
          options: villages,
        },
      ].map((f) => (
        <div key={f.label} className="border-b border-amber-100">
          <label className="block text-sm font-semibold text-amber-800 mb-1">
            {f.label}
          </label>
          <select
            value={f.value}
            onChange={f.handler}
            className="w-full rounded-lg border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm transition-shadow duration-150"
          >
            <option value="">Pilih {f.label}</option>
            {f.options.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.name}
              </option>
            ))}
          </select>
        </div>
      ))}
      <div className="border-b border-amber-100">
        <label className="block text-sm font-semibold text-amber-800 mb-1">
          Detail Alamat
        </label>
        <input
          type="text"
          name="detailAddress"
          value={detailAddress}
          onChange={handleDetailAddressChange}
          className="w-full rounded-lg border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm transition-shadow duration-150"
          placeholder="Contoh: Jl. Merdeka No. 123"
        />
      </div>
      <div className="pb-2">
        <label className="block text-sm font-semibold text-amber-800 mb-1">
          Alamat Lengkap
        </label>
        <input
          type="text"
          name="address"
          value={fullAddress}
          readOnly
          className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 rounded-lg font-medium transition-colors duration-300 bg-amber-800 text-white hover:bg-amber-900"
      >
        Simpan Perubahan
      </button>
    </form>
  )
);

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [userData, setUserData] = useState(null);
  const [savedDestinations, setSavedDestinations] = useState([]);
  const [activeTab, setActiveTab] = useState("destinations");
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    age: "",
    gender: "",
    province: "",
    city: "",
    district: "",
    village: "",
  });

  const [detailAddress, setDetailAddress] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);
  const [selectedProvinceId, setSelectedProvinceId] = useState("");
  const [selectedRegencyId, setSelectedRegencyId] = useState("");
  const [selectedDistrictId, setSelectedDistrictId] = useState("");
  const [selectedVillageId, setSelectedVillageId] = useState("");
  const mergedProfile = {
    ...profile,
    name: profile?.name ?? userData?.name ?? "Anonim",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ud = await getUserData();
        setUserData(ud.user);

        const up = await getUserProfile();
        setProfile(up);

        const sd = await getSavedDestinations(ud.user.id);
        setSavedDestinations(sd);

        setFormData({
          name: up.name ?? ud.user.name ?? "",
          bio: up.bio ?? "",
          age: up.age ?? "",
          gender: up.gender ?? "",
          province: up.province ?? "",
          city: up.city ?? "",
          district: up.district ?? "",
          village: up.village ?? "",
        });
        setDetailAddress(up.detailAddress ?? "");
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((r) => r.json())
      .then((data) => {
        setProvinces(data.map((i) => ({ ...i, name: toTitleCase(i.name) })));
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!selectedProvinceId) return setRegencies([]);
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvinceId}.json`
    )
      .then((r) => r.json())
      .then((data) => {
        setRegencies(data.map((i) => ({ ...i, name: toTitleCase(i.name) })));
      })
      .catch(() => {});
  }, [selectedProvinceId]);

  useEffect(() => {
    if (!selectedRegencyId) return setDistricts([]);
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegencyId}.json`
    )
      .then((r) => r.json())
      .then((data) => {
        setDistricts(data.map((i) => ({ ...i, name: toTitleCase(i.name) })));
      })
      .catch(() => {});
  }, [selectedRegencyId]);

  useEffect(() => {
    if (!selectedDistrictId) return setVillages([]);
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedDistrictId}.json`
    )
      .then((r) => r.json())
      .then((data) => {
        setVillages(data.map((i) => ({ ...i, name: toTitleCase(i.name) })));
      })
      .catch(() => {});
  }, [selectedDistrictId]);

  const fullAddress = [
    detailAddress,
    formData.village,
    formData.district,
    formData.city,
    formData.province,
  ]
    .filter((p) => p && p.trim())
    .join(", ");

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleDetailAddressChange = useCallback((e) => {
    setDetailAddress(e.target.value);
  }, []);

  const handleProvinceChange = useCallback(
    (e) => {
      const id = e.target.value;
      setSelectedProvinceId(id);
      setFormData((prev) => ({
        ...prev,
        province: provinces.find((p) => p.id === id)?.name || "",
        city: "",
        district: "",
        village: "",
      }));
      setSelectedRegencyId("");
      setSelectedDistrictId("");
      setSelectedVillageId("");
    },
    [provinces]
  );

  const handleRegencyChange = useCallback(
    (e) => {
      const id = e.target.value;
      setSelectedRegencyId(id);
      setFormData((prev) => ({
        ...prev,
        city: regencies.find((r) => r.id === id)?.name || "",
        district: "",
        village: "",
      }));
      setSelectedDistrictId("");
      setSelectedVillageId("");
    },
    [regencies]
  );

  const handleDistrictChange = useCallback(
    (e) => {
      const id = e.target.value;
      setSelectedDistrictId(id);
      setFormData((prev) => ({
        ...prev,
        district: districts.find((d) => d.id === id)?.name || "",
        village: "",
      }));
      setSelectedVillageId("");
    },
    [districts]
  );

  const handleVillageChange = useCallback(
    (e) => {
      const id = e.target.value;
      setSelectedVillageId(id);
      setFormData((prev) => ({
        ...prev,
        village: villages.find((v) => v.id === id)?.name || "",
      }));
    },
    [villages]
  );

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await updateUserProfile({
          ...formData,
          detailAddress,
          address: fullAddress,
        });
        alert("Profil berhasil diperbarui!");
      } catch (err) {
        console.error("Gagal memperbarui profil:", err);
        alert("Terjadi kesalahan saat memperbarui profil.");
      }
    },
    [formData, detailAddress, fullAddress]
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
        <ProfileSidebar profile={mergedProfile} />
        <div className="flex-1">
          <div className="flex gap-4 mb-6 border-b border-gray-300 pb-2">
            <button
              onClick={() => setActiveTab("destinations")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "destinations"
                  ? "bg-amber-800 text-white shadow-sm"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Destinasi Tersimpan
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "profile"
                  ? "bg-amber-800 text-white shadow-sm"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Profil
            </button>
          </div>
          {activeTab === "destinations" ? (
            <SavedDestinations destinations={savedDestinations} />
          ) : (
            <ProfileForm
              formData={formData}
              detailAddress={detailAddress}
              fullAddress={fullAddress}
              provinces={provinces}
              regencies={regencies}
              districts={districts}
              villages={villages}
              selectedProvinceId={selectedProvinceId}
              selectedRegencyId={selectedRegencyId}
              selectedDistrictId={selectedDistrictId}
              selectedVillageId={selectedVillageId}
              handleInputChange={handleInputChange}
              handleDetailAddressChange={handleDetailAddressChange}
              handleProvinceChange={handleProvinceChange}
              handleRegencyChange={handleRegencyChange}
              handleDistrictChange={handleDistrictChange}
              handleVillageChange={handleVillageChange}
              handleFormSubmit={handleFormSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
