import Image from "next/image";
import React from "react";
import { SiMicrosoft } from "react-icons/si";
import BottomSection from "../../components/PageComponent/Placement/BottomSection";
import HeroSection from "../../components/PageComponent/Placement/HeroSection";
import Layout from "../../HOC/Layout/Layout";
const placement = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <BottomSection />
      </Layout>
    </>
  );
};

export default placement;
