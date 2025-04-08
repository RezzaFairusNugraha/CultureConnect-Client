import { useAuth } from "../../../../context/UseAuth";
import EditProfileModal from "../Modal/EditProfileModal";
import React, { useState } from "react";

function HeaderProfile() {
  const [showEditModal, setShowEditModal] = useState(false);
  const { user } = useAuth();
  const [userData, setUserData] = useState({
    name: "Rezza Fairus Nugraha",
    email: "rezafairusnugraha@gmail.com",
    city: "",
    bio: "",
    handle: "",
    website: "",
  });

  const handleSaveProfile = (updatedData) => {
    setUserData(updatedData);
    console.log("Profile updated:", updatedData);
  };
  return (
    <div className="bg-amber-800 h-44 relative">
      <div className="absolute bottom-0 left-0 ml-8 mb-4 flex items-center">
        <img
          src="https://picsum.photos/50"
          alt="User Profile"
          className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold"
        />
        <div className="ml-4 text-white">
          <h2 className="text-xl font-bold">{user?.name.split(" ")[0]}</h2>
          <div className="flex items-center space-x-4 mt-1 text-sm">
            <span>0 Ulasan</span>
            <span>0 Foto</span>
            <span>0 Pengikut</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowEditModal(true)}
        className="absolute right-8 bottom-4 bg-white text-gray-800 py-1 px-4 rounded shadow hover:bg-gray-100 transition-colors"
      >
        Edit profil
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
