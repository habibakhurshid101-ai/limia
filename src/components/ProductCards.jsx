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
    <div className="flex flex-col items-center">
      {/* Card (Only Image) */}
      <div
        className="bg-white relative z-10 w-[300px] h-[320px] mx-auto"
        onMouseEnter={startSlideshow}
        onMouseLeave={stopSlideshow}
      >
        <img
          src={product.image[currentImg]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text outside card */}
      <div className="flex justify-between items-center gap-4 w-[300px] mt-2">
        <h3 className="font-medium text-sm truncate">{product.name}</h3>
        <p className="text-xs text-gray-500">{product.status}</p>
      </div>
    </div>
  );
};

const ProductCards = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 z-10">
      <div className="p-5 md:p-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 justify-items-center">
          {shopProduct.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
