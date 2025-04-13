import { memo } from "react";
import {
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaCity,
  FaTransgender,
  FaRoad,
  FaHome
} from "react-icons/fa";
import { HiOutlineHomeModern } from "react-icons/hi2";
import defaultAvatar from "/images/default-avatar-icon.jpg";

const ProfileSidebar = memo(({ profile }) => (
  <div className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-6 border border-amber-800">
    <div className="flex flex-col items-center">
      <img
        src={profile.profilePic || defaultAvatar}
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
        <FaRoad className="text-amber-800" />
        <span className="text-sm text-gray-700">{profile.district || "-"}</span>
      </div>
      <div className="flex items-center gap-3">
        <FaHome className="text-amber-800" />
        <span className="text-sm text-gray-700">{profile.village || "-"}</span>
      </div>
      <div className="flex items-center gap-3">
        <HiOutlineHomeModern className="text-amber-800" />
        <span className="text-sm text-gray-700">{profile.address || "-"}</span>
      </div>
    </div>
  </div>
));

export default ProfileSidebar;