import React, { useState, useRef, useEffect } from "react";
import { shopProduct } from "../constant";

const ProductCard = ({ product }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const intervalRef = useRef(null);

  const startSlideshow = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % product.image.length);
    }, 800);
  };

  const stopSlideshow = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCurrentImg(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex-shrink-0 w-44 sm:w-52 md:w-64 lg:w-72 p-2 sm:p-3 flex flex-col items-center">
      {/* Card (Image Slideshow) */}
      <div
        className="bg-white relative z-10 w-full h-48 sm:h-56 md:h-64 lg:h-72"
        onMouseEnter={startSlideshow}
        onMouseLeave={stopSlideshow}
      >
        <img
          src={product.image[currentImg]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text below card */}
      <div className="flex justify-between w-full mt-3 text-xs sm:text-sm md:text-base px-1">
        <h3 className="font-medium truncate">{product.name}</h3>
        <p className="text-gray-500">{product.status}</p>
      </div>
    </div>
  );
};

const ProductCards = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 z-10">
      <div className="p-5 md:p-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 justify-items-center">
          {shopProduct.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
