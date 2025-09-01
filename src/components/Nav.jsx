import React, { useState } from "react";
import { GrFormSearch } from "react-icons/gr";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" w-full z-50 bg-transparent">
      <div   className="nav-background w-full bg-cover bg-center">
        <div className="flex justify-between items-center px-8 py-5">
          {/* Logo */}
          <div>
            <img src="/logo.png" alt="logo" className="w-28 h-8" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex">
            <ul className="flex space-x-6 font-medium text-white">
              <li>
                <a href="/shop" className="hover:text-gray-200">
                  Shop
                </a>
              </li>
              <li>
                <a href="/our-story" className="hover:text-gray-200">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/the-loop" className="hover:text-gray-200">
                  The Loop
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side (Desktop) */}
          <div className="hidden md:flex">
            <ul className="flex space-x-6 items-center text-white">
              <li className="text-xl">
                <a href="/search" aria-label="Search">
                  <GrFormSearch />
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-gray-200">
                  Cart 0
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-gray-200">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 text-white md:hidden">
            <ul className="flex flex-col space-y-4 p-6 text-center">
              <li>
                <a href="/shop" className="hover:text-gray-200">
                  Shop
                </a>
              </li>
              <li>
                <a href="/our-story" className="hover:text-gray-200">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/the-loop" className="hover:text-gray-200">
                  The Loop
                </a>
              </li>
              <li className="flex justify-center items-center space-x-2">
                <a href="/search" className="flex items-center space-x-2">
                  <GrFormSearch /> <span>Search</span>
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-gray-200">
                  Cart 0
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-gray-200">
                  Login
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
