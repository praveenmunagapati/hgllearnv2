import React from "react";
import Head from "next/head"
const MidSectionNav = () => {
  return (
    <>
      <Head>
        <title>Notice - Hub It</title>
      </Head>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900 cursor-pointer">All</a>
            <a class="mr-5 hover:text-gray-900 cursor-pointer">General</a>
            <a class="mr-5 hover:text-gray-900 cursor-pointer">
              Administrative
            </a>
            <a class="mr-5 hover:text-gray-900 cursor-pointer">Classes</a>
            <a class="mr-5 hover:text-gray-900 cursor-pointer">Places</a>
            <a class="mr-5 hover:text-gray-900 cursor-pointer">Training</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MidSectionNav;
