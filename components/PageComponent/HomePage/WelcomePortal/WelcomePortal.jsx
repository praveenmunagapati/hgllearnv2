import React from "react";
import PropTypes from "prop-types";

import Image from "next/image";
function WelcomePortal({ images }) {
  return (
    <div>
      <div className="bg-gray-100 py-14 sm:py-10 xl:py-28 xxl:py-28">
        <div
          className="Poppins text-left xl:text-left xxl:text-left capitalize
         py-0 xl:py-3 xxl:py-3 text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 
         xxl:text-6xl w-11/12  mx-auto  font-bold   "
        >
          welcome to our portal
        </div>
        <div
          className=" grid   lg:grid-cols-2 xl:grid-cols-2
          xxl:grid-cols-3  lg:gap-10 xl:gap-5 w-11/12 mx-auto xl:w-11/12 xxl:w-11/12 "
        >
          <div
            className="row-start-2 xl:col-span-1 xxl:col-span-2 lg:row-start-1 xl:row-start-1
           xxl:row-start-1 "
          >
            <div
              className="text-base xl:text-lg xxl:text-lg text-gray-600 lg:py-4
             xl:py-5 xxl:py-5  sm:w-full sm:py-5 lg:w-full  xl:w-11/12 xxl:w-10/12 mx-auto
              xxl:mx-0 xl:mx-0 text-justify"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              quia rerum natus voluptate voluptates odit ducimus consectetur
              voluptatem obcaecati, eligendi itaque quasi delectus at officiis
              quas porro unde aperiam ipsa. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolores quia rerum natus voluptate
              voluptates odit ducimus consectetur voluptatem obcaecati, eligendi
              itaque quasi delectus at officiis quas porro unde aperiam ipsa.
            </div>
            <div className="w-full  pt-5 sm:pt-0">
              <div
                className="border  hover:scale-105 transition-all
               ease-in-out duration-300 border-main w-fit px-5 py-2
                rounded-3xl text-main cursor-pointer Poppins font-medium
                 capitalize"
              >
                learn more
              </div>
            </div>
          </div>
          <div
            className="  w-fit mx-auto sm:flex md:flex lg:flex xl:flex xxl:flex  gap-5 bg-gree-500
           sm:mx-auto md:mx-auto lg:auto xl:justify-end
            xxl:justify-end xl:mx-auto xxl:mx-auto py-5 sm:pt-8 sm:pb-2 xl:py-0 xxl:py-0
             xl:w-11/12 xxl:w-11/12 "
          >
            <div className="  bg-re-500  ">
              <div className="w-72   sm:w-72 lg:w-64 md:w-96 xl:w-80 xxl:w-72">
                <div
                  className="h-72  sm:h-103 cursor-pointer md:h-108 lg:h-94 xl:h-100 xxl:h-98"
                  style={{
                    // width: "200px",
                    // height: "550px",
                    backgroundImage:
                      "linear-gradient(0deg, rgba(190,9,206,0.425973389355743) 20%, rgba(0,0,0,0.00979166666666667) 55%, rgba(0,0,0,0.00129586834733894) 80%, rgba(0,0,0,0.00295973389355743) 100%), url(https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHN2ZyUyMHN0dWRlbnQlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
                    backgroundPosition: " left",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                {/* <Image
                  src={image3}
                  alt={image3}
                  placeholder="blur"
                  blurDataURL={image3}
                  height={70}
                  width={50}
                  objectFit="cover"
                  objectPosition="right"
                  layout="responsive"
                  className=""
                /> */}
              </div>
            </div>
            <div
              className="flex  flex-col gap-7 lg:gap-9 my-8   lg:my-0 sm:my-0 md:my-0 xl:my-0
             xxl:my-0 xl:gap-8 xxl:gap-4 xl:flex-col xxl:flex-col "
            >
              {images.map((val, i) => {
                return (
                  <div
                    key={i}
                    className="bg-gree-500 sm:w-60 hovr:scale-105 transition-all duration-300  cursor-pointer ease-in-out w-72 md:w-64 lg:w-40 xl:w-52
                   xxl:w-52"
                  >
                    <Image
                      src={val.img}
                      alt={val.img}
                      placeholder="blur"
                      blurDataURL={val.img}
                      height={50}
                      width={50}
                      objectFit="cover"
                      layout="responsive"
                      className=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  WelcomePortal.proptypes = {
    images: PropTypes.array,
  };
}

export default WelcomePortal;
