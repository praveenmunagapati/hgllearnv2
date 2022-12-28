import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Icons from "../../components/Navigation/Navitem/iconitem";
import teacher from "../../public/teacher.png";
import Image from "next/image";

function Home() {
  return (
    <>
      <div
        className="flex flex-col lg:flex-row xl:flex-row xxl:flex-row
          w-full justify-center items-center pb-20 pt-10
        md:px-8 lg:px-20 xl:px-24 xxl:px-32 px-4 bg-[#fafafa]"
      >
        <div className="h-max lg:w-3/6 xl:w-3/6 xxl:w-3/6 w-full ">
          <div className="flex mb-3">
            {Icons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="p-1 rounded-full bg-transparent flex justify-center items-center border border-[#A0047D] mr-2"
                >
                  <span className="text-[#A0047D] cursor-pointer text-base xl:text-lg xxl:text-xl">
                    {icon.icon}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="font-bold xl:text-xl xxl:text-2xl text-[#A0047D] mb-1">
            <h1>IT Training Institute in Nepal</h1>
          </div>
          <div className="text-xs xl:text-sm xxl:text-base text-gray-700 pr-6 text-justify">
            <p>
              HUB IT is recognized as one of Nepal’s best global skill
              development and IT training centers. The journey of HUB IT started
              in 2017 with a big dream to bring applied education to the mass
              population at an affordable cost. The main purpose of HUB IT is to
              facilitate, with the best IT-related skills.
            </p>
          </div>
          <div className="flex mt-6">
            <button
              className={
                "border-[1.5px] border-[#A0047D] rounded-full mr-6 px-2 py-[5px] text-sm xl:text-base xxl:text-lg text-main hover:scale-105 transition-all ease-in-out duration-150"
              }
            >
              Explore More...
            </button>
            <div className="flex h-max items-center cursor-pointer hover:scale-105 transition-all ease-in-out duration-150">
              <AiFillPlayCircle className="text-[#a0047d] text-4xl xl:text-4xl xxl:text-5xl" />
              <span className="xl:text-lg xxl:text-xl text-[#a0047d] ml-2">
                Watch Now
              </span>
            </div>
          </div>
        </div>
        <div className="h-full w-[70%] mt-8  md:mt-4 lg:mt-0 xl:mt-0 mx-auto lg:w-3/6 xl:w-3/6 xxl:w-3/6">
          <div className="relative">
            <div className="">
              <Image
                src={teacher}
                alt={"Loading"}
                layout="responsive"
                width={120}
                height={100}
                placeholder="blur"
                blurDataURL={teacher}
              />
            </div>
            <div className="bg-white shadow-[0px_1px_10px_1px_black] h-max py-3 absolute top-[50%] left-[22%]  w-[200px] ">
              <div className="h-full w-full  relative">
                <div className=" h-full w-full flex flex-col justify-center px-4 ml-3">
                  <div className="text-[8px] font-bold text-[#a0047d] Poppins">
                    Featured Course
                  </div>
                  <div className="text-[10px] font-semibold text-black Poppins">
                    Become a Full Stack Developer with MERN Stack
                  </div>
                </div>
                <div className="absolute h-8 w-8 rounded-full top-[calc(50%-16px)] left-[-16px] bg-yellow-600 ">
                  {/* <Image
                    src={logo}
                    alt={"logo"}
                    layout="fill"
                    priority
                    className="rounded-full"
                  ></Image> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
