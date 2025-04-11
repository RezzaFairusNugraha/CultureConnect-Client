import { motion } from "framer-motion";
import HeroImage from "/images/Ilustrasi-kuliner-nusantara.jpeg";

const Banner = () => {
  return (
    <motion.section
      className="relative h-screen flex items-center pt-20 md:pt-0 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
    >
      {/* Background */}
      <motion.div
        className="absolute top-0 left-0 h-full w-full hidden md:block"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,0.1),rgba(255,255,255,0.5),rgba(255,255,255,1) ,rgba(255,255,255,1),rgba(255,255,255,1)), url(${HeroImage})`,
          backgroundSize: "contain",
          backgroundPosition: "140% center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.2, ease: "easeOut" }}
      />

      <div className="relative container mx-auto px-6 sm:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-1 items-center gap-12">
          {/* Mobile Image */}
          <motion.div
            className="md:hidden flex justify-center mt-10 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={HeroImage}
              alt="Hero Section"
              className="w-full sm:w-full rounded-lg"
            />
          </motion.div>

          {/* Text */}
          <div className="text-left max-w-xl space-y-4">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4, duration: 0.8, ease: "easeOut" }}
            >
              Mari menjelajah <br /> bersama kami.
            </motion.h1>

            <motion.hr
              className="border-gray-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.6, duration: 0.6, ease: "easeOut" }}
            />

            <motion.p
              className="text-gray-700 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.8 }}
            >
              Temukan pesona budaya dan kelezatan kuliner khas dari berbagai
              daerah. Dari tradisi yang kaya hingga hidangan yang menggugah
              selera, kami siap menemani petualangan wisata Anda.
            </motion.p>

            <motion.p
              className="text-gray-700 text-lg leading-relaxed mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0, duration: 0.8 }}
            >
              Jelajahi tempat-tempat bersejarah, nikmati masakan autentik, dan
              rasakan pengalaman yang tak terlupakan di setiap perjalanan Anda.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.8 }}
            >
              <motion.a
                href="/dashboard"
                className="text-white text-center bg-amber-800 hover:bg-amber-900 focus:ring-2 focus:outline-none focus:ring-amber-700 cursor-pointer rounded-lg px-5 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Jelajahi
              </motion.a>
              <motion.a
                href="/about"
                className="border py-3 px-6 rounded-md font-medium hover:bg-amber-900 hover:text-white transition-all text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lebih lanjut
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
