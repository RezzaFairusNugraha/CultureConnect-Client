import React, { useState } from "react";

const UserProfile = ({ name }) => {
  const [activeMenu, setActiveMenu] = useState("Ulasan");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-44 relative">
        <div className="absolute bottom-0 left-0 ml-8 mb-4 flex items-center">
          <img
            src="https://picsum.photos/50"
            alt="User Profile"
            className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold"
          />
          <div className="ml-4 text-white">
            <h2 className="text-xl font-bold">{name.split(" ")[0]}</h2>
            <div className="flex items-center space-x-4 mt-1 text-sm">
              <span>0 Ulasan</span>
              <span>0 Foto</span>
              <span>0 Pengikut</span>
            </div>
          </div>
        </div>

        <button className="absolute right-8 bottom-4 bg-white text-gray-800 py-1 px-4 rounded shadow hover:bg-gray-100 transition-colors">
          Edit profil
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
        <div className="w-1/4 bg-white rounded shadow p-4">
          <h3 className="text-gray-700 font-semibold mb-2">Aktivitas</h3>
          <ul className="mb-4 text-sm text-gray-600">
            <li
              className={`py-1 hover:text-black cursor-pointer ${
                activeMenu === "Ulasan" ? "font-semibold text-black" : ""
              }`}
              onClick={() => setActiveMenu("Ulasan")}
            >
              Ulasan
            </li>
            <li
              className={`py-1 hover:text-black cursor-pointer ${
                activeMenu === "Foto" ? "font-semibold text-black" : ""
              }`}
              onClick={() => setActiveMenu("Foto")}
            >
              Foto
            </li>
            <li
              className={`py-1 hover:text-black cursor-pointer ${
                activeMenu === "Pengikut" ? "font-semibold text-black" : ""
              }`}
              onClick={() => setActiveMenu("Pengikut")}
            >
              Pengikut
            </li>
            <li
              className={`py-1 hover:text-black cursor-pointer ${
                activeMenu === "BaruDilihat" ? "font-semibold text-black" : ""
              }`}
              onClick={() => setActiveMenu("BaruDilihat")}
            >
              Baru Dilihat
            </li>
          </ul>

          <h3 className="text-gray-700 font-semibold mb-2">Online Ordering</h3>
          <ul className="text-sm text-gray-600">
            <li
              className={`py-1 hover:text-black cursor-pointer ${
                activeMenu === "Alamat" ? "font-semibold text-black" : ""
              }`}
              onClick={() => setActiveMenu("Alamat")}
            >
              Alamat Saya
            </li>
          </ul>
        </div>

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
            <div className="bg-white rounded shadow p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Alamat Saya
              </h2>
              <div className="flex flex-col items-center justify-center text-gray-500">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/569/569501.png"
                  alt="No address"
                  className="w-20 h-20 mb-2 opacity-50"
                />
                <p className="text-sm">Anda belum memasukkan alamat.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                  Tambah Alamat
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
