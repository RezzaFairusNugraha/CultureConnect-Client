import { useAuth } from "../../../../context/UseAuth";
import EditProfileModal from "../Modal/DetailProfileModal";
import React, { useState, useEffect } from "react";

function HeaderProfile() {
  const [showEditModal, setShowEditModal] = useState(false);
  const { user, profile } = useAuth();
  console.log(profile);

  const [userData, setUserData] = useState({
    name: user?.name,
    email: user?.email,
    city: profile?.city,
    bio: profile?.bio,
    handle: "",
    website: "",
  });

  useEffect(() => {
    if (profile) {
      console.log("PROFILE:", profile);
    }
  }, [profile]);

  const handleSaveProfile = (updatedData) => {
    setUserData(updatedData);
    console.log("Profile updated:", updatedData);
  };

  return (
    <div className="bg-amber-800 h-44 relative">
      <div className="absolute bottom-0 left-0 ml-8 mb-4 flex items-center">
        <img
          src={profile?.profilePic}
          alt="User Profile"
          className="w-20 h-20 rounded-full object-cover bg-white"
        />
        <div className="ml-4 text-white">
          <h2 className="text-xl font-bold">
            {user?.name ? user.name.split(" ")[0] : "Pengguna"}
          </h2>
          <div className="flex flex-col mt-1 text-sm text-white">
            <span>
              <strong>Bio:</strong> {profile?.bio || "Belum diisi"}
            </span>
            <span>
              <strong>Gender:</strong> {profile?.gender || "Belum diisi"}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowEditModal(true)}
        className="absolute right-8 bottom-4 bg-white text-gray-800 py-1 px-4 rounded shadow hover:bg-gray-100 transition-colors"
      >
        Detail Profil
      </button>

      <EditProfileModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        userData={userData}
        onSave={handleSaveProfile}
      />
    </div>
  );
}

export default HeaderProfile;
