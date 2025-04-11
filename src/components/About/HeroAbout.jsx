import PetaIndonesia from "/images/peta_indonesia.png";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const HeroAbout = () => {
  return (
    <section
      className="bg-gray-100 h-[90vh]"
      style={{
        backgroundImage: `url(${PetaIndonesia})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="container mx-auto flex flex-col justify-center items-center h-full px-4 py-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.25,
              delayChildren: 0.2,
            },
          },
        }}
      >
        <motion.h1 className="text-4xl font-bold" variants={fadeUp}>
          CultureConnect:{" "}
          <span className="font-semibold">
            AI-Powered Cultural & Tourism Platform
          </span>
        </motion.h1>
        <motion.p className="mt-4 text-lg max-w-2xl" variants={fadeUp}>
          CultureConnect adalah platform berbasis AI yang merevolusi cara
          wisatawan menemukan pengalaman budaya dan wisata yang lebih personal,
          unik, dan berdampak bagi komunitas lokal.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroAbout;
