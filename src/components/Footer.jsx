import React from "react";
import { motion } from "framer-motion";
import { links } from "../constant";

const Footer = () => {
  return (
    <div className="relative z-10">
      <div className="bg-white absolute inset-0 w-full h-full"></div>
      <div className="relative p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Left side */}
        <div className="text-center md:text-left md:w-1/2">
          <div className="font-text text-neutral-500 text-base sm:text-lg md:text-xl">
            <p className="text-shadow-lg">Wanna be first and join Limnia?</p>
            <p className="text-shadow-lg">Follow our socials:</p>
          </div>

          <ul className="text-neutral-500 lg:mt-6 text-shadow-lg space-y-2">
            {["Facebook", "Instagram", "Pinterest"].map((social, i) => (
              <li key={i}>
                <motion.a
                  href="#"
                  className="relative inline-block"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {social}
                  <motion.span
                    className="absolute right-0 bottom-0 h-[2px] bg-neutral-500"
                    variants={{
                      rest: { width: 0 },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side */}
        <div className="text-center md:text-right text-sm text-shadow-lg text-neutral-500">
          <ul className="text-center md:text-start mb-4 space-y-2">
            {links.map((link, i) => (
              <li key={i}>
                <motion.a
                  href="#"
                  className="relative inline-block"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {link}
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] bg-neutral-500"
                    variants={{
                      rest: { width: 0 },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.a>
              </li>
            ))}
          </ul>

          <div className="text-start text-sm sm:text-base md:text-lg font-text mt-4 md:mt-6">
            <p>Renewable jewelry</p>
            <p>inspired by you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
