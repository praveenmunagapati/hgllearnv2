import React, { useState, useEffect } from "react";
import { GiGraduateCap } from "react-icons/gi";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function PopularCourses({ card, value }) {
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
  const [counter, setCounter] = useState(1);
  const [pagination, setPagination] = useState({
    start: 0,
    end: 4,
  });
  // logic starts for slicing card for dynamic numbers
  let EndValue = counter * pagination.end;
  let StartValue = EndValue - pagination.end;
  // perPageChange
  let PageChange = Math.ceil(card.length / pagination.end);
  // setCounter ko increment and decrement login implementation
  let counterDecrement = counter > 1 ? counter - 1 : counter;
  let counterIncrement = counter < PageChange ? counter + 1 : PageChange;

  const prev = () => {
    console.log(StartValue, EndValue, counter, card);

    setCounter(counterDecrement);
  };
  const next = () => {
    console.log(StartValue, EndValue, counter, card.length);
    setCounter(counterIncrement);
  };
  return (
    <div>
      <div className="flex flex-col justify-between  px-4 md:px-8 lg:px-12 xl:px-14 xxl:px-16">
        {value === "onlyTag" ? (
          <div className=" flex flex-col justify-between items-center">
            {" "}
            <div className="bg-main rounded-full mt-10 p-1">
              <GiGraduateCap className="text-2xl xl:text-3xl xxl:text-4xl text-white" />
            </div>
            <div className="text-lg xl:text-xl xxl:text-2xl my-2 capitalize Poppins font-bold">
              our popular courses
            </div>
            <div className="capitalize Poppins  bg-gray-100 font-semibold px-4 py-1.5 mt-2  rounded-full text-[8px] xl:text-[10px] xxl:text-xs  text-gray-800 cursor-pointer">
              explore more courses
            </div>
          </div>
        ) : value === "courses" ? (
          <div>
            <div
              className="text-xl  flex  justify-center items-center
             xl:text-2xl xxl:text-3xl my-2 capitalize Poppins font-bold"
            >
              our popular courses
            </div>
            <div className="   md:grid lg:grid  xl:grid xxl:grid  grid-cols-12 gap-16  mt-7 md:mt-14  mb-4 md:mb-7">
              <div className="md:flex lg:flex xl:flex xxl:flex  items-center gap-16 my-8 col-span-9 ">
                <div className="w-full my-6 ">
                  <input
                    type="text"
                    name=""
                    placeholder="Course "
                    className=" px-5 py-2  w-full bg-[#EEEAEA] border-b-2 border-main rounded-sm"
                  />
                </div>
                <div className="w-full ">
                  <select className=" px-5 py-2  w-full bg-[#EEEAEA]  rounded-sm">
                    <option>category</option>
                    <option>category</option>
                    <option>category</option>
                    <option>category</option>
                  </select>
                </div>
              </div>
              <div className="col-span-3  flex items-center text-white Poppins font-semibold">
                <button className=" w-full p-2 bg-[#C7189F]  capitalize flex gap-1 items-center justify-center ">
                  search course
                </button>
                <div className="  h-10 w-20 flex justify-center items-center border-main bg-main border">
                  <MdOutlineKeyboardArrowRight className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="flex px-5  justify-end gap-2 ">
          <div>
            <FaChevronLeft
              onClick={() => prev()}
              color="white"
              className="w-5 h-5 md:h-6 md:w-6 xxl:h-6 xxl:w-6  p-1.5 flex items-center justify-center
                  bg-main rounded-full mr-2 hover:cursor-pointer"
            />
          </div>
          <div>
            <FaChevronRight
              onClick={() => next()}
              color="white"
              className="w-5 h-5 md:h-6 md:w-6 xxl:h-6 xxl:w-6 p-1.5  flex items-center justify-center  bg-main rounded-full hover:cursor-pointer"
            />
          </div>
        </div>
        <div
          className="grid grid-cols-1 mt-8 md:mb-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
         xl:grid-cols-4 xxl:grid-cols-4 gap-5 w-full"
        >
          {card?.slice(StartValue, EndValue)?.map((val, i) => {
            return (
              <Link
                key={i}
                href={{
                  pathname: `/OurCourses/${val._id}`,
                  query: { image: val.image, description: val.description },
                }}
              >
                <div
                  className="shadow-lg h-fit  pb-4 w-full  
                overflow-hidden rounded-md shadow-gray-400 flex flex-col justify-centre  cursor-pointer"
                >
                  <div className="h-60 w-80 relative">
                    <Image
                      src={val.image}
                      alt={"images"}
                      placeholder="blur"
                      blurDataURL={val.image}
                      objectFit="cover"
                      objectPosition="top"
                      layout="fill"
                      className=" "
                    />
                    {/* <img
                      src={val.image}
                      alt={val.course_name}
                      height="200"
                      width={200}
                    /> */}
                  </div>
                  <div className="flex h-2/6 items-center pt-2">
                    <div className="px-2 Poppins capitalize h-max">
                      <div
                        className={`py-1 xs:py-2 ${color(
                          val.course_category
                        )} text-[9px] xl:text-[11px] xxl:text-sm font-semibold`}
                      >
                        {val.course_category}
                      </div>
                      <div className="font-semibold w-full h-max line-clamp-2 text-xs xl:text-sm xxl:text-base ">
                        {val.course_name}
                      </div>
                      <div className="py-1 xs:py-2">
                        <span className="text-gray-500 text-[9px] xl:text-[11px] xxl:text-sm">
                          Duration :
                        </span>
                        <span className="text-[9px] xl:text-[11px] xxl:text-sm mx-1">
                          {val.duration}
                        </span>
                      </div>
                      {/* <div className="line-clamp-2 pt-3  ">
                        {val.description}
                      </div> */}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PopularCourses;
