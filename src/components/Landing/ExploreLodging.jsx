import LodgingImage from "/images/Indonesia-Bandung-4.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.97 },
};

const ExploreLodging = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f7f7f7] to-white">
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Image Section */}
          <motion.div className="flex justify-center" variants={imageVariants}>
            <img
              src={LodgingImage}
              alt="Nearby Lodging"
              className="w-full max-w-[480px] rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="text-center lg:text-left space-y-6"
            variants={textVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Penginapan Nyaman <br />
              <span className="text-[#973C00]">Untuk Perjalanan Anda</span>
            </motion.h2>

            <hr className="w-24 border-[#973C00] border-2 mx-auto lg:mx-0" />

            <p className="text-lg text-gray-700 leading-relaxed">
              Temukan tempat menginap yang nyaman selama perjalanan Anda. Dari
              penginapan tradisional hingga hotel modern, kami membantu Anda
              menemukan tempat terbaik yang sesuai dengan kebutuhan dan
              kenyamanan Anda.
            </p>

            <motion.a
              href="/dashboard"
              className="inline-block bg-amber-800 text-white font-semibold rounded-xl px-7 py-3 text-lg shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Jelajahi Sekarang
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExploreLodging;
