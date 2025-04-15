import { useState, useEffect } from "react";
// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import PreferenceForm from "../../components/UI/Form/PreferenceForm";
import logo from "../../images/logo.png";

const PreferenceModal = ({ onClose }) => {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showLogoSection, setShowLogoSection] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const secondLineTimer = setTimeout(() => setShowSecondLine(true), 1500);
    const logoTimer = setTimeout(() => setShowLogoSection(true), 5500);

    return () => {
      clearTimeout(secondLineTimer);
      clearTimeout(logoTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative p-6 w-full max-w-lg bg-white rounded-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          {!showLogoSection ? (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-center"
            >
              <h2 className="text-xl font-semibold text-gray-800 leading-relaxed">
                <Typewriter
                  words={["Hai, selamat datang di CultureConnect —"]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={30}
                  deleteSpeed={0}
                  delaySpeed={800}
                />
                <br />
                {showSecondLine && (
                  <Typewriter
                    words={[
                      "aplikasi web berbasis AI yang merekomendasikan berbagai pengalaman wisata yang dipersonalisasi hanya untuk kamu.",
                    ]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={20}
                    deleteSpeed={0}
                    delaySpeed={500}
                  />
                )}
              </h2>
            </motion.div>
          ) : (
            <motion.div
              key="logo"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex flex-col items-center justify-center gap-4"
            >
              <div className="flex items-center gap-4">
                <img src={logo} alt="logo" className="w-12 h-16" />
                <h2 className="text-2xl font-bold">
                  <Typewriter words={["CultureConnect."]} />
                </h2>
              </div>
              <p className="text-sm text-gray-600 text-center max-w-sm">
                Jelajahi pengalaman wisata yang disesuaikan dengan minat dan preferensimu.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {showLogoSection && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PreferenceForm onSubmit={onClose} />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PreferenceModal;