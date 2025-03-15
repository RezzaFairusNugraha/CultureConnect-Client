import { useState, useEffect } from "react";
import Modal from "./Modal";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full flex justify-between items-center p-4 px-6 md:px-20 z-50 transition-all duration-300 ease-in-out ${
          isScrolled || isMenuOpen
            ? "bg-white shadow-md opacity-100"
            : "bg-transparent opacity-90"
        }`}
      >
        <div className="text-2xl font-bold text-blue-800">
          <a href="#" className="hover:opacity-80 transition-opacity duration-300">
            CultureConnect.
          </a>
        </div>

        <div className="hidden md:flex space-x-6 text-blue-600 font-medium">
          {["Home", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-blue-800 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex space-x-4">
          <a
            href="/register"
            className="border border-blue-900 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
          >
            Daftar
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out"
          >
            Masuk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-800 transition-transform duration-300"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-white shadow-md p-6 flex flex-col space-y-4 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {["Home", "About", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
          >
            {item}
          </a>
        ))}
        <a
          href="/register"
          className="border border-blue-900 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
        >
          Daftar
        </a>
        <button
          onClick={() => setModalOpen(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out"
        >
          Masuk
        </button>
      </div>

      {isModalOpen && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setModalOpen(false)} 
          linkTo={{ text: "Belum punya akun?", href: "/register", label: "Daftar sekarang" }}
        />
      )}
    </>
  );
};

export default Navbar;
