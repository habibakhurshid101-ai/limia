import React from "react";
import { motion } from "framer-motion";
import { foundationCard } from "../constant";
import "../index.css"; // Make sure your scrollbar-hide CSS is imported

const Foundation = () => {
  return (
    <div className="relative z-10 w-full">
      <div className="bg-[#d6ccc2] min-h-[300px] w-full">
        {/* Title */}
        <div className="flex flex-col items-center text-center p-6 sm:p-10 md:p-16 space-y-2 sm:space-y-3 md:space-y-5 uppercase tracking-widest text-white">
          <h2 className="text-base sm:text-lg md:text-xl font-medium text-white">
            Also check
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-text tracking-wide text-white">
            The Foundations
          </h1>
          <h4 className="text-xs sm:text-sm md:text-base lg:text-lg tracking-tight text-white">
            Similar Pieces
          </h4>
        </div>

        {/* Cards - Scrollable Row */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="px-4 sm:px-6 md:px-10 pb-16"
        >
          <div className="flex space-x-2 sm:space-x-4 md:space-x-6 overflow-x-auto scrollbar-hide">
            {foundationCard.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 sm:w-52 md:w-60 lg:w-72 xl:w-80 p-2 sm:p-4 flex flex-col items-center"
              >
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-md"
                />
                <div className="flex justify-between w-full mt-2 sm:mt-3 text-sm sm:text-base">
                  <p className="font-semibold text-gray-800 truncate">{item.name}</p>
                  <p className="text-gray-500">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Foundation;
