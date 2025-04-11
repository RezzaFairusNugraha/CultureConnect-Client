import { motion } from "framer-motion";
import { solutions } from "../../constants/text.jsx";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HowToFix = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900">
            Bagaimana CultureConnect Mengatasi Masalah Ini?
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              variants={cardVariants}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 ${solution.bgColor} rounded-full`}>
                  {solution.icon()}
                </div>
                <h5 className="ml-3 text-xl font-bold text-gray-900">
                  {solution.title}
                </h5>
              </div>
              <p className="text-gray-700 flex-grow">{solution.description}</p>
              <a
                href="#"
                className={`mt-4 inline-block font-semibold hover:underline ${solution.linkColor}`}
              >
                {solution.linkText}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HowToFix;
