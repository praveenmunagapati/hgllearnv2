import Image from "next/image";
import React from "react";
import MidSection from "../../components/PageComponent/Placement/MidSection";
import HeroSection from "../../components/PageComponent/Placement/HeroSection";
import Partners from "../../components/PageComponent/Placement/Partners";
import Layout from "../../HOC/Layout/Layout";
import Head from "next/head";
const placement = () => {
  return (
    <>
      <Head>
        <title>Placement-HGL Learn</title>
      </Head>
      <Layout>
        <HeroSection />
        <MidSection />
        <Partners />
      </Layout>
    </>
  );
};

export default placement;
