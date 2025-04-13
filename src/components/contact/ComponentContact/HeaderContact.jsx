import React from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function HeaderContact() {
  const contactItems = [
    {
      icon: <FiMail size={24} />,
      title: "Alamat Email",
      details: ["cultureconnecttim@gmail.com"],
    },
    {
      icon: <FiPhoneCall size={24} />,
      title: "Nomor Telepon",
      details: ["+62 858-6324-4821", "+62 856-9339-0636"],
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="max-w-7xl mx-auto pt-10">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contactItems.map((itemData, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 md:p-8 bg-white md:bg-transparent rounded-lg shadow-md md:shadow-none"
            variants={item}
          >
            <div className="bg-amber-100 text-amber-800 p-4 rounded-full mb-3">
              {itemData.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{itemData.title}</h3>
            <p className="text-gray-600">
              {itemData.details.map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default HeaderContact;
