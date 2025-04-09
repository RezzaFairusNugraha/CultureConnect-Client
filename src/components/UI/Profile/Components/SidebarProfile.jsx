function SidebarProfile({ activeMenu, setActiveMenu }) {
  return (
    <div className="w-1/4 bg-white rounded shadow p-4">
      <h3 className="text-gray-700 font-semibold mb-2">Aktivitas</h3>
      <ul className="mb-4 text-sm text-gray-600">
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
  );
}

export default SidebarProfile;
