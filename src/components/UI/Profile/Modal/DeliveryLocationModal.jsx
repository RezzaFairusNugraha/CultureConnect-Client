import React, { useState, useEffect } from "react";
import { updateUserProfile } from "../../../../api/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeliveryLocationModal = ({ show, onClose }) => {
  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  const [selectedProvinceId, setSelectedProvinceId] = useState("");
  const [selectedRegencyId, setSelectedRegencyId] = useState("");
  const [selectedDistrictId, setSelectedDistrictId] = useState("");
  const [selectedVillageId, setSelectedVillageId] = useState("");

  const [detailAddress, setDetailAddress] = useState("");

  useEffect(() => {
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((res) => res.json())
      .then(setProvinces);
  }, []);

  useEffect(() => {
    if (!selectedProvinceId) return;
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvinceId}.json`
    )
      .then((res) => res.json())
      .then(setRegencies);
  }, [selectedProvinceId]);

  useEffect(() => {
    if (!selectedRegencyId) return;
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegencyId}.json`
    )
      .then((res) => res.json())
      .then(setDistricts);
  }, [selectedRegencyId]);

  useEffect(() => {
    if (!selectedDistrictId) return;
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedDistrictId}.json`
    )
      .then((res) => res.json())
      .then(setVillages);
  }, [selectedDistrictId]);

  const getNameById = (arr, id) =>
    arr.find((item) => item.id === id)?.name || "";

  const getFullAddress = () => {
    return `${detailAddress}, ${getNameById(
      villages,
      selectedVillageId
    )}, ${getNameById(districts, selectedDistrictId)}, ${getNameById(
      regencies,
      selectedRegencyId
    )}, ${getNameById(provinces, selectedProvinceId)}`;
  };

  const handleSave = async () => {
    if (
      !detailAddress ||
      !selectedProvinceId ||
      !selectedRegencyId ||
      !selectedDistrictId ||
      !selectedVillageId
    ) {
      toast.error("Lengkapi semua bagian alamat terlebih dahulu.");
      return;
    }

    const fullAddress = getFullAddress();
    const provinceName = getNameById(provinces, selectedProvinceId);

    try {
      await updateUserProfile({
        address: fullAddress,
        deliveryArea: provinceName,
        detailAddress,
      });

      toast.success("Alamat berhasil diperbarui!");
      onClose();
    } catch (error) {
      toast.error("Gagal memperbarui alamat.");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative bg-white w-full max-w-md md:max-w-lg rounded-lg shadow-lg p-4 md:p-6 max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-2">Ubah Alamat</h2>
        <p className="text-gray-600 text-sm mb-3">
          Alamat pengantaran akan digunakan untuk layanan kami.
        </p>

        <form
          className="flex flex-col space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <div>
            <label className="block font-medium text-amber-900">Provinsi</label>
            <select
              value={selectedProvinceId}
              onChange={(e) => {
                setSelectedProvinceId(e.target.value);
                setSelectedRegencyId("");
                setSelectedDistrictId("");
                setSelectedVillageId("");
              }}
              className="w-full p-3 border border-amber-300 rounded-md shadow mb-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
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
            <label className="block font-medium text-amber-900">
              Kabupaten/Kota
            </label>
            <select
              value={selectedRegencyId}
              onChange={(e) => {
                setSelectedRegencyId(e.target.value);
                setSelectedDistrictId("");
                setSelectedVillageId("");
              }}
              className="w-full p-3 border border-amber-300 rounded-md shadow mb-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              disabled={!selectedProvinceId}
              required
            >
              <option value="">Pilih Kabupaten/Kota</option>
              {regencies.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium text-amber-900">
              Kecamatan
            </label>
            <select
              value={selectedDistrictId}
              onChange={(e) => {
                setSelectedDistrictId(e.target.value);
                setSelectedVillageId("");
              }}
              className="w-full p-3 border border-amber-300 rounded-md shadow mb-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              disabled={!selectedRegencyId}
              required
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
            <label className="block font-medium text-amber-900">
              Kelurahan/Desa
            </label>
            <select
              value={selectedVillageId}
              onChange={(e) => setSelectedVillageId(e.target.value)}
              className="w-full p-3 border border-amber-300 rounded-md shadow mb-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              disabled={!selectedDistrictId}
              required
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
            <label className="block font-medium text-amber-900">
              Detail Alamat
            </label>
            <input
              type="text"
              value={detailAddress}
              onChange={(e) => setDetailAddress(e.target.value)}
              required
              className="w-full p-3 border border-amber-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Contoh: Jl. Merdeka No. 10 RT 01/RW 02"
            />
          </div>

          <div className="bg-gray-100 text-sm p-2 rounded">
            <strong>Alamat Lengkap:</strong>
            <p>{getFullAddress()}</p>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-amber-800 text-white rounded text-sm font-medium hover:bg-amber-900"
            >
              Simpan Alamat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryLocationModal;
