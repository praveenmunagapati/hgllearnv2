import React from "react";
import Image from "next/image";

function AchivementsCard({ image, name, from, date }) {
  return (
    <div
      className=" 
    transition-all cursor-pointer duration-300 ease-linear  w-fit  
      pb-5 rounded-lg"
    >
      <div className="w-72 ">
        <Image
          src={image}
          height={45}
          width={60}
          alt="Loading ..."
          layout="responsive"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={image}
          className="borderRadiusTop  "
        />
      </div>
      <div className=" px-4  flex flex-col items-center justify-center my-6  ">
        <div className="Poppins capitalize font-bold  text-gray-800 text-[18px]">
          {name}
        </div>
        <div className="text-gray-600 font-semibold text-[14px]">
          From: {from}
        </div>
        <div className="text-gray-500 font-medium capitalize text-[12px]">
          {date}
        </div>
      </div>
    </div>
  );
}

export default AchivementsCard;
