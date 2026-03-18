import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#030617] p-10 border-t border-[#202a36]">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="gap-3 flex flex-col md:col-span-5">
          <div className="flex flex-row items-center">
            <img src="/logo.png" alt="Carzaar Logo" className="w-15 h-10" />
            <p className="text-white text-2xl text-start">Carzaar</p>
          </div>
          <p className="text-sm text-start text-[#354052] w-70/100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            delectus distinctio odit rem mollitia dicta omnis recusandae minima
            voluptatibus saepe voluptate ducimus dignissimos. Magnam aliquid
            atque deleniti quaerat quas illum!
          </p>
        </div>
        <div className="gap-4 flex flex-col md:col-span-2">
          <p className="text-white text-xl text-start">Market Place</p>
          <ul className="gap-4 flex flex-col">
            <li className="text-sm text-start text-[#354052] hover:text-white">
              <a href="">All Cars</a>
            </li>
            <li className="text-sm text-start text-[#354052] hover:text-white">
              <a href="">Live Auctions</a>
            </li>
            <li className="text-sm text-start text-[#354052] hover:text-white">
              <a href="">Sell a car</a>
            </li>
          </ul>
        </div>
        <div className="gap-4 flex flex-col md:col-span-2">
          <p className="text-white text-xl text-start">Company</p>
          <ul className="gap-4 flex flex-col">
            <li className="text-sm text-start text-[#354052] hover:text-white">
              <a href="">About Us</a>
            </li>
            <li className="text-sm text-start text-[#354052] hover:text-white">
              <a href="">Careers</a>
            </li>
            <li className="text-sm text-start text-[#354052] hover:text-white">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="gap-4 flex flex-col md:col-span-2">
          <p className="text-white text-xl text-start">Support</p>
          <ul className="gap-4 flex flex-col">
            <li className="text-sm text-start text-[#354052] hover:text-white">
              <a href="">Help center</a>
            </li>
            <li className="text-sm text-start text-[#354052] hover:text-white">
              <a href="">Privacy</a>
            </li>
            <li className="text-sm text-start text-[#354052] hover:text-white">
              <a href="">Terms and conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <FaFacebook className="text-white" size={20} />
        <FaInstagram className="text-white" size={20} />
        <FaLinkedin className="text-white" size={20} />
      </div>
      <div className="border-t border-[#202a36] mt-8">
        <p className="text-[#354052] mt-3">
          @ 2023 Carzaar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
