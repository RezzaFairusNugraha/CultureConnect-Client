import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-[#1E2A59]">
            <a
              href="/"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              CultureConnect.
            </a>
          </div>

          <div className="hidden md:flex space-x-6 text-[#1E2A59] font-medium">
            {["Home", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-[#3A4D7D] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex space-x-4">
            <a
              href="/register"
              className="border border-[#1E2A59] text-[#1E2A59] px-4 py-2 rounded-md hover:bg-[#1E2A59] hover:text-white transition duration-300 ease-in-out"
            >
              Daftar
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="text-white bg-[#1E2A59] hover:bg-[#3A4D7D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out"
            >
              Masuk
            </button>
          </div>

          <button
            className="md:hidden text-[#1E2A59] transition-transform duration-300"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        className={`fixed top-16 left-0 w-full bg-white shadow-md p-6 flex flex-col space-y-4 transition-all duration-300 ease-in-out transform z-50 ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {["Home", "About", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-[#1E2A59] font-medium hover:text-[#3A4D7D] transition-colors duration-300"
          >
            {item}
          </a>
        ))}
        <a
          href="/register"
          className="border border-[#1E2A59] text-[#1E2A59] px-4 py-2 rounded-md hover:bg-[#1E2A59] hover:text-white transition duration-300 ease-in-out text-center"
        >
          Daftar
        </a>
        <button
          onClick={() => setModalOpen(true)}
          className="w-full text-white bg-[#1E2A59] hover:bg-[#14203F] focus:ring-[#14203F] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Masuk
        </button>
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          linkTo={{
            text: "Belum punya akun?",
            href: "/register",
            label: "Daftar sekarang",
          }}
        />
      )}
    </>
  );
};

export default Navbar;
