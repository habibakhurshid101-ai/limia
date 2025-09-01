import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Shop = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 z-10 relative">
    <div className="w-full flex flex-col items-start px-4 sm:px-6 py-3 sm:py-4 md:py-10 lg:py-20">
      {/* Dropdown Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-base sm:text-lg font-medium text-gray-800 focus:outline-none"
      >
        <span className="flex items-center gap-1">
          Shop by
          <RiArrowDropDownLine
            className={`text-xl sm:text-2xl transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </span>
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="mt-3 sm:mt-6 lg:mt-10 text-gray-600 text-sm sm:text-base space-y-2 w-full">
          <p className="font-semibold">by-type</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-2">
            <a href="#" className="hover:text-orange-500">all-types</a>
            <a href="#" className="hover:text-orange-500">Danglers</a>
            <a href="#" className="hover:text-orange-500">Earrings</a>
            <a href="#" className="hover:text-orange-500">Necklace</a>
            <a href="#" className="hover:text-orange-500">Rings</a>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Shop;
