import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LogoutModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();  
    const { handleLogout } = useAuth();

    if (!isOpen) return null;
  
    const handleBackgroundClick = (e) => {
      if (e.target.id === "modal-overlay") {
        onClose();
      }
    };
  
    return (
      <div
        id="modal-overlay"
        className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50"
        onClick={handleBackgroundClick}
      >
        <div className="bg-white rounded-md shadow-xl p-5 w-96 transform transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-900 text-center">Konfirmasi</h3>
          <p className="text-gray-600 mt-3 text-center">Apakah Anda yakin ingin keluar?</p>
          <div className="flex justify-center space-x-4 mt-5">
            <button
              className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-200 cursor-pointer"
              onClick={onClose}
            >
              Batal
            </button>
            <button
              className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition duration-200 shadow-md cursor-pointer"
              onClick={() => {
                handleLogout(); navigate("/");
                onClose();
              }}
            >
              Keluar
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default LogoutModal;
  