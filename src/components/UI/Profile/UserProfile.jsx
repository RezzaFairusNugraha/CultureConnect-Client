import React, { useState, useEffect } from "react";
import { FaBirthdayCake, FaMapMarkerAlt, FaCity, FaTransgender } from "react-icons/fa";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { getUserData, getUserProfile, getSavedDestinations, updateUserProfile } from "../../../api";
import Card from "../../Card";

const toCamelCase = (text) => {
  return text
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
};

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [userData, setUserData] = useState(null);
  const [savedDestinations, setSavedDestinations] = useState([]);
  const [activeTab, setActiveTab] = useState("destinations");
  const [formData, setFormData] = useState({});
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
    name: profile?.name || userData?.name || "Anonim",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataResponse = await getUserData();
        setUserData(userDataResponse.user);

        const userProfileResponse = await getUserProfile();
        setProfile(userProfileResponse);

        const savedDestinationsResponse = await getSavedDestinations(userDataResponse.user.id);
        setSavedDestinations(savedDestinationsResponse);

        setFormData({
          name: userProfileResponse.name || userDataResponse.user.name || "",
          bio: userProfileResponse.bio || "",
          age: userProfileResponse.age || "",
          gender: userProfileResponse.gender || "",
          province: userProfileResponse.province || "",
          city: userProfileResponse.city || "",
          address: userProfileResponse.address || "",
        });
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((res) => res.json())
      .then((data) =>
        setProvinces(data.map((item) => ({ ...item, name: toCamelCase(item.name) })))
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
        setRegencies(data.map((item) => ({ ...item, name: toCamelCase(item.name) })))
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
        setDistricts(data.map((item) => ({ ...item, name: toCamelCase(item.name) })))
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
        setVillages(data.map((item) => ({ ...item, name: toCamelCase(item.name) })))
      )
      .catch(() => {});
  }, [selectedDistrictId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(formData);
      alert("Profil berhasil diperbarui!");
    } catch (error) {
      console.error("Gagal memperbarui profil:", error);
      alert("Terjadi kesalahan saat memperbarui profil.");
    }
  };

  const ProfileSidebar = ({ profile }) => (
    <div className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-6 border border-amber-800">
      <div className="flex flex-col items-center">
        <img
          src={profile?.profilePic || "https://via.placeholder.com/150"}
          alt="Profil"
          className="w-32 h-32 rounded-full object-cover border-2 border-amber-800 mb-4"
        />
        <h2 className="text-xl font-bold text-amber-900">{profile.name}</h2>
        <p className="text-sm text-gray-600">{profile?.bio || "Tidak ada bio."}</p>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3">
          <FaBirthdayCake className="text-amber-800" />
          <span className="text-sm text-gray-700">{profile?.age || "-"}</span>
        </div>
        <div className="flex items-center gap-3">
          <FaTransgender className="text-amber-800" />
          <span className="text-sm text-gray-700">{profile?.gender || "-"}</span>
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-amber-800" />
          <span className="text-sm text-gray-700">{profile?.province || "-"}</span>
        </div>
        <div className="flex items-center gap-3">
          <FaCity className="text-amber-800" />
          <span className="text-sm text-gray-700">{profile?.city || "-"}</span>
        </div>
        <div className="flex items-center gap-3">
          <HiOutlineHomeModern className="text-amber-800" />
          <span className="text-sm text-gray-700">{profile?.address || "-"}</span>
        </div>
      </div>
    </div>
  );

  const SavedDestinations = ({ destinations }) => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.length > 0 ? (
        destinations.map((destination, index) => (
          <Card key={index} item={destination.destination} />
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          Tidak ada destinasi tersimpan.
        </p>
      )}
    </div>
  );

  const ProfileForm = () => {
    const handleProvinceChange = (e) => {
      const id = e.target.value;
      setSelectedProvinceId(id);
      setFormData((prev) => ({
        ...prev,
        province: provinces.find((p) => p.id === id)?.name || "",
        city: "",
        district: "",
        village: "",
        address: "",
      }));
      setSelectedRegencyId("");
      setSelectedDistrictId("");
      setSelectedVillageId("");
    };

    const handleRegencyChange = (e) => {
      const id = e.target.value;
      setSelectedRegencyId(id);
      setFormData((prev) => ({
        ...prev,
        city: regencies.find((r) => r.id === id)?.name || "",
        district: "",
        village: "",
        address: "",
      }));
      setSelectedDistrictId("");
      setSelectedVillageId("");
    };

    const handleDistrictChange = (e) => {
      const id = e.target.value;
      setSelectedDistrictId(id);
      setFormData((prev) => ({
        ...prev,
        district: districts.find((d) => d.id === id)?.name || "",
        village: "",
        address: "",
      }));
      setSelectedVillageId("");
    };

    const handleVillageChange = (e) => {
      const id = e.target.value;
      setSelectedVillageId(id);
      setFormData((prev) => ({
        ...prev,
        village: villages.find((v) => v.id === id)?.name || "",
      }));
    };

    const handleDetailAddressChange = (e) => {
      const detail = e.target.value;
      setFormData((prev) => ({
        ...prev,
        address: `${detail}, ${formData.village}, ${formData.district}, ${formData.city}, ${formData.province}`,
      }));
    };

    return (
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-800 focus:ring-amber-800 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-800 focus:ring-amber-800 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Umur</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-800 focus:ring-amber-800 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-800 focus:ring-amber-800 sm:text-sm"
          >
            <option value="">Pilih</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Provinsi</label>
          <select
            value={selectedProvinceId}
            onChange={handleProvinceChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-800 focus:ring-amber-800 sm:text-sm"
          >
            <option value="">Pilih Provinsi</option>
            {provinces.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Kota/Kabupaten</label>
          <select
            value={selectedRegencyId}
            onChange={handleRegencyChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-800 focus:ring-amber-800 sm:text-sm"
          >
            <option value="">Pilih Kota/Kabupaten</option>
            {regencies.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Kecamatan</label>
          <select
            value={selectedDistrictId}
            onChange={handleDistrictChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-800 focus:ring-amber-800 sm:text-sm"
          >
            <option value="">Pilih Kecamatan</option>
            {districts.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Kelurahan/Desa</label>
          <select
            value={selectedVillageId}
            onChange={handleVillageChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-800 focus:ring-amber-800 sm:text-sm"
          >
            <option value="">Pilih Kelurahan/Desa</option>
            {villages.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Detail Alamat</label>
          <input
            type="text"
            name="detailAddress"
            value={formData.detailAddress}
            onChange={handleDetailAddressChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-800 focus:ring-amber-800 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Alamat Lengkap</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-amber-800 text-white py-2 px-4 rounded-md hover:bg-amber-900"
        >
          Simpan Perubahan
        </button>
      </form>
    );
  };

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
          {activeTab === "destinations" && <SavedDestinations destinations={savedDestinations} />}
          {activeTab === "profile" && <ProfileForm />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;