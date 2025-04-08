import React, { useState } from "react";
import DeliveryLocationModal from "../Modal/DeliveryLocationModal";
import SearchLocationModal from "../Modal/SearchLocationModal";
import SidebarProfile from "./SidebarProfile";
import ConfirmationModal from "../Modal/ConfirmationModal";

function MainProfile() {
  const [activeMenu, setActiveMenu] = useState("Ulasan");
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [showSearchLocation, setShowSearchLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [savedAddress, setSavedAddress] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenAddAddress = () => {
    setShowAddAddress(true);
  };

  const handleCloseAddAddress = () => {
    setShowAddAddress(false);
  };

  const handleOpenSearchLocation = () => {
    setShowAddAddress(false);
    setShowSearchLocation(true);
  };

  const handleCloseSearchLocation = () => {
    setShowSearchLocation(false);
    setShowAddAddress(true);
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    setShowSearchLocation(false);
    setShowAddAddress(true);
  };

  const handleConfirmAddress = (data) => {
    setSavedAddress(data);
    setShowAddAddress(false);
  };

  return (
    <>
      <SidebarProfile activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="w-3/4">
        {activeMenu === "Ulasan" && (
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Ulasan</h2>
            <div className="flex flex-col items-center justify-center text-gray-500">
              <img
                src="https://cdn-icons-png.flaticon.com/512/748/748066.png"
                alt="No review"
                className="w-20 h-20 mb-2 opacity-50"
              />
              <p className="text-sm">Belum ada ulasan.</p>
            </div>
          </div>
        )}

        {activeMenu === "Foto" && (
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Foto</h2>
            <div className="flex flex-col items-center justify-center text-gray-500">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png"
                alt="No photos"
                className="w-20 h-20 mb-2 opacity-50"
              />
              <p className="text-sm">Belum ada foto.</p>
            </div>
          </div>
        )}

        {activeMenu === "Pengikut" && (
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Pengikut</h2>
            <div className="flex flex-col items-center justify-center text-gray-500">
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847710.png"
                alt="No followers"
                className="w-20 h-20 mb-2 opacity-50"
              />
              <p className="text-sm">Belum ada pengikut.</p>
            </div>
          </div>
        )}

        {activeMenu === "BaruDilihat" && (
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Baru Dilihat
            </h2>
            <div className="flex flex-col items-center justify-center text-gray-500">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png"
                alt="Recently Viewed"
                className="w-20 h-20 mb-2 opacity-50"
              />
              <p className="text-sm">Tidak ada data yang baru dilihat.</p>
            </div>
          </div>
        )}

        {activeMenu === "Alamat" && (
          <div className="bg-white rounded-lg shadow-md p-4 max-w-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Alamat Saya
            </h2>

            {savedAddress ? (
              <>
                <div className="mb-4 space-y-1 border-b border-gray-200 pb-4">
                  <p className="text-gray-600 text-sm">
                    {savedAddress.completeAddress}, {savedAddress.deliveryArea}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {savedAddress.addressType}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    className="text-blue-600 hover:text-blue-700 flex items-center text-sm"
                    onClick={handleOpenAddAddress}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded text-sm"
                    onClick={() => setModalOpen(true)}
                  >
                    Hapus
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={handleOpenAddAddress}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors"
              >
                Tambah Alamat
              </button>
            )}
          </div>
        )}
      </div>

      <DeliveryLocationModal
        show={showAddAddress}
        onClose={handleCloseAddAddress}
        onConfirm={handleConfirmAddress}
        onOpenSearchLocation={handleOpenSearchLocation}
        selectedLocation={selectedLocation}
      />

      <SearchLocationModal
        show={showSearchLocation}
        onClose={handleCloseSearchLocation}
        onSelectLocation={handleSelectLocation}
      />

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={() => setSavedAddress(null)}
        title="Konfirmasi"
        message="Apakah Anda yakin ingin menghapus alamat ini?"
        confirmText="Hapus"
      />
    </>
  );
}

export default MainProfile;
