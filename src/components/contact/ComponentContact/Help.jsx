import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Help() {
  return (
    <motion.div
      className="text-center mt-15 mb-8 mx-auto px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl md:text-3xl font-bold mt-1">
        Bagaimana kami bisa membantu Anda?
      </h3>
      <p className="text-gray-600 max-w-2xl mx-auto mt-3">
        Kami siap membantu Anda dengan segala hal yang berkaitan dengan
        perjalanan Anda. Jika Anda memiliki pertanyaan, masalah, atau kebutuhan
        tambahan, jangan ragu untuk menghubungi kami. Kami berkomitmen untuk
        menjawab setiap pertanyaan Anda dengan cepat dan tepat.
      </p>
    </motion.div>
  );
}

export default Help;
