import { steps } from "../../constants/text.jsx";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HowToWork = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="mx-auto max-w-screen-xl px-4 py-15 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-4xl">
            Cara Kerja CultureConnect
          </h2>
        </motion.div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="relative pl-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative flex items-start mb-12"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {index !== steps.length - 1 && (
                <div className="absolute top-12 w-[3px] h-full bg-gray-300"></div>
              )}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full border-4 ${step.color} absolute left-[-24px]`}
              >
                {step.icon()}
              </div>
              <div className="ml-12 p-5 bg-white shadow-md rounded-lg w-full">
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToWork;
