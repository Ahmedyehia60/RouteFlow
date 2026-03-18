import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Browse Cars", path: "/" },
    { name: "Auctions", path: "/auctions" },
    { name: "Sell", path: "/sell" },
  ];

  return (
    <header className="bg-[#030617] drop- text-white px-6 py-2 relative shadow-md shadow-black/50">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="shrink-0">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={logo}
            alt="Carzaar Logo"
            className="h-12 md:h-16 object-contain"
          />
        </NavLink>

        <nav className="hidden md:flex items-center gap-24">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="relative pb-1 group"
            >
              {({ isActive }) => (
                <>
                  <span
                    className={
                      isActive
                        ? "text-blue-400 font-semibold"
                        : "text-gray-300 group-hover:text-white transition"
                    }
                  >
                    {link.name}
                  </span>

                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-300 hover:text-white cursor-pointer">
              Log in
            </button>

            <button className="bg-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-700 cursor-pointer">
              Sign up
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#030617] flex flex-col p-8"
          >
            <div className="flex items-center justify-between mb-12">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="shrink-0"
              >
                <img src={logo} alt="Logo" className="h-12  object-contain" />
              </NavLink>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white"
              >
                ✕
              </motion.button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-xl font-bold transition-all ${
                        isActive
                          ? "text-blue-500 tracking-wide"
                          : "text-gray-400"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                className="h-px bg-linear-to-r from-blue-600/50 to-transparent w-full my-4"
              />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-4"
              >
                <button className="w-full py-4 text-center text-gray-300 font-semibold border border-white/10 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
                  Log in
                </button>

                <button className="w-full py-4 text-center bg-blue-600 text-white font-bold rounded-2xl shadow-[0_10px_20px_rgba(41, 89, 190, 0.3)] active:scale-[0.98] transition-transform cursor-pointer">
                  Sign up
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
