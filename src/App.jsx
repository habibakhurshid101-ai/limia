import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Araw from "./components/Araw";
import { ParallaxProvider } from "react-scroll-parallax";
import Collection from "./components/Collection";
import Inspired from "./components/Inspired";
import Shop from "./components/Shop";
import ProductCards from "./components/ProductCards";
import Foundation from "./components/Foundation";
import OurCircle from "./components/OurCircle";

const App = () => {
  return (
    <ParallaxProvider>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 flex flex-col z-10">
          <Nav />
          <Hero />
        </div>
      </div>
      <Araw />
      <Collection />
      <Inspired />
      <Shop />
      <ProductCards />
      <Foundation />
      <OurCircle />
    </ParallaxProvider>
  );
};

export default App;
