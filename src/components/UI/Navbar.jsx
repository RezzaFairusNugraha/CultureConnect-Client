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
        className={`sticky top-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary">
            <a
              href="/"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              CultureConnect.
            </a>
          </div>

          <div className="hidden md:flex space-x-6 text-primary font-medium">
            {["Home", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-secondary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => setModalOpen(true)}
              className="px-4 py-2 rounded-md hover:bg-amber-800 hover:text-white transition duration-300 ease-in-out"
            >
              Masuk
            </button>
            <a
              href="/register"
              className="text-white bg-amber-800 hover:bg-amber-900 focus:ring-2 focus:outline-none focus:ring-amber-600 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out"
            >
              Daftar
            </a>
          </div>

          <button
            className="md:hidden text-primary transition-transform duration-300"
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
            className="text-primary font-medium hover:text-secondary transition-colors duration-300"
          >
            {item}
          </a>
        ))}
        <a
          href="/register"
          className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition duration-300 ease-in-out text-center"
        >
          Daftar
        </a>
        <button
          onClick={() => setModalOpen(true)}
          className="w-full text-white bg-primary hover:bg-secondary focus:ring-secondary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
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
