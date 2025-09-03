import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Inspired = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "20vh"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white z-10 overflow-hidden"
    >
      {/* Left + Right side */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side */}
        <div className="bg-purple-200 p-6 sm:p-10 md:p-12 flex flex-col items-center md:items-end md:justify-end">
          {/* Show image ABOVE text on small screens */}
          <div className="block md:hidden mb-4">
            <img
              src="/40.webp"
              alt="img"
              className="w-32 h-40 sm:w-40 sm:h-52 object-cover rounded-md shadow-md"
            />
          </div>

       <p className="text-start text-xs sm:text-sm md:text-base lg:text-lg tracking-widest text-neutral-600 leading-relaxed">
  Perpetually inspired by illuminating skies, this five-piece collection
  grounds celestial light into earthly elements. Solar rays of gold,
  lustrous akoya pearls, and lunar abalone and mother-of-pearl discs
  summon the spirit of freedom and hope that we all crave right now.
</p>

        </div>

        {/* Right side with background */}
        <div className="relative h-64 sm:h-80 md:h-[600px] lg:h-[700px] w-full">
          <div className="h-full w-full bg-[url('/16.jpg')] bg-cover bg-center" />
        </div>
      </div>

      {/* Floating Images (only visible on md+ screens) */}
      <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center gap-6 z-20">
        <img
          src="/40.webp"
          alt="img"
          className="w-40 md:w-52 lg:w-60 h-52 md:h-64 lg:h-72 object-cover "
        />
        <motion.img
          src="/38.webp"
          alt="img"
          className="w-40 md:w-52 lg:w-60 h-52 md:h-64 lg:h-72 object-cover "
          style={{ y }}
        />
      </div>
    </section>
  );
};

export default Inspired;
