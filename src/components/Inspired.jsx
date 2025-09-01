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
        <div className="bg-purple-200 p-6 sm:p-10 md:p-12 flex items-center md:items-end">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg tracking-widest text-neutral-500 leading-relaxed">
            Perpetually inspired by illuminating skies, this five-piece collection
            grounds celestial light into earthly elements. Solar rays of gold,
            lustrous akoya pearls, and lunar abalone and mother-of-pearl discs
            summon the spirit of freedom and hope that we all crave right now.
          </p>
        </div>

        {/* Right side with background */}
        <div className="relative h-96 sm:h-[500px] md:h-[700px] w-full">
          <div className="h-full w-full bg-[url('/16.jpg')] bg-cover bg-center" />
        </div>
      </div>

      {/* Images centered across both sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <img
            src="/40.webp"
            alt="img"
            className="w-36 sm:w-48 md:w-60 h-44 sm:h-56 md:h-72 object-cover rounded-md"
          />
        </div>
        <motion.img
          src="/38.webp"
          alt="img"
          className="w-36 sm:w-48 md:w-60 h-44 sm:h-56 md:h-72 object-cover rounded-md pointer-events-auto"
          style={{ y }}
        />
      </div>
    </section>
  );
};

export default Inspired;
