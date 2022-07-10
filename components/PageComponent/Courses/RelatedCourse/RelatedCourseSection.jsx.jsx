import React from "react";
import image from "../../../Resources/images/python1.webp";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const RelatedCourseSection = () => {
  const data = [
    {
      image: image,
      title: "Python",
      subTitle: "MERN with Full Stack",
      course: "python",
      category: "beginner",
    },
    {
      image: image,
      title: "Web Design",
      subTitle: "MERN with Full Stack",
      course: "webdesign",
      category: "beginner",
    },
    {
      image: image,
      title: "Web Design",
      subTitle: "MERN with Full Stack",
      course: "webdesign",
      category: "beginner",
    },
    {
      image: image,
      title: "Web Design",
      subTitle: "MERN with Full Stack",
      course: "webdesign",
      category: "beginner",
    },
  ];
  return (
    <div>
      <div className=" my-8">
        <div className="text-xl md:text-3xl font-bold">Related Courses</div>

        <div className="flex justify-between">
          <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:lg:grid-cols-3 xxl:grid-cols-4 gap-3 mt-10 mb-5">
            {data?.map((val, i) => {
              return (
                <div
                  key={i}
                  className="border w-fit border-gray-400 rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <div className="md:w-44 w-48 ">
                    <Image
                      src={image}
                      alt="loading..."
                      height={100}
                      width={100}
                      layout="responsive"
                      blurDataURL={image}
                      placeholder="blur"
                      // objectFit="cover"
                      quality={100}
                      className="borderRadiusTop"
                    />
                  </div>
                  <div className="px-3 py-2">
                    <div className="  text-xl Poppins capitalize text-main">
                      {val.title}
                    </div>
                    <div className=" my-1 text-xs capitalize Poppins ml-0.5">
                      {" "}
                      {val.subTitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex px-5 gap-2">
            <div>
              <FaChevronLeft
                color="white"
                className="w-5 h-5 md:h-6 md:w-6 xxl:h-6 xxl:w-6  p-1.5 flex items-center justify-center  bg-main rounded-full mr-2 hover:cursor-pointer"
              />
            </div>
            <div>
              <FaChevronRight
                color="white"
                className="w-5 h-5 md:h-6 md:w-6 xxl:h-6 xxl:w-6 p-1.5  flex items-center justify-center  bg-main rounded-full hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedCourseSection;
