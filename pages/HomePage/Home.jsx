import React from "react";
import { BsFillPlayCircleFill, BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import Image from "next/image";

function Home({ image }) {
  const dots = [
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
  ];
  return (
    <div className="bg-gray-100  px-8 lg:px-20 xl:px-20 xxl:px-20 lg:py-20 xl:py-24 xxl:py-28 ">
      <div className="pt-16">
        <div className="flex gap-3 items-center mb-3">
          <div className="text-main border p-1 text-xl border-main rounded-full">
            <BsFacebook />
          </div>
          <div className="text-main border p-1 text-xl border-main rounded-full">
            <IoLogoWhatsapp />
          </div>
          <div className="text-main border p-1 text-xl border-main rounded-full">
            <AiFillTwitterCircle />
          </div>
          <div className="text-main border p-1 text-xl border-main rounded-full">
            <AiFillInstagram />
          </div>
        </div>
        <div className="Poppins text-main font-semibold text-2xl lg:text-2xl xl:text-4xl xxl:text-4xl capitalize">
          best training institute in nepal
        </div>
      </div>
      <div className="grid  lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2  xl:gap-24 xxl:gap-32 3xl:gap-72 4xl:gap-80 ">
        <div
          className=" row-start-2 lg:row-start-1 xl:row-start-1 xxl:row-start-1   py-10
       lg:mt-0 lg:py-5 xl:py-5 xl:mt-0 xxl:mt-0 xxl:py-5"
        >
          <div className="Poppins text-base pb-4  text-gray-600 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            reprehenderit maxime aut, deserunt, dignissimos ducimus expedita
            harum saepe, corrupti ullam in quia iusto neque odio assumenda
            exercitationem ad quidem magnam.
          </div>
          <div className="w-full  flex gap-8 items-center pt-3 sm:pt-0">
            <div
              className="border  hover:scale-105 transition-all
               ease-in-out duration-300 border-main w-fit px-5 py-2
                rounded-3xl text-main cursor-pointer Poppins font-medium
                 capitalize"
            >
              explore more ...
            </div>
            <div className="flex gap-3 text-main items-center">
              <div className="text-4xl animate-pulse cursor-pointer">
                <BsFillPlayCircleFill />
              </div>
              <div className="font-normal  text-lg ">Watch now</div>
            </div>
          </div>
        </div>
        <div
          className=" h-80 xs:h-98 sm:h-100 md:h-104 lg:h-96 xl:h-full xxl:h-full
         overflow-hidden  lg:overflow-x-visible lg:overflow-y-clip  xl:overflow-visible xxl:overflow-visible"
        >
          <div
            className=" flex-col items-center  w-96 sm:w-full
           md:w-full  lg:w-full  xl:w-full  xxl:w-full       relative"
          >
            <div
              className="bg-main   flex  ml-16 xs:ml-28 sm:ml-32 md:ml-44 
              lg:ml-40 relative z-50  xl:ml-44  xxl:ml-48
            mt-16  md:mt-32 xl:-mt-14 borderRadiusHome "
            ></div>
            <div className="flex flex-row  ">
              <div
                className=" w-96 xs:w-104 sm:w-11/12 md:w-11/12 lg:w-11/12 
                xl:w-11/12 xxl:w-11/12  -left-4  z-50 absolute -top-20 
                sm:left-8 md:left-12 md:-top-36  lg:-top-30 lg:left-24 
               xxl:left-20 xl:left-24 xl:-top-20 xxl:-top-64
                3xl:-top-36  4xl:-top-52 "
              >
                {" "}
                <Image
                  src={image}
                  alt={image}
                  placeholder="blur"
                  blurDataURL={image}
                  height={50}
                  width={50}
                  layout="responsive"
                  className=""
                />{" "}
              </div>
              <div
                className="grid absolute  gap-1 left-0 xs:left-10 xs:top-56 md:left-32 
                text-gray-400 top-28  sm:top-36 sm:left-14 lg:top-32 xl:ml-24  xxl:ml-32
                 lg:left-24 md:top-40
               md:ml-2  xl:top-32  xxl:top-36 
                grid-cols-4"
              >
                {dots.map((val, i) => {
                  return (
                    <div key={i} className="text-xl">
                      {val.dot}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
