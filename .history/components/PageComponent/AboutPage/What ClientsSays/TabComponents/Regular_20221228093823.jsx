import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

function Regular({ clientDetails, StartValue, EndValue, prev, next }) {
  return (
    <div>
      <div className="flex justify-center  items-center px-8">
        <div
          className=" bg-gray-100 p-0.5 rounded-full text-main cursor-pointer"
          onClick={() => prev(clientDetails)}
        >
          <MdKeyboardArrowLeft className="w-6 h-6" />
        </div>
        <div
          className="grid grid-cols-1 w-11/12  gap-4 md:grid-cols-2
         lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2    pt-12 "
        >
          {clientDetails?.slice(StartValue, EndValue)?.map((val, i) => {
            return (
              <div key={i} className="flex w-full relative">
                <div
                  className=" w-20 absolute left-8 top-5 border-4
                 border-white rounded-full "
                >
                  <Image
                    src={val.image}
                    height={70}
                    width={70}
                    alt="Loading ..."
                    placceholder="blur"
                    blurDataURL={val.image}
                    layout="responsive"
                    className="rounded-full"
                  />
                </div>
                {/* testing lai height fit rakhya chu hai */}
                <div className="bg-gray-200  h-32 w-9/12 mx-auto rounded-2xl px-16 py-3">
                  <div className="text-main Poppins font-medium capitalize">
                    {val.name}
                  </div>
                  <div className="text-xs my-.5 font-medium capitalize">
                    {val.title}
                  </div>
                  <div className="text-sm text-gray-600 overflow-hidden ">
                    {val.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className=" bg-gray-100 p-0.5 rounded-full text-main cursor-pointer"
          onClick={() => next(clientDetails)}
        >
          <MdKeyboardArrowRight className="w-6 h-6" />
        </div>
      </div>
      ;
    </div>
  );
}

export default Regular;
