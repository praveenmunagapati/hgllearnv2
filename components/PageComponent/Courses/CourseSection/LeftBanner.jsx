import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// import image from "../../../Resources/images/hero.jpg";
// import MainImage from "./mainimage";

const Leftbanner = ({ image, coursetitle, description, id }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: `/admissionForm/${id}`,
    });
  };
  return (
    <>
      <div className="py-4 ">
        {/* <MainImage /> */}
        <div className="flex gap-5">
          <div className=" border rounded-lg h-98 w-full mx-auto  relative">
            <Image src={`${image}`} alt="image" layout="fill" className="" />
            {/* {image ? (
              <div
                className="h-full "
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  // width: "100px",
                }}
                alt="loading..."
                quality={100}
              />
            ) : (
              ""
            )} */}
          </div>
          <div>
            <h1 className="text-xl poppins">{coursetitle}</h1>
            <p className="text-sm py-6 px-4 mt-0 bg-gray-100 font-[300] text-justify text-gray-700 w-84 h-80 overflow-y-auto">
              {description}
            </p>

            <button
              onClick={handleClick}
              className="p-3 border rounded-lg text-center text-white cursor-pointer bg-main mt-7"
            >
              Enroll now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftbanner;
