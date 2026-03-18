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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-15 w-90/100 mx-auto m-0">
      {cars.map((car) => (
        <div
          key={car.id}
          className="bg-[#030617] rounded-4xl overflow-hidden flex flex-col shadow-2xl"
        >
          <div className="h-64 ">
            <img
              src={car.img}
              alt={car.title}
              className="w-full h-full object-cover rounded-t-4xl"
            />
          </div>

          <div className="p-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-lg font-bold truncate mr-2">
                {car.title}
              </h3>
              <span className="text-[#155dfd] text-xl font-bold whitespace-nowrap">
                {car.price}
              </span>
            </div>
            <div className="flex gap-4 text-gray-400 justify-between text-sm">
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
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-[10px] text-blue-300 font-bold">
                  JD
                </div>
                <span className="text-white text-sm">John D.</span>
                <span className="text-yellow-500 text-xs">★★★★★</span>
              </div>
              <button className="text-[#155dfd] text-sm font-medium hover:underline cursor-pointer">
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
