import { FaArrowRightLong } from "react-icons/fa6";
import CarCard from "../../components/CarCard";

const FeaturedList = () => {
  return (
    <div className="bg-[#0f1923] py-3 ">
      <div className="flex flex-wrap sm:flex-row gap-3 justify-between items-center px-10 py-5">
        <div>
          <p className="text-white text-2xl font-bold">Featured Listings</p>
          <p className="text-md text-start text-[#354052] mt-2">
            Check out our latest featured products!
          </p>
        </div>
        <div className="flex flex-row gap-1 items-center group cursor-pointer">
          <button className="text-[#155dfd] text-sm font-medium transition-all duration-300 group-hover:scale-105 cursor-pointer">
            View All Products
          </button>

          <FaArrowRightLong className="text-[#155dfd] transition-all duration-300 group-hover:translate-x-2" />
        </div>
      </div>

      <CarCard />
    </div>
  );
};

export default FeaturedList;
