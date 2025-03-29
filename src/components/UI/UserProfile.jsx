import React from "react";

const UserProfile = ({ name }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner / Header */}
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-44 relative">
        {/* Avatar dan Nama */}
        <div className="absolute bottom-0 left-0 ml-8 mb-4 flex items-center">
          {/* Avatar inisial 'R' (bisa diganti foto) */}
          <img
            src="https://picsum.photos/50"
            alt="User Profile"
            className="w-20 h-20  rounded-full flex items-center justify-center text-white text-2xl font-bold"
          />
          <div className="ml-4 text-white">
            <h2 className="text-xl font-bold">{name.split(" ")[0]}</h2>
            {/* Info singkat: Ulasan, Foto, Pengikut */}
            <div className="flex items-center space-x-4 mt-1 text-sm">
              <span>0 Ulasan</span>
              <span>0 Foto</span>
              <span>0 Pengikut</span>
            </div>
          </div>
        </div>

        {/* Tombol Edit Profil */}
        <button className="absolute right-8 bottom-4 bg-white text-gray-800 py-1 px-4 rounded shadow hover:bg-gray-100 transition-colors">
          Edit profil
        </button>
      </div>

      {/* Konten Utama: Sidebar + Konten */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar Menu */}
        <div className="w-1/4 bg-white rounded shadow p-4">
          <h3 className="text-gray-700 font-semibold mb-2">Aktivitas</h3>
          <ul className="mb-4 text-sm text-gray-600">
            <li className="py-1 hover:text-black cursor-pointer">Ulasan</li>
            <li className="py-1 hover:text-black cursor-pointer">Foto</li>
            <li className="py-1 hover:text-black cursor-pointer">Pengikut</li>
            <li className="py-1 hover:text-black cursor-pointer">
              Baru Dilihat
            </li>
          </ul>

          <h3 className="text-gray-700 font-semibold mb-2">Online Ordering</h3>
          <ul className="text-sm text-gray-600">
            <li className="py-1 hover:text-black cursor-pointer">
              Alamat Saya
            </li>
          </ul>
        </div>

        {/* Bagian Konten (Ulasan) */}
        <div className="w-3/4">
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Ulasan</h2>

            {/* Kondisi jika belum ada ulasan */}
            <div className="flex flex-col items-center justify-center text-gray-500">
              {/* Bisa ganti ikon ini dengan ilustrasi lain */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/748/748066.png"
                alt="No review"
                className="w-20 h-20 mb-2 opacity-50"
              />
              <p className="text-sm">Nothing here yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
