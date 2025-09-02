import React from "react";
import Nav from "./components/Nav";
import Home from "./components/shop/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
  return (
    <ParallaxProvider>
      <Nav />

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>

      <Footer />
    </ParallaxProvider>
  );
};

export default App;
