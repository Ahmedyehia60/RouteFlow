import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="w-full bg-[#030617] p-5 porder-t border-[#202a36] shadow-[0_-20px_50px_rgba(8,112,184,0.1)]  ">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="gap-3 flex flex-col md:col-span-5">
          <div className="flex flex-row items-center">
            <NavLink to="/" className="shrink-0">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={logo}
                alt="Carzaar Logo"
                className="h-15 md:h-25 object-contain "
              />
            </NavLink>
          </div>
          <p className="text-sm text-start ml-8 text-[#354052] w-70/100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            delectus distinctio odit rem mollitia dicta omnis recusandae minima
            voluptatibus saepe voluptate ducimus dignissimos. Magnam aliquid
            atque deleniti quaerat quas illum!
          </p>
        </div>

        <div className="gap-4 flex flex-col md:col-span-2 mt-8">
          <p className="text-white text-xl text-start">Market Place</p>
          <ul className="gap-4 flex flex-col">
            <li className="text-sm text-start text-[#354052] hover:text-white hover:underline">
              <a href="">All Cars</a>
            </li>
            <li className="text-sm text-start text-[#354052] hover:text-white hover:underline">
              <a href="">Live Auctions</a>
            </li>
            <li className="text-sm text-start text-[#354052] hover:text-white hover:underline">
              <a href="">Sell a car</a>
            </li>
          </ul>
        </div>

        <div className="gap-4 flex flex-col md:col-span-2 mt-8">
          <p className="text-white text-xl text-start">Company</p>
          <ul className="gap-4 flex flex-col">
            <li className="text-sm text-start text-[#354052] hover:text-white hover:underline">
              <a href="">About Us</a>
            </li>
            <li className="text-sm text-start text-[#354052] hover:text-white hover:underline">
              <a href="">Careers</a>
            </li>
            <li className="text-sm text-start text-[#354052] hover:text-white hover:underline">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className="gap-4 flex flex-col md:col-span-2 mt-8">
          <p className="text-white text-xl text-start">Support</p>
          <ul className="gap-4 flex flex-col">
            <li className="text-sm text-start text-[#354052] hover:text-white hover:underline">
              <a href="">Help center</a>
            </li>
            <li className="text-sm text-start text-[#354052] hover:text-white hover:underline">
              <a href="">Privacy</a>
            </li>
            <li className="text-sm text-start text-[#354052] hover:text-white hover:underline">
              <a href="">Terms and conditions</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-5 m-10">
        {[
          { Icon: FaFacebook, color: "hover:bg-blue-600", link: "#" },
          {
            Icon: FaInstagram,
            color:
              "hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500",
            link: "#",
          },
          { Icon: FaLinkedin, color: "hover:bg-[#0077b5]", link: "#" },
          { Icon: FaTwitter, color: "hover:bg-[#0077b5]", link: "#" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 flex items-center justify-center rounded-full bg-[#202a36]/50 text-gray-400 hover:text-white transition-all duration-300 ${item.color} hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
          >
            <item.Icon size={18} />
          </motion.a>
        ))}
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        className="h-px bg-linear-to-r from-blue-600/50 to-transparent w-full my-4"
      />
      <div>
        <p className="text-[#354052] mt-3 text-xs">
          @ 2023 Carzaar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
