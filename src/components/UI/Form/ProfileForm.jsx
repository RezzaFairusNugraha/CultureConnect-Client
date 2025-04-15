import { memo, useEffect, useState, useCallback } from "react";
import { toTitleCase } from "../../../utils/TextFormatters";
import { updateUserProfile } from "../../../api";
import InputField from "./AllUiComponents/InputField";
import ReusableButton from "./AllUiComponents/ReusableButton";
import { toast } from "react-toastify";

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
    const province = profile?.province ?? "";
    const city = profile?.city ?? "";
    const district = profile?.district ?? "";
    const village = profile?.village ?? "";
  
    setFormData({
      name: profile?.name ?? userData?.name ?? "",
      bio: profile?.bio ?? "",
      age: profile?.age ?? "",
      gender: profile?.gender ?? "",
      province,
      city,
      district,
      village,
    });
  
    const address = profile?.address ?? "";
    const knownParts = [village, district, city, province]
      .filter(Boolean)
      .map((s) => toUpperCase(s));
  
    const addressParts = address.split(",").map((s) => s.trim());
    const unknownParts = addressParts.filter(
      (part) => !knownParts.includes(toUpperCase(part))
    );
  
    setDetailAddress(unknownParts.join(", "));
  }, [profile, userData]);
  

  useEffect(() => {
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          ...item,
          name: toTitleCase(item.name),
        }));
        setProvinces(formatted);
        const match = formatted.find(
          (p) => toUpperCase(p.name) === toUpperCase(profile?.province)
        );
        if (match) setSelectedProvinceId(match.id);
      });
  }, [profile?.province]);

  useEffect(() => {
    if (!selectedProvinceId) return setRegencies([]);
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvinceId}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          ...item,
          name: toTitleCase(item.name),
        }));
        setRegencies(formatted);
        const match = formatted.find(
          (r) => toUpperCase(r.name) === toUpperCase(profile?.city)
        );
        if (match) setSelectedRegencyId(match.id);
      });
  }, [selectedProvinceId, profile?.city]);

  useEffect(() => {
    if (!selectedRegencyId) return setDistricts([]);
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegencyId}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          ...item,
          name: toTitleCase(item.name),
        }));
        setDistricts(formatted);
        const match = formatted.find(
          (d) => toUpperCase(d.name) === toUpperCase(profile?.district)
        );
        if (match) setSelectedDistrictId(match.id);
      });
  }, [selectedRegencyId, profile?.district]);

  useEffect(() => {
    if (!selectedDistrictId) return setVillages([]);
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedDistrictId}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          ...item,
          name: toTitleCase(item.name),
        }));
        setVillages(formatted);
        const match = formatted.find(
          (v) => toUpperCase(v.name) === toUpperCase(profile?.village)
        );
        if (match) setSelectedVillageId(match.id);
      });
  }, [selectedDistrictId, profile?.village]);

  const fullAddress = [
    detailAddress,
    formData.village,
    formData.district,
    formData.city,
    formData.province,
  ]
    .filter((item) => item && item.trim())
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
        toast.success("Profil berhasil diperbarui!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        console.error("Gagal memperbarui profil:", error);
        alert("Terjadi kesalahan saat memperbarui profil.");
      }
    },
    [formData, detailAddress, fullAddress]
  );

  return (
    <div className="w-full bg-white p-8 rounded-2xl shadow-md border border-amber-800 mx-auto">
      <form onSubmit={handleFormSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Nama"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
        />
        <InputField
          label="Umur"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleInputChange}
          min={10}
          max={100}
          required
          customValidation={(val) => {
            if (val < 10) return "Umur minimal 10 tahun";
            if (val > 100) return "Umur maksimal 100 tahun";
            return "";
          }}
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
          label="Bio"
          name="bio"
          type="textarea"
          value={formData.bio}
          onChange={handleInputChange}
          className="md:col-span-2"
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
          className="md:col-span-2"
        />
        <InputField
          label="Alamat Lengkap"
          name="address"
          type="text"
          value={fullAddress}
          readOnly
          className="md:col-span-2"
        />
        </div>

        <div className="pt-4">
          <ReusableButton
            text="Simpan Perubahan"
            className="w-full py-3 rounded-lg font-semibold text-white bg-amber-800 hover:bg-amber-900 transition duration-300"
          />
        </div>
      </form>
    </div>
  );
  
});

export default ProfileForm;