import CulinaryImage from "/images/menu-khas-jawa-barat.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, scale: 0.95, rotate: 3, x: 70 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#9c4200",
    boxShadow: "0px 8px 18px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

const ExploreCulinary = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f7f7f7] to-white">
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-20"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Text Section */}
          <motion.div
            className="text-center lg:text-left space-y-6"
            variants={fadeLeft}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Nikmati Kuliner Otentik <br />
              <span className="text-[#973C00]">dari Berbagai Daerah</span>
            </h2>
            <hr className="w-24 border-[#973C00] border-2 mx-auto lg:mx-0" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Rasakan kelezatan cita rasa nusantara yang kaya rempah dan budaya.
              Dari makanan pedas hingga manis, setiap sajian mengandung cerita
              dan tradisi yang unik dari daerah asalnya.
            </p>
            <motion.a
              href="/dashboard"
              className="inline-block bg-amber-800 text-white font-semibold rounded-xl px-7 py-3 text-lg shadow-md"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Jelajahi Sekarang
            </motion.a>
          </motion.div>

          {/* Image Section */}
          <motion.div className="flex justify-center" variants={fadeRight}>
            <img
              src={CulinaryImage}
              alt="Authentic Culinary"
              className="w-full max-w-[480px] rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExploreCulinary;
