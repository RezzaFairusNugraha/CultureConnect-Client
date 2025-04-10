import React, { useState } from "react";
import {
  CiUser,
  CiMail,
  CiLocationOn,
  CiCircleInfo,
  CiCalendarDate,
  CiCirclePlus,
  CiEdit,
} from "react-icons/ci";
import { useAuth } from "../../../../context/UseAuth";

const DetailProfileModal = ({ show, onClose }) => {
  const { user, profile } = useAuth();

  const [editableFields, setEditableFields] = useState({
    name: false,
    bio: false,
    gender: false,
    age: false,
  });

  const [localProfile, setLocalProfile] = useState({
    name: user?.name || "",
    bio: profile?.bio || "",
    gender: profile?.gender || "",
    age: profile?.age || "",
  });

  // Cek apakah ada yang sedang diedit
  const isEditing = Object.values(editableFields).some((v) => v);

  const toggleEdit = (field) => {
    setEditableFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (field, value) => {
    setLocalProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // TODO: Tambahkan fungsi simpan ke API di sini (jika diperlukan)
    console.log("Data yang disimpan:", localProfile);

    // Setelah simpan, matikan semua mode edit
    setEditableFields({
      name: false,
      bio: false,
      gender: false,
      age: false,
    });
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h1 className="text-xl font-bold text-amber-700 flex items-center gap-2">
            Detail Profil Pengguna
          </h1>
          <button onClick={onClose} className="text-gray-500 text-2xl">
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-5 text-sm text-gray-700">
          {/* Nama */}
          <div className="flex items-start gap-3 justify-between">
            <div className="flex gap-3">
              <CiUser className="text-xl text-amber-500 mt-1" />
              <div>
                <p className="text-xs text-gray-500">Nama Lengkap</p>
                {editableFields.name ? (
                  <input
                    type="text"
                    value={localProfile.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full border-b border-gray-300 focus:outline-none"
                  />
                ) : (
                  <p className="font-medium">{localProfile.name}</p>
                )}
              </div>
            </div>
            <CiEdit
              className="text-xl text-gray-400 cursor-pointer"
              onClick={() => toggleEdit("name")}
            />
          </div>

          {/* Email - non-edit */}
          <div className="flex items-center gap-3">
            <CiMail className="text-xl text-amber-500" />
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p>{user?.email || "-"}</p>
            </div>
          </div>

          {/* Bio */}
          <div className="flex items-start gap-3 justify-between">
            <div className="flex gap-3">
              <CiCircleInfo className="text-xl text-amber-500 mt-1" />
              <div>
                <p className="text-xs text-gray-500">Bio</p>
                {editableFields.bio ? (
                  <input
                    type="text"
                    value={localProfile.bio}
                    onChange={(e) => handleChange("bio", e.target.value)}
                    className="w-full border-b border-gray-300 focus:outline-none"
                  />
                ) : (
                  <p>{localProfile.bio || "Belum ditambahkan"}</p>
                )}
              </div>
            </div>
            <CiEdit
              className="text-xl text-gray-400 cursor-pointer"
              onClick={() => toggleEdit("bio")}
            />
          </div>

          {/* Gender */}
          <div className="flex items-start gap-3 justify-between">
            <div className="flex gap-3">
              <CiCirclePlus className="text-xl text-amber-500 mt-1" />
              <div>
                <p className="text-xs text-gray-500">Jenis Kelamin</p>
                {editableFields.gender ? (
                  <select
                    value={localProfile.gender}
                    onChange={(e) => handleChange("gender", e.target.value)}
                    className="w-full border-b border-gray-300 focus:outline-none"
                  >
                    <option value="">Pilih</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                ) : (
                  <p>{localProfile.gender || "Belum ditentukan"}</p>
                )}
              </div>
            </div>
            <CiEdit
              className="text-xl text-gray-400 cursor-pointer"
              onClick={() => toggleEdit("gender")}
            />
          </div>

          {/* Umur */}
          <div className="flex items-start gap-3 justify-between">
            <div className="flex gap-3">
              <CiCalendarDate className="text-xl text-amber-500 mt-1" />
              <div>
                <p className="text-xs text-gray-500">Umur</p>
                {editableFields.age ? (
                  <input
                    type="number"
                    value={localProfile.age}
                    onChange={(e) => handleChange("age", e.target.value)}
                    className="w-full border-b border-gray-300 focus:outline-none"
                  />
                ) : (
                  <p>
                    {localProfile.age
                      ? `${localProfile.age} tahun`
                      : "Belum diisi"}
                  </p>
                )}
              </div>
            </div>
            <CiEdit
              className="text-xl text-gray-400 cursor-pointer"
              onClick={() => toggleEdit("age")}
            />
          </div>

          {/* Alamat - non-edit */}
          <div className="flex items-center gap-3">
            <CiLocationOn className="text-xl text-amber-500" />
            <div>
              <p className="text-xs text-gray-500">Alamat Lengkap</p>
              <p>{profile?.address || "Belum diisi"}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t flex justify-center items-center">
          {isEditing && (
            <button
              onClick={handleSave}
              className="bg-amber-500 hover:bg-amber-600 text-white text-sm px-4 py-2 rounded"
            >
              Simpan Perubahan
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailProfileModal;
