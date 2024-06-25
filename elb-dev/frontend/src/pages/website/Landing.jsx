import React from "react";
import { Link } from "react-router-dom";
import { WbHeroSection, FeaturedProducts, TopSellers} from "../../components";
import FirstBanner from "../../components/website/landing/FirstBanner";


const Landing = () => {
  return (
    <>
      <WbHeroSection />
      <FeaturedProducts />
      <FirstBanner/>  
      <TopSellers />
    </>
  );
};

export default Landing;
