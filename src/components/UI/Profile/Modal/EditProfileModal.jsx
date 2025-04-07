import React, { useState } from "react";
import { CiEdit, CiMail, CiPhone } from "react-icons/ci";

const EditProfileModal = ({ show, onClose }) => {
  const [city, setCity] = useState("");

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white p-4 border-b">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Edit profil</h1>
            <button onClick={onClose} className="text-gray-500 text-2xl">
              &times;
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Full Name */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Full Name
            </h3>
            <p className="text-lg font-medium">Rezza Fairus Nugraha</p>
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Phone number
            </h3>
            <div className="flex items-center gap-2">
              <CiPhone className="text-gray-400 text-xl" />
              <p className="text-sm text-gray-500">
                You can update your phone number using the Zomato app
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Email address
            </h3>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <CiMail className="text-gray-400 text-xl" />
                <p className="text-sm">rezafairusnugraha@gmail.com</p>
              </div>
              <button className="text-red-600 text-sm font-medium">
                Change
              </button>
            </div>
          </div>

          {/* City Input */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">
                Q
              </div>
              <h3 className="text-sm font-medium text-gray-500">
                Type your city name here
              </h3>
            </div>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-2 border-b focus:outline-none focus:border-red-500"
              placeholder="Enter your city"
            />
          </div>

          {/* Save Button */}
          <button
            className="w-full py-3 bg-red-600 text-white rounded-lg font-medium mt-4"
            onClick={() => {
              onClose();
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
