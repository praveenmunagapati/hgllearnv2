import React from "react";
import { SiMicrosoft } from "react-icons/si";
const BottomSection = () => {
  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  xxl:grid-cols-4  gap-5">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div
              className="rounded-lg overflow-hidden shadow-lg group p-2 "
              key={index}
            >
              <img
                className="w-full group-hover:scale-105 transition-all duration-300"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXzIgxiHN9Ktcb5hqKCr_ezUySvhoawPrUQ&usqp=CAU"
                alt="Mountain"
                height={250}
                width={250}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Placement At Hubit Pvt . Ltd
                </div>
              </div>
              <hr />
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block px-1 py-1 text-sm font-semibold mr-2 mb-2">
                  Roshika Chettri
                </span>
                <span className=" px-1 py-1 text-sm font-semibold text-[#a0047d]  mb-2">
                  Web Design
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-4 sm:pb-0 md:pb-3 lg:pb-12 xl:m-20 md:px-8 lg:px-20 xl:px-24 xxl:px-32 mt-20 flex flex-col items-center justify-center">
        <div className="w-max text-main text-lg xl:text-xl xxl:text-2xl capitalize Poppins font-bold">
          Our Placement Partners
        </div>
        <div className="w-full flex flex-row flex-wrap gap-10 justify-center my-6 pb-20">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <div
                key={item}
                className="flex flex-row h-max items-center py-1 px-2 border border-gray-500 shadow-md "
              >
                <span className="text-base xl:text-lg xxl:text-xl">
                  <SiMicrosoft />
                </span>
                <span className="ml-2 text-xs xl:text-sm xxl:text-base">
                  Microsoft
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BottomSection;
