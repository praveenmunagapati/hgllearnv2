import React from "react";
import MidSectionNav from "./MidSectionNav";

const MidSection = () => {
  return (
    <>
      <MidSectionNav />
      <div classNameName="flex flex-col gap-2 items-center justify-center">
        {[1, 2, 3, 4].map((item, i) => {
          return (
            <div
              className="bg-[#DCDCDC] rounded-lg flex items-center mx-auto border-b-2 pb-10  border-gray-300 w-[80vw]   xl:w-[60vw] xxl:w-[60vw] lg:w-[80vw]"
              key={i}
            >
              <div className=" sm:mr-10 inline-flex items-center justify-center   flex-shrink-0">
                <image
                  src="https://wallpaperaccess.com/full/8044061.jpg"
                  alt=""
                  className="ml-10 mt-10 rounded-lg  h-20 w-24"
                />
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MidSection;
