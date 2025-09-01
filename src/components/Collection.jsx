import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Collection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gray-100 z-10 relative overflow-hidden"
    >
      <motion.div style={{ y }} className="w-full h-full overflow-hidden">
        <motion.img
          src="/14.jpg"
          alt="Main"
          className="w-full h-full object-cover"
          style={{ scale }}
          transition={{ duration: 2, ease: "easeOut" }} 
        />
      </motion.div>

      {/* Right Content */}
      <div className="flex flex-col justify-center px-10 md:px-20 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-2xl md:text-3xl font-light leading-relaxed text-neutral-400 font-text w-1/2"
        >
          This collection makes a case for bringing the illumination wherever
        </motion.h2>

        <motion.img
          src="/15.jpg"
          alt="Small"
          className="w-48 h-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-neutral-400 leading-relaxed font-text text-2xl md:text-3xl font-light w-1/2 relative ml-20 md:ml-30 -mt-15"
        >
          <div className="" > You are. <br />Araw in Filipino means "day" and
          we hope that it reminds{" "}</div>
          <div className="mt-10 md:mt-20 text-sm ">
            you to step into your own light, reclaim moments for yourself as the
            seasons change.
          </div>
        </motion.p>
      </div>
    </div>
  );
};

export default Collection;
