import React from "react";
import Image from "next/image";
import {FaUser, FaCommentAlt} from "react-icons/fa"
import image from "../../../../public/images/Rectangle 34.jpg"

function PopularCoursesCard({ image, CourseTittle, CourseCategory, Description, usercount, commentcount }) {
  return (
    <div
      className=" 
    transition-all cursor-pointer duration-300 ease-linear  w-fit  
      pb-5 rounded-lg"
    >
      <div className="w-72 ">
        {
          image && <Image
          src={image}
          height={65}
          width={60}
          alt="Loading ..."
          layout="responsive"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={image}
          className="borderRadiusTop  "
        />
        }
      </div>
      <div className=" px-4  flex flex-col items-center justify-center my-6  ">
        <div className="Poppins capitalize font-semibold  text-gray-800 text-[16px]">
          {CourseTittle}
        </div>
        <div className="text-gray-600 font-medium text-[12px]">
          Category : {CourseCategory}
          <p>{Description}</p>
        </div>
        <div className="text-gray-500 font-regular capitalize text-[12px] flex">
          <div className="flex gap-1">
            <FaUser/><p>{usercount}</p>
          </div>
          <div className="flex gap-1">
            <FaCommentAlt/><p>{commentcount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopularCoursesCard;