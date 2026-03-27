import React from "react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Steps from "../components/Steps/Steps";
import Pricing from "../components/Pricing/Pricing";
import Footer from "../components/Footer/Footer";
import { globalStyle } from "../global.style";

const Home = () => {
  return (
    <div style={globalStyle.body}>
      <Hero />
      <Features />
      <Steps />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
