import Image from "next/image";
import React from "react";
// import image from "../../../Resources/images/hero.jpg";
import MainImage from "./mainimage";
const Leftbanner = ({ image, Des }) => {
  console.log(image);
  return (
    <>
      {/* <MainImage /> */}
      <div className=" py-4">
        <div className="shadow-md h-108 w-full  relative">
          <Image
            src={image}
            alt="loading..."
            layout="fill"
            blurDataURL={image}
            placeholder="blur"
            objectFit="contain"
            objectPosition={"top"}
            quality={100}
          />
        </div>
        <p className="text-base pt-5 px-3 Poppins font-[400] text-justify text-gray-500">
          {Des}
        </p>
      </div>
    </>
  );
};

export default Leftbanner;
