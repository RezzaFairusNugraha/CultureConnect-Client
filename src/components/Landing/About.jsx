import React from "react";
import AboutImage from "/images/Ilustrasi-budaya-nusantara.png";
import { HiOutlineLightBulb, HiOutlineDocumentText } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <section className="homePage py-12 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-10 md:px-12 lg:px-20">
        <div className="grid xl:grid-cols-2 grid-cols-1 items-center pt-16 gap-12">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={AboutImage}
              alt="Ilustrasi Budaya Nusantara"
              className="w-full max-w-[400px] md:max-w-full mx-auto rounded-lg"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h1
              className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900"
              variants={fadeUp}
              custom={0}
            >
              Temukan pengalaman hebat bersama{" "}
              <span className="text-[#973C00]">kami</span>
            </motion.h1>

            <motion.hr
              className="mb-2 border-amber-800"
              variants={fadeUp}
              custom={0.5}
            />

            <motion.p
              className="text-md leading-relaxed text-gray-700"
              variants={fadeUp}
              custom={1}
            >
              Jelajahi keunikan budaya dan kelezatan kuliner khas daerah bersama
              kami...
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  variants={fadeUp}
                  custom={1.5}
                  className="p-6 bg-amber-800 rounded-lg shadow-sm cursor-pointer"
                >
                  <HiOutlineLightBulb className="w-12 h-12 text-white mb-4" />
                  <h5 className="text-xl font-semibold text-white">
                    Butuh Bantuan?
                  </h5>
                  <p className="text-white">
                    Lihat panduan langkah demi langkah untuk klaim manfaat
                    mingguan.
                  </p>
                </motion.div>
              </Link>

              <Link to="/about">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  variants={fadeUp}
                  custom={1.8}
                  className="p-6 bg-amber-800 rounded-lg shadow-sm cursor-pointer"
                >
                  <HiOutlineDocumentText className="w-12 h-12 text-white mb-4" />
                  <h5 className="text-xl font-semibold text-white">
                    Panduan Lengkap
                  </h5>
                  <p className="text-white">
                    Pelajari semua informasi penting yang perlu Anda ketahui.
                  </p>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
