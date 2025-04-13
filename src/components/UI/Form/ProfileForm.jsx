import { memo, useEffect, useState, useCallback } from "react";
import { toTitleCase } from "../../../utils/TextFormatters";
import { updateUserProfile } from "../../../api";
import InputField from "./AllUiComponents/InputField";
import ReusableButton from "./AllUiComponents/ReusableButton";

const toUpperCase = (text) => text?.toString().toUpperCase().trim();

const ProfileForm = memo(({ profile, userData }) => {
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

  useEffect(() => {
    setFormData({
      name: profile?.name ?? userData?.name ?? "",
      bio: profile?.bio ?? "",
      age: profile?.age ?? "",
      gender: profile?.gender ?? "",
      province: profile?.province ?? "",
      city: profile?.city ?? "",
      district: profile?.district ?? "",
      village: profile?.village ?? "",
    });
    setDetailAddress(profile?.detailAddress ?? "");
  }, [profile, userData]);

  useEffect(() => {
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((r) => r.json())
      .then((data) => {
        const formatted = data.map((i) => ({ ...i, name: toTitleCase(i.name) }));
        setProvinces(formatted);
        if (profile?.province) {
          const found = formatted.find(p => toUpperCase(p.name) === toUpperCase(profile.province));
          if (found) setSelectedProvinceId(found.id);
        }
      });
  }, [profile?.province]);

  useEffect(() => {
    if (!selectedProvinceId) return setRegencies([]);
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvinceId}.json`)
      .then((r) => r.json())
      .then((data) => {
        const formatted = data.map((i) => ({ ...i, name: toTitleCase(i.name) }));
        setRegencies(formatted);
        if (profile?.city) {
          const found = formatted.find(r => toUpperCase(r.name) === toUpperCase(profile.city));
          if (found) setSelectedRegencyId(found.id);
        }
      });
  }, [selectedProvinceId, profile?.city]);

  useEffect(() => {
    if (!selectedRegencyId) return setDistricts([]);
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegencyId}.json`)
      .then((r) => r.json())
      .then((data) => {
        const formatted = data.map((i) => ({ ...i, name: toTitleCase(i.name) }));
        setDistricts(formatted);
        if (profile?.district) {
          const found = formatted.find(d => toUpperCase(d.name) === toUpperCase(profile.district));
          if (found) setSelectedDistrictId(found.id);
        }
      });
  }, [selectedRegencyId, profile?.district]);

  useEffect(() => {
    if (!selectedDistrictId) return setVillages([]);
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedDistrictId}.json`)
      .then((r) => r.json())
      .then((data) => {
        const formatted = data.map((i) => ({ ...i, name: toTitleCase(i.name) }));
        setVillages(formatted);
        if (profile?.village) {
          const found = formatted.find(v => toUpperCase(v.name) === toUpperCase(profile.village));
          if (found) setSelectedVillageId(found.id);
        }
      });
  }, [selectedDistrictId, profile?.village]);

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
    <form
      onSubmit={handleFormSubmit}
      className="space-y-4 py-4 px-6 bg-white rounded-2xl border border-amber-800 shadow-md"
    >
      <InputField
        label="Nama"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleInputChange}
      />
      <InputField
        label="Bio"
        name="bio"
        type="textarea"
        value={formData.bio}
        onChange={handleInputChange}
      />
      <InputField
        label="Umur"
        name="age"
        type="number"
        value={formData.age}
        onChange={handleInputChange}
      />
      <InputField
        label="Jenis Kelamin"
        name="gender"
        type="select"
        value={formData.gender}
        onChange={handleInputChange}
        options={[
          { value: "", label: "Pilih" },
          { value: "Laki-laki", label: "Laki-laki" },
          { value: "Perempuan", label: "Perempuan" },
        ]}
      />
      <InputField
        label="Provinsi"
        type="select"
        name="province"
        value={selectedProvinceId}
        onChange={handleProvinceChange}
        options={[{ value: "", label: "Pilih Provinsi" }, ...provinces.map((p) => ({ value: p.id, label: p.name }))]}
      />
      <InputField
        label="Kota/Kabupaten"
        type="select"
        name="city"
        value={selectedRegencyId}
        onChange={handleRegencyChange}
        options={[{ value: "", label: "Pilih Kota/Kabupaten" }, ...regencies.map((r) => ({ value: r.id, label: r.name }))]}
      />
      <InputField
        label="Kecamatan"
        type="select"
        name="district"
        value={selectedDistrictId}
        onChange={handleDistrictChange}
        options={[{ value: "", label: "Pilih Kecamatan" }, ...districts.map((d) => ({ value: d.id, label: d.name }))]}
      />
      <InputField
        label="Kelurahan/Desa"
        type="select"
        name="village"
        value={selectedVillageId}
        onChange={handleVillageChange}
        options={[{ value: "", label: "Pilih Kelurahan/Desa" }, ...villages.map((v) => ({ value: v.id, label: v.name }))]}
      />
      <InputField
        label="Detail Alamat"
        name="detailAddress"
        type="text"
        value={detailAddress}
        onChange={handleDetailAddressChange}
        placeholder="Contoh: Jl. Merdeka No. 123"
      />
      <InputField
        label="Alamat Lengkap"
        name="address"
        type="text"
        value={fullAddress}
        readOnly
      />
      <ReusableButton
        text="Simpan Perubahan"
        className="w-full py-2 rounded-lg font-medium transition-colors duration-300 bg-amber-800 text-white hover:bg-amber-900"
      >
      </ReusableButton>
    </form>
  );
});

export default ProfileForm;
