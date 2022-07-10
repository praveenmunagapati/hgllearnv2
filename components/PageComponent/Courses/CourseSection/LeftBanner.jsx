import Image from "next/image";
import React from "react";
import image from "../../../Resources/images/hero.jpg";
const Leftbanner = () => {
  return (
    <div className=" py-4">
      <div className="shadow-md  w-full">
        <Image
          src={image}
          alt="loading..."
          height={30}
          width={50}
          layout="responsive"
          blurDataURL={image}
          placeholder="blur"
          //   objectFit="cover"
          quality={100}
        />
      </div>
      <p className="text-lg pt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default Leftbanner;
