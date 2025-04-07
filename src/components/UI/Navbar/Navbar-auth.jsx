import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../../../context/UseAuth";
import LogoutModal from "../LogoutModal";

const NavbarAuth = () => {
  const { isAuthenticated, user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const menuRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 w-full z-50 ${
          isScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex justify-between items-center py-4 border-b">
          <div className="text-2xl font-bold text-primary">
            <Link to="/" className="hover:opacity-80 transition-opacity duration-300">
              CultureConnect.
            </Link>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            {isAuthenticated ? (
              <div ref={profileRef} className="relative">
                <button
                  onClick={() => setProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <span className="text-primary">Hi {user?.name.split(" ")[0]}!</span>
                  <img
                    src="https://picsum.photos/50"
                    alt="User Profile"
                    className="w-8 h-8 rounded-full border"
                  />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer"
                    >
                      Keluar
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button onClick={() => setModalOpen(true)} className="cursor-pointer">
                  Masuk
                </button>
                <Link
                  to="/register"
                  className="text-white bg-amber-800 hover:bg-amber-900 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Daftar
                </Link>
              </>
            )}
          </div>

          <button className="md:hidden text-primary cursor-pointer" onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-6 text-primary justify-center py-2">
          <Link to="/dashboard" className="hover:text-secondary transition-colors duration-300">
            Dashboard
          </Link>
          <Link to="/maps" className="hover:text-secondary transition-colors duration-300">
            Peta
          </Link>
          <Link to="/profile" className="hover:text-secondary transition-colors duration-300">
            Profile
          </Link>
        </div>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden bg-white shadow-md p-4 absolute top-full left-0 w-full flex flex-col space-y-4"
          >
            <Link to="/dashboard" className="text-primary hover:text-secondary transition-colors duration-300" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
            <Link to="/maps" className="text-primary hover:text-secondary transition-colors duration-300" onClick={() => setMenuOpen(false)}>
              Peta
            </Link>
            <Link to="/profile" className="text-primary hover:text-secondary transition-colors duration-300" onClick={() => setMenuOpen(false)}>
              Profile
            </Link>
            {isAuthenticated && (
              <button onClick={() => setModalOpen(true)} className="text-red-600 hover:text-red-800 cursor-pointer">
                Keluar
              </button>
            )}
          </div>
        )}
      </nav>
      
      {isModalOpen && <LogoutModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default NavbarAuth;