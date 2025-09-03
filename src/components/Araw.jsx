import React, { useState } from "react";
import { motion } from "motion/react";
import { product } from "../constant";

const Araw = () => {
  return (
    <div className="bg-gray-100 z-10 relative">
      <div className="px-2 sm:px-4 md:px-10 lg:px-20 py-6 md:py-10 lg:mt-10">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-neutral-500 font-text">
          Araw
        </h1>

        {/* Products Grid */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-5 sm:gap-8 lg:gap-10 mt-6 sm:mt-10 
            justify-items-center
          "
        >
          {product.map((item, index) => (
            <ImageCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ item }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleMouseEnter = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % item.image.length);
      }, 800);
      setIntervalId(id);
    }
  };

  const handleMouseLeave = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <div
      className="
        flex flex-col items-center 
        w-full max-w-xs sm:max-w-sm 
        md:w-64 lg:w-72 
        p-2 sm:p-3
      "
    >
      {/* Product Image */}
      <motion.img
        src={item.image[currentImg]}
        alt={item.name}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={item.image[currentImg]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Product Info */}
      <div className="flex justify-between w-full mt-2 sm:mt-3 text-xs sm:text-sm md:text-base px-1">
        <p className="font-semibold text-gray-800 truncate">{item.name}</p>
        <p className="text-gray-500">{item.price}</p>
      </div>
    </div>
  );
};

export default Araw;
