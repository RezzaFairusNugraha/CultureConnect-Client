import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoSplashScreen from "/images/logoSplashScreen.png";

function Landing() {
  const [hideIntro, setHideIntro] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHideIntro(true), 2000); // Durasi jadi 2 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {!hideIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-[#973c00] z-50"
          >
            {/* LOGO ANIMATION */}
            <motion.img
              src={logoSplashScreen}
              alt="Logo"
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                rotate: [0, 10, -10, 0],
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="w-24 h-24 md:w-32 md:h-32 object-contain mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.9)]"
            />

            {/* TEXT ANIMATION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-white text-4xl md:text-5xl font-bold"
            >
              CultureConnect.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Landing;
