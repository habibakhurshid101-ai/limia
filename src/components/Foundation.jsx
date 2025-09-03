import React from "react";
import { motion } from "framer-motion";
import { foundationCard } from "../constant";

const Foundation = () => {
  return (
    <div className="relative z-10 w-full overflow-hidden">
      <div className="bg-[#d6ccc2] min-h-[300px] w-full">
        {/* Title */}
        <div className="flex flex-col items-center text-center p-6 sm:p-10 md:p-16 space-y-2 sm:space-y-3 md:space-y-5 uppercase tracking-widest text-white">
          <h2 className="text-base sm:text-lg md:text-xl font-medium">
            Also check
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-text tracking-wide">
            The Foundations
          </h1>
          <h4 className="text-xs sm:text-sm md:text-base lg:text-lg tracking-tight">
            Similar Pieces
          </h4>
        </div>

        {/* Auto-moving Cards */}
        <div className="relative w-full overflow-hidden pb-10 sm:pb-14 md:pb-20">
          <motion.div
            className="flex space-x-4 sm:space-x-6 md:space-x-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >

            {[...foundationCard, ...foundationCard].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-44 sm:w-52 md:w-64 lg:w-72 p-2 sm:p-3 flex flex-col items-center"
              >
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover "
                />
                <div className="flex justify-between w-full mt-3 text-xs sm:text-sm md:text-base px-1">
                  <p className="font-semibold text-gray-800 truncate">
                    {item.name}
                  </p>
                  <p className="text-gray-500">{item.status}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
