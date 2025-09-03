import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion, useScroll, useTransform } from "framer-motion";

const OurCircle = () => {
  const { scrollY } = useScroll();

  // Motion values for parallax effect
  const y1 = useTransform(scrollY, [0, 500], [0, -80]); // top row move up
  const y2 = useTransform(scrollY, [0, 500], [0, 80]); // bottom image move down

  return (
    <div className="relative w-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[600px] z-10">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/39.webp')] bg-cover bg-center"></div>

      {/* Content */}
      <div className="relative z-20 h-full w-full flex flex-col md:flex-row items-start p-4 sm:p-10 md:px-20 gap-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center w-full md:w-1/2 text-left">
          <p className="text-white text-xs mb-4 sm:mb-6 md:mb-8 leading-relaxed md:w-70 text-shadow-amber-100 tracking-widest">
            <span className="text-red-500 font-semibold">Be the first </span>
            to know of private launches, special promotions, and insider access
            by joining our inner circle.
          </p>

          <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mt-40 font-text">
            Join Our Circle
          </h1>

          <button className="flex items-center justify-start duration-300 text-white px-6 py-3 text-sm sm:text-base rounded-md font-bold font-text">
            Join The Inner Circle <BsArrowRight className="ml-2 w-5" />
          </button>
        </div>

        {/* Right Column (Images with Motion) */}
        <div className="flex justify-center w-full md:w-1/2 text-left relative">
          <div className="flex flex-col items-end gap-4 w-full">
            {/* Top Row (2 images side by side) */}
            <motion.div
              style={{ y: y1 }}
              className="flex gap-4 md:ml-40 md:-mt-0"
            >
              <img
                src="/42.jpg"
                alt="img"
                className="w-35 h-40 object-cover hidden sm:block"
              />
              <img
                src="/43.jpg"
                alt="img"
                className="w-35 h-40 object-cover hidden sm:block"
              />
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              style={{ y: y2 }}
              className="relative w-full min-h-[400px]"
            >
              <img
                src="/44.jpg"
                alt="img"
                className="w-35 h-40 object-cover hidden sm:block absolute bottom-0 right-0"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCircle;
