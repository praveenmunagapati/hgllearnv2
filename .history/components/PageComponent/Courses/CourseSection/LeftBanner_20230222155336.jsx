import Image from "next/image";
import React from "react";
// import image from "../../../Resources/images/hero.jpg";
// import MainImage from "./mainimage";
const Leftbanner = ({ image, description }) => {
  console.log(image);
  return (
    <>
      {/* <MainImage /> */}
      <div className=" py-4">
        <div className="shadow-md  h-96 w-full mx-auto  relative">
          {image ? (
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
          ) : (
            ""
          )}
        </div>
        <p className="text-[16px] mt-4 py-6 px-4 bg-gray-100 font-[300] text-justify text-gray-500">
          {description}
        </p>
      </div>
    </>
  );
};

export default Leftbanner;
