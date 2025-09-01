import React from "react";

const Hero = () => {
  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-1.jpg')" }}
    >
      {/* Optional overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex items-center justify-center h-screen px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-text text-center">
          Araw
        </h1>
      </div>
    </div>
  );
};

export default Hero;
