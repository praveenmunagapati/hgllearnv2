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
    <div>
      <div className=" pt-6 px-3 md:p-10 lg:p-20 xl:p-20 xxl:p-20  bg-gray-50 ">
        <div className="">
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
          <div className="Poppins text-main font-semibold text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl xxl:text-4xl capitalize">
            best training institute in nepal
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3  xxl:grid-cols-2">
          <div
            className=" row-start-2 lg:row-start-1 xl:row-start-1 xxl:row-start-1   py-10
col-span-2 lg:mt-0 lg:py-5 xl:py-5 xl:mt-0 xxl:mt-0 xxl:py-5 xxl:col-span-1"
          >
            <div className="Poppins text-xs sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base pb-4  w-full lg:w-8/12 xl:w-8/12 xxl:w-10/12 text-gray-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis reprehenderit maxime aut, deserunt, dignissimos ducimus
              expedita harum saepe, corrupti ullam in quia iusto neque odio
              assumenda exercitationem ad quidem magnam.
            </div>
            <div className="w-full  flex gap-8 items-center pt-3 sm:pt-0">
              <div
                className="border  hover:scale-105 transition-all
               ease-in-out duration-300 border-main w-fit px-5 py-3
               text-sm md:text-base lg:text-base xl:text-base xxl:text-base
                rounded-3xl text-main cursor-pointer Poppins font-medium
                 capitalize"
              >
                explore more ...
              </div>
              <div className="flex gap-3 text-main items-center">
                <div className="text-5xl animate-pulse cursor-pointer">
                  <BsFillPlayCircleFill />
                </div>
                <div className="font-normal  text-sm md:text-base lg:text-lg xl:text-lg xxl:text-lg ">
                  Watch now
                </div>
              </div>
            </div>
          </div>
          <div className="flex     items-center justify-center">
            <div className=" w-full  sm:w-7/12 md:w-9/12 xxl:w-10/12  mt-2  lg:-mt-40 xxl:-mt-40 col-span-1">
              {" "}
              <Image
                src={image}
                alt={image}
                placeholder="blur"
                blurDataURL={image}
                height={100}
                width={100}
                objectFit="cover"
                layout="responsive"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
