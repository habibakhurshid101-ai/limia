import React from "react";
import { BsArrowRight } from "react-icons/bs";

const OurCircle = () => {
  return (
    <div className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] z-10">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/39.webp')] bg-cover bg-center"></div>

      {/* Content */}
      <div className="relative z-20 h-full w-full flex flex-col justify-center px-4 sm:px-10 md:px-20 text-center md:text-left">
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed">
          <span className="text-red-500 font-semibold">Be the first </span>
          to know of private launches, special promotions, and insider access by
          joining our inner circle.
        </p>

        <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 md:gap-6 mt-4 md:mt-6">
          <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Join Our Circle
          </h1>
          <button className="mt-2 md:mt-0 flex items-center justify-center bg-red-500 hover:bg-red-600 transition-colors duration-300 text-white px-6 py-3 text-sm sm:text-base rounded-md">
            Join The Inner Circle <BsArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurCircle;
