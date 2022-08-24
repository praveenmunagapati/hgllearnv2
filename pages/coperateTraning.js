import React from "react";
import MidSection from "../components/PageComponent/CorporatePage/MidSection";
import TopSection from "../components/PageComponent/CorporatePage/TopSection";
import Layout from "../HOC/Layout/Layout";
import Head from "next/head"
const coperateTraning = () => {
  return (
    <>
    <Head><title>Corporate Training - Hub IT</title></Head>
      <Layout>
        <TopSection />
        <MidSection />
      </Layout>
    </>
  );
};

export default coperateTraning;
