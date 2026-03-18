import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const navLinks = [
    { name: "Browse Cars", path: "/" },
    { name: "Auctions", path: "/auctions" },
    { name: "Sell", path: "/sell" },
  ];

  return (
    <header className=" bg-[#030617] text-white px-6 py-2">
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
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white transition cursor-pointer">
            Log in
          </button>

          <button className="bg-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-700 transition cursor-pointer">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
