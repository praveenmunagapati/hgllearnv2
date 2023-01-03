import image from "next/image";
import React from "react";
import { BiCalendarWeek } from "react-icons/bi";
import image from "../../../../public/images/Rectangle 34.jpg";
function FeaturedCourses() {
  return (
    <div
      className="md:grid lg:grid xl:grid xxl:grid grid-cols-2 gap-20 m-14
     mx-auto  w-11/12 md:w-10/12 px-3 md:px-8 py-6  bg-[#EEEAEA] bg-opacity-50"
    >
      <div className=" px-3">
        <div className="capitalize Poppins text-main  ">featured course</div>{" "}
        <div className="font-semibold leading-10 Poppins  my-4 text-3xl  capitalize">
          become full stack developer with mern stack
        </div>
        <div className="text-gray-400">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            voluptates eveniet at perspiciatis ea ut, aliquam perferendis
            possimus illum unde vel esse, alias quos consequuntur incidunt
            voluptatem pariatur est modi.
          </p>
        </div>
        <div>
          <button className=" bg-main text-white Poppins  text-sm capitalize  my-5 px-4 py-1.5">
            book now
          </button>
        </div>
      </div>
      <div className="md:flex     lg:flex xl:flex xxl:flex gap-4 ">
        <div className=" w-86 lg:w-96 xl:w-96 xxl:w-98  mt-5 mx-auto md:mx-0 md:mt-10">
          <image
            src={image}
            height={65}
            width={100}
            layout="responsive"
            objectFit="cover"
            // objectPosition="center"
            placeholder="blur"
            blurDataURL={image}
            alt="Loading ..."
          />
        </div>
        <div>
          <div
            className="flex mt-4 gap-1 lg:w-40 xl:w-40 xxl:w-40   px-4 md:px-0
           lg:px-0 xl:px-0 xxl:px-0 justify-start md:justify-center lg:justify-center
            xl:justify-center xxl:justify-center  mx-auto md:w-fit bg-main h-fit text-white py-4"
          >
            <div className="mt-1">
              <BiCalendarWeek />
            </div>
            <div className="Poppins ">
              <div>Starts in</div>
              <div>20feb,2022</div>
            </div>
          </div>
          <div
            className="flex mt-4 gap-1  md:w-fit mx-auto lg:w-40 xl:w-40 xxl:w-40
            bg-yellow-400 h-fit  p-4"
          >
            <div className="mt-1">
              <BiCalendarWeek />
            </div>
            <div className="Poppins ">
              <div>Course price</div>
              <div>Rs. 20000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourses;
