import { useState, useEffect } from "react";
import Modal from "./Modal";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`mx-auto flex justify-between items-center p-4 px-20 bg-transparent z-50 sticky top-0
      transition-shadow duration-300 ease-in-out
      ${isScrolled ? "bg-white shadow-md" : ""}`}
      >
        {/* Left Side - Navigation Links */}
        <div className="flex space-x-4 text-blue-600 font-medium">
          {["Home", "About", "Contact"].map((item) => (
            <a key={item} href="#" className="hover:underline">
              {item}
            </a>
          ))}
        </div>

        {/* Center - Logo */}
        <div className="text-2xl font-bold text-blue-800">
          <a href="#">CultureConnect.</a>
        </div>

        {/* Right Side - Buttons */}
        <div className="flex space-x-4">
          <a
            href="/register"
            className="border border-blue-900 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white transition"
          >
            Daftar
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition"
          >
            Masuk
          </button>
        </div>
      </nav>

      {/* Render Modal jika state `isModalOpen` true */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
