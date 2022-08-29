import React from "react";
import Image from "next/image";

function OurTeamCard({ image, as, name }) {
  return (
    <div
      className="shadow-xl shadow-gray-400 hover:scale-105 
    transition-all cursor-pointer duration-300 ease-linear  w-fit  
     capitalize pb-5 rounded-lg"
    >
      <div className="w-72 hover:bg-main borderRadiusTopHover">
        <Image
          src={image}
          height={45}
          width={60}
          alt="Loading ..."
          layout="responsive"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={image}
          className="borderRadiusTop hover:opacity-25 "
        />
      </div>
      <div className=" px-4  flex flex-col items-center justify-center h-20   ">
        <div className="Poppins text-gray-700 text-[18px]">{name}</div>
        <div className="text-gray-400 text-[14px]">{as}</div>
      </div>
    </div>
  );
}

export default OurTeamCard;
