import { LuSearch, LuMousePointerClick, LuShieldCheck } from "react-icons/lu";

const About = () => {
  const steps = [
    {
      id: 1,
      title: "Browse Listings",
      desc: "Explore our extensive collection of high-performance vehicles and luxury SUVs, all at competitive market prices.",
      icon: <LuSearch size={28} />,
    },
    {
      id: 2,
      title: "Select Your Car",
      desc: "Choose from a wide range of makes and models, including the latest releases and classic favorites.",
      icon: <LuMousePointerClick size={28} />,
    },
    {
      id: 3,
      title: "Purchase with Confidence",
      desc: "Enjoy a seamless buying experience with secure payment options and dedicated customer support.",
      icon: <LuShieldCheck size={28} />,
    },
  ];

  return (
    <section className="bg-[#0b0f1a] py-12 px-6">
      <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-4">
        How Carzaar Works
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Carzaar is a revolutionary platform that connects car enthusiasts with
        the best deals on premium vehicles.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center group">
            <div className="w-15 h-15 rounded-2xl bg-blue-600/10 border-2 border-blue-500 flex items-center justify-center text-blue-500 mb-6 ">
              {step.icon}
            </div>

            <h3 className="text-white text-xl font-semibold mb-3">
              {step.title}
            </h3>
            <p className="text-gray-400 text-sm text-center leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="">
        <button className="bg-white  text-black font-bold py-3 px-4 rounded-2xl mt-8 transition-colors duration-300">
          Start Your Listing
        </button>
      </div>
    </section>
  );
};

export default About;
