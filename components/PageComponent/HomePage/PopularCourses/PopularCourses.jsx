import React from "react";
import PropTypes from "prop-types";
import { GiGraduateCap } from "react-icons/gi";
import Image from "next/image";
function PopularCourses({ card }) {
  return (
    <div>
      <div className="flex flex-col justify-between items-center ">
        <div className="bg-main rounded-full my-5 p-2">
          <GiGraduateCap className="w-8 h-8 text-white" />
        </div>
        <div className="text-3xl capitalize Poppins font-bold">
          our popular courses
        </div>
        <div className="capitalize Poppins bg-gray-100 font-semibold px-4 py-1.5 mt-8  rounded-full text-xs  text-gray-700  font-semibols">
          explore more courses
        </div>
        <div className="grid grid-cols-1 my-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-4 gap-5  ">
          {card.map((val, i) => {
            return (
              <div
                key={i}
                className="shadow-xl w-72 overflow-hidden rounded-md shadow-gray-400 hover:scale-105 cursor-pointer
                 duration-300 ease-in-out  transition-all 
                "
              >
                <div className=" w-72 ">
                  {" "}
                  <Image
                    src={val.img}
                    alt={val.img}
                    placeholder="blur"
                    blurDataURL={val.img}
                    height={70}
                    width={100}
                    objectFit="cover"
                    layout="responsive"
                    className=" "
                  />{" "}
                </div>
                <div className="px-5 Poppins capitalize">
                  <div className=" py-4 text-main text-sm  ">
                    {val.category_name}
                  </div>
                  <div className="text- font-bold w-9/12   h-12 line-clamp-2 ">
                    {val.course_name}
                  </div>
                  <div className="py-5">
                    <span className="text-gray-400 text-sm ">Duration :</span>
                    <span className="text-xs mx-1">{val.duration_type}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  PopularCourses.prototype = {
    images: prototype.array,
  };
}

export default PopularCourses;
