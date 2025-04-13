import React, { useState, useEffect, memo } from "react";
import {
  getUserData,
  getUserProfile,
  getSavedDestinations
} from "../../../api";
import Card from "../../Card";
import ProfileForm from "../Form/ProfileForm";
import ProfileSidebar from "./ProfileCard";

const SavedDestinations = memo(({ destinations }) => {
  if (!destinations?.length) {
    return (
      <p className="text-center text-gray-500 col-span-full">
        Tidak ada destinasi tersimpan.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((dest, i) => (
        <Card key={i} item={dest.destination} />
      ))}
    </div>
  );
});

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [userData, setUserData] = useState(null);
  const [savedDestinations, setSavedDestinations] = useState([]);
  const [activeTab, setActiveTab] = useState("destinations");

  const mergedProfile = {
    ...profile,
    name: profile?.name || userData?.name || "Anonim"
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ud = await getUserData();
        const up = await getUserProfile();
        const sd = await getSavedDestinations(ud.user.id);

        setUserData(ud.user);
        setProfile(up);
        setSavedDestinations(sd);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      }
    };

    fetchData();
  }, []);

  const isDestinationsTab = activeTab === "destinations";
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
        <ProfileSidebar profile={mergedProfile} />
        <div className="flex-1">
          <div className="flex gap-4 mb-6 border-b border-gray-300 pb-2">
            {["destinations", "profile"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "bg-amber-800 text-white shadow-sm"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {tab === "destinations" ? "Destinasi Tersimpan" : "Edit Profil"}
              </button>
            ))}
          </div>
          {isDestinationsTab ? (
            <SavedDestinations destinations={savedDestinations} />
          ) : (
            <ProfileForm profile={profile} userData={userData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;