import { motion } from "framer-motion";
import {
  HiChevronDoubleDown,
  HiAdjustmentsHorizontal,
} from "react-icons/hi2";
import hero1 from "../../assets/images/hero2.png";
import { HiSearch } from "react-icons/hi";

function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-slate-950">
   
      <div className="absolute inset-0">
        <img
          src={hero1}
          alt="hero section"
          className="w-full h-full object-cover opacity-50" 
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 to-transparent" />
      </div>


      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-3xl space-y-6">
      
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Find Your Next Car.
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold text-blue-500 tracking-tight">
              Sell Yours in Minutes.
            </h2>
          </div>

     
          <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
            The world's most trusted premium car marketplace for enthusiasts and
            collectors. Verified listings, secure payments, and expert support.
          </p>

        
          <div className="flex flex-wrap items-center gap-3 p-2 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl max-w-2xl">
            <div className="flex-1 flex items-center px-4 gap-3">
              <HiSearch className="text-slate-400 size-6" />
              <input
                type="search"
                placeholder="Search by brand, model..."
                className="w-full bg-transparent border-none outline-none text-white placeholder:text-slate-500 py-3"
              />
            </div>

            <button className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all font-medium">
              <HiAdjustmentsHorizontal className="size-5" />
              Filters
            </button>

            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-bold shadow-lg shadow-blue-600/20">
              Search
            </button>
          </div>

    
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] text-white font-bold uppercase"
                >
                  {i === 3 ? "12k+" : i === 1 ? "GT" : "MK"}
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-sm">
              Joined by <span className="text-white font-bold">12,000+</span>{" "}
              collectors this month
            </p>
          </div>
        </div>
      </div>

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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hover:text-blue-500 cursor-pointer z-20 transition-colors"
      >
        <HiChevronDoubleDown size={30} />
      </motion.button>
    </section>
  );
}

export default Hero;
