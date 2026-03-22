
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8  max-w-7xl mx-auto">
      {cars.map((car) => (
        <div
          key={car.id}
          className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden flex flex-col hover:border-blue-500/50 transition-all duration-300 group/card"
        >
          {/* Image Section */}
          <div className="relative overflow-hidden h-56">
            <img
              src={car.img}
              alt={car.title}
              className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#111827] via-transparent to-transparent opacity-60" />
          </div>

          {/* Content Section */}
          <div className="p-5 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <h3 className="text-gray-100 text-lg font-semibold leading-tight">
                {car.title}
              </h3>
              <span className="text-white text-lg font-bold">{car.price}</span>
            </div>

            {/* Info Icons */}
            <div className="grid grid-cols-3 gap-2 text-gray-400 text-[11px]">
              <div className="flex items-center gap-1.5 bg-gray-800/40 p-2 rounded-lg">
                <IoLocationSharp className="text-blue-400" />
                <span className="truncate">Los Angeles</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-800/40 p-2 rounded-lg">
                <MdSpeed className="text-blue-400" />
                <span>1,240 mi</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-800/40 p-2 rounded-lg">
                <IoIosRocket className="text-blue-400" />
                <span>Manual</span>
              </div>
            </div>

            <div className="h-px bg-gray-800/50 my-1" />

            {/* Footer */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-600 to-blue-400 flex items-center justify-center text-[10px] text-white font-bold shadow-lg">
                  JD
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-200 text-xs font-medium">
                    John D.
                  </span>
                  <span className="text-yellow-500 text-[10px]">★★★★★</span>
                </div>
              </div>

              <button className="text-blue-400 text-sm font-semibold transition-colors group-hover/btn:text-blue-300 hover:underline cursor-pointer">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCard;
