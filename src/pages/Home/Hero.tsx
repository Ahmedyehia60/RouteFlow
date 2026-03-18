import { motion } from "framer-motion";
import hero1 from "../../assets/images/hero2.png";

import { HiChevronDoubleDown } from "react-icons/hi";

function Hero() {
  return (
    <section className="relative w-full h-screen">
      <img
        src={hero1}
        alt="hero section"
        className="w-full h-full object-cover"
      />

      <motion.button
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        className="absolute bottom-25 left-1/2 -translate-x-1/2 text-white/50 hover:text-blue-500 cursor-pointer z-20 transition-colors duration-300"
      >
        <HiChevronDoubleDown size={35} />
      </motion.button>
    </section>
  );
}

export default Hero;
