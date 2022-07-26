import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import Image from "next/image";

function PopularCourses({ card }) {
  const color = (category) => {
    switch (category) {
      case "programming":
        return "text-blue-500";
      case "account & finance":
        return "text-green-600";
      case "Basic Computer":
        return "text-[#a0047d]";
      case "Graphic Designing":
        return "text-orange-500";
      case "default":
        return "text-black";
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-between items-center px-4 md:px-8 lg:px-20 xl:px-24">
        <div className="bg-main rounded-full mt-10 p-2">
          <GiGraduateCap className="w-7 h-7 text-white" />
        </div>
        <div className="text-2xl my-2 capitalize Poppins font-bold">
          our popular courses
        </div>
        <div className="capitalize Poppins bg-gray-100 font-semibold px-4 py-1.5 mt-2  rounded-full text-[10px]  text-gray-700">
          explore more courses
        </div>
        <div className="grid grid-cols-1 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4 gap-5 w-full">
          {card.map((val, i) => {
            return (
              <div
                key={i}
                className="shadow-sm h-64 xs:h-84 w-full overflow-hidden rounded-md shadow-gray-400 flex flex-col justify-centre  cursor-pointer"
              >
                <div className="h-4/6 w-full relative">
                  <Image
                    src={val.img}
                    alt={"images"}
                    placeholder="blur"
                    blurDataURL={val.img}
                    objectFit="cover"
                    layout="fill"
                    className=" "
                  />
                </div>
                <div className="flex h-2/6 items-center">
                  <div className="px-2 Poppins capitalize h-max">
                    <div
                      className={`py-1 xs:py-2 ${color(
                        val.category_name
                      )} text-[9px] font-semibold`}
                    >
                      {val.category_name}
                    </div>
                    <div className="font-semibold w-full h-max line-clamp-2 text-xs ">
                      {val.course_name}
                    </div>
                    <div className="py-1 xs:py-2">
                      <span className="text-gray-500 text-[9px] ">
                        Duration :
                      </span>
                      <span className="text-[9px] mx-1">
                        {val.duration_type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PopularCourses;
