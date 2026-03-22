import { FaArrowRightLong } from "react-icons/fa6";
import CarCard from "../../components/CarCard";

const FeaturedList = () => {
  return (
    <section className="bg-[#0b0f1a] py-16  relative border-b border-[#2a394f]">
      <div className="max-w-7xl mx-auto mb-10">
        <div className="max-w-2xl">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
            Our Featured Listings
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Discover a premium selection of high-performance vehicles and luxury
            SUVs. We combine competitive market pricing with flexible financing
            to ensure your next journey starts with total confidence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <CarCard />
      </div>
      <div className="max-w-7xl mx-auto mt-8 flex justify-end">
        <div className="flex items-center gap-2 group cursor-pointer">
          <button className="text-blue-400 text-sm font-semibold transition-all duration-300 group-hover:text-blue-300 cursor-pointer">
            View All Products
          </button>
          <FaArrowRightLong className="text-blue-400 transition-all duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedList;
