import { IoIosRocket } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdSpeed } from "react-icons/md";

const CarCard = () => {
  const cars = [
    {
      id: 1,
      title: "2023 Porsche 911 GT3",
      price: "$182,500",
      img: "download.jpg",
    },
    {
      id: 2,
      title: "2022 Ferrari Roma",
      price: "$245,000",
      img: "download.jpg",
    },
    { id: 3, title: "2021 BMW M5 CS", price: "$138,900", img: "download.jpg" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-8 px-10 mx-auto">
      {cars.map((car) => (
        <div
          key={car.id}
          className="bg-[#030617] rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        >
          <div className="sm:h-60 h-50">
            <img
              src={car.img}
              alt={car.title}
              className="w-full h-full object-cover rounded-t-3xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-white md:text-lg sm:text-sm text-xs font-bold mr-2 md:text-nowrap text-wrap">
                {car.title}
              </h3>
              <span className="text-[#155dfd] md:text-xl text-sm font-bold whitespace-nowrap">
                {car.price}
              </span>
            </div>
            <div className="flex flex-wrap gap-4 text-gray-400 justify-between text-xs">
              <div className="flex flex-row items-center gap-1">
                <IoLocationSharp />
                <span> Los Angeles, CA</span>
              </div>
              <div className="flex flex-row items-center gap-1">
                <MdSpeed />
                <span>1,240 mi</span>
              </div>
              <div className="flex flex-row items-center gap-1">
                <IoIosRocket />
                <span>Manual</span>
              </div>
            </div>
            <div className="h-px bg-gray-800 my-2" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center md:text-[10px] text-[7px] text-blue-300 font-bold">
                  JD
                </div>
                <span className="text-white md:text-sm text-xs">John D.</span>
                <span className="text-yellow-500 text-xs">★★★★★</span>
              </div>
              <div className="relative group w-fit">
                <button className="text-[#155dfd] md:text-sm text-xs font-medium cursor-pointer">
                  View Details
                </button>

                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#155dfd] transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCard;
