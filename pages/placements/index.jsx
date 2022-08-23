import Image from "next/image";
import React from "react";
import BottomSection from "../../components/PageComponent/Placement/BottomSection";
import HeroSection from "../../components/PageComponent/Placement/HeroSection";
import Partners from "../../components/PageComponent/Placement/Partners";
import Layout from "../../HOC/Layout/Layout";
const placement = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <BottomSection />
        <Partners />
      </Layout>
    </>
  );
};

export default placement;
