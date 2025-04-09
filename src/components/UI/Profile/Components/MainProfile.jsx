import React, { useState } from "react";
import DeliveryLocationModal from "../Modal/DeliveryLocationModal";
import SearchLocationModal from "../Modal/SearchLocationModal";
import SidebarProfile from "./SidebarProfile";
import ConfirmationModal from "../Modal/ConfirmationModal";
import { useAuth } from "../../../../context/UseAuth";
import { updateUserProfile } from "../../../../api/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainProfile() {
  const { profile, setProfile } = useAuth();
  const [activeMenu, setActiveMenu] = useState("Ulasan");
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [showSearchLocation, setShowSearchLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [savedAddress, setSavedAddress] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const defaultLat = -6.9175;
  const defaultLng = 107.6191;

  const addressToShow = savedAddress || profile?.address;

  const handleOpenAddAddress = () => {
    if (addressToShow && typeof addressToShow === "object") {
      setSelectedLocation({
        completeAddress: addressToShow.completeAddress || "",
        deliveryArea: addressToShow.deliveryArea || "",
        addressType: addressToShow.addressType || "Home",
        lat: addressToShow?.markerPosition?.lat || defaultLat,
        lng: addressToShow?.markerPosition?.lng || defaultLng,
      });
    } else if (typeof addressToShow === "string") {
      const parts = addressToShow.split(",");
      const provinsi = parts.pop()?.trim();
      const alamatLengkap = parts.join(",").trim();

      setSelectedLocation({
        completeAddress: alamatLengkap,
        deliveryArea: provinsi,
        addressType: "Home",
        lat: defaultLat,
        lng: defaultLng,
      });
    }

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

  const handleConfirmAddress = async (data) => {
    try {
      await updateUserProfile({ address: data });
      setProfile((prev) => ({ ...prev, address: data }));
      setSavedAddress(data);
      setShowAddAddress(false);
      toast.success("Alamat berhasil disimpan!");
    } catch (error) {
      console.error("Gagal menyimpan alamat:", error);
      toast.error("Gagal menyimpan alamat!");
    }
  };

  return (
    <>
      <SidebarProfile activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="w-3/4">
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

            {addressToShow ? (
              <>
                <div className="mb-4 space-y-1 border-b border-gray-200 pb-4">
                  <p className="text-gray-600 text-sm">
                    {typeof addressToShow === "object"
                      ? `${addressToShow.completeAddress}, ${addressToShow.deliveryArea}`
                      : addressToShow}
                  </p>
                  {addressToShow.addressType && (
                    <p className="text-gray-600 text-sm">
                      {addressToShow.addressType}
                    </p>
                  )}
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
