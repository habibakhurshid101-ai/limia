import React, { useState } from "react";
import { motion } from "motion/react";
import { product } from "../constant";

const Araw = () => {
  return (
  <div className=" bg-gray-100 z-10 relative">
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 lg:mt-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8 text-neutral-500 font-text">
        Araw
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-30 mt-10">
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
  
  // Cursor enter → slideshow start
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
    <div className=" flex flex-col h-full">
      {/* Product Image */}
      <motion.img
        src={item.image[currentImg]}
        alt={item.name}
        className="w-full h-64 sm:h-72 md:h-80 object-cover"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={item.image[currentImg]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        />

      {/* Product Info */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h2 className="text-base sm:text-lg font-semibold text-neutral-700 truncate">
          {item.name}
        </h2>
        <p className="text-sm text-gray-600 mt-2">{item.price}</p>
      </div>
    </div>
  );
};

export default Araw;
