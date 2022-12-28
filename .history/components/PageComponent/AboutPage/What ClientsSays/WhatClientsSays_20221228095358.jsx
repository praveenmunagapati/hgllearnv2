import React, { useState, useEffect } from "react";
import image1 from "../../../../public/images/japan.jpg";
import Regular from "./TabComponents/Regular";
function WhatClientsSays() {
  const [Active, setActive] = useState("regular");
  const tabs = [
    { title: "regular" },
    { title: "facebook" },
    { title: "google" },
  ];

  const Regulars = [
    {
      image: image1,
      name: "Bhawana Suryabhansi",
      title: "Python",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.`,
    },
    {
      image: image1,
      name: "nischal kc",
      title: "student",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
    {
      image: image1,
      name: "hari sir",
      title: "teacher",
      description: `ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
    {
      image: image1,
      name: "kisan mahat",
      title: "student",
      description: `Lorem Ipsum is simply dummy  Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
  ];

  const Facebook = [
    {
      image: image1,
      name: "rajiv das",
      title: "student",
      description: `Lorem Ipsindustry. dummy text ever .`,
    },
    {
      image: image1,
      name: "raymant das",
      title: "student",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
    {
      image: image1,
      name: "kavi vai",
      title: "teacher",
      description: `ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
    {
      image: image1,
      name: "sahil sainju",
      title: "student",
      description: `Lorem Ipsum is simply dummy  Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
  ];
  const Google = [
    {
      image: image1,
      name: "rohit karki",
      title: "student",
      description: `Lorem Ipsindustry. dummy text ever .`,
    },
    {
      image: image1,
      name: "nischal karki",
      title: "student",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
    {
      image: image1,
      name: "pratik karki",
      title: "teacher",
      description: `ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
    {
      image: image1,
      name: "goma  karki",
      title: "student",
      description: `Lorem Ipsum is simply dummy  Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
    {
      image: image1,
      name: "ramchandra  karki",
      title: "student",
      description: `Lorem Ipsum is simply dummy  Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
    {
      image: image1,
      name: "mickey  karki",
      title: "student",
      description: `Lorem Ipsum is simply dummy  Lorem Ipsum has been the industry's standard dummy text ever .`,
    },
  ];
  const [counter, setCounter] = useState(1);
  const [pagination, setPagination] = useState({
    start: 0,
    end: 2,
  });
  // logic starts for slicing card for dynamic numbers
  let EndValue = counter * pagination.end;
  let StartValue = EndValue - pagination.end;

  const prev = (val) => {
    // console.log(StartValue, EndValue, counter, clientDetails);
    // perPageChange
    let PageChange = Math.ceil(val.length / pagination.end);
    // setCounter ko increment and decrement login implementation
    let counterDecrement = counter > 1 ? counter - 1 : PageChange;
    // let counterIncrement = counter < PageChange ? counter + 1 : PageChange;
    setCounter(counterDecrement);
  };
  const next = (val) => {
    console.log(StartValue, EndValue, counter, val.length, val);
    // perPageChange

    let PageChange = Math.ceil(val.length / pagination.end);
    // setCounter ko increment and decrement login implementation
    // let counterDecrement = counter > 1 ? counter - 1 : counter;
    let counterIncrement = counter < PageChange ? counter + 1 : 1;
    setCounter(counterIncrement);
  };

  const tabClick = () => {
    switch (Active) {
      case "regular":
        return (
          <Regular
            clientDetails={Regulars}
            StartValue={StartValue}
            EndValue={EndValue}
            prev={prev}
            next={next}
          />
        );
        break;
      case "facebook":
        return (
          <Regular
            clientDetails={Facebook}
            StartValue={StartValue}
            EndValue={EndValue}
            prev={prev}
            next={next}
          />
        );
        break;
      case "google":
        return (
          <Regular
            clientDetails={Google}
            StartValue={StartValue}
            EndValue={EndValue}
            prev={prev}
            next={next}
          />
        );
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div className="py-5 text-center">
        <div className=" md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl text-main capitalize Poppins font-bold">
          <h2 className="text-[18px]">What our students say about us</h2>
        </div>
        <div className="Poppins  font-light my-3 text-sm  text-gray-700  ">
          <p className="text-xs">
            Here some testimonials about the experience of our students in{" "}
            <span className="text-main font-medium">HUB IT TRAINING</span>
          </p>
        </div>
      </div>
      <div className="flex gap-3 px-32 capitalize Popppins font-semibold">
        {tabs.map((val, i) => {
          return (
            <div
              key={i}
              className={`cursor-pointer ${
                Active === val.title ? "text-main" : ""
              }`}
              onClick={() => setActive(val.title)}
            >
              {val.title}
            </div>
          );
        })}
      </div>
      {tabClick()}
    </div>
  );
}

export default WhatClientsSays;

{
  /* <div className="flex gap-5 ">
  <div
    className=" row-start-2 lg:row-start-1 xl:row-start-1 xxl:row-start-1   py-10
       lg:mt-0 lg:py-5 xl:py-5 xl:mt-0 xxl:mt-0 xxl:py-5"
  >
    <div className="Poppins text-base pb-4  text-gray-600 text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
      reprehenderit maxime aut, deserunt, dignissimos ducimus expedita harum
      saepe, corrupti ullam in quia iusto neque odio assumenda exercitationem ad
      quidem magnam.
    </div>
    <div className="w-full  flex gap-8 items-center pt-3 sm:pt-0">
      <div
        className="border  hover:scale-105 transition-all
               ease-in-out duration-300 border-main w-fit px-5 py-2
                rounded-3xl text-main cursor-pointer Poppins font-medium
                 capitalize"
      >
        explore more ...
      </div>
      <div className="flex gap-3 text-main items-center">
        <div className="text-4xl animate-pulse cursor-pointer">
          <BsFillPlayCircleFill />
        </div>
        <div className="font-normal  text-lg ">Watch now</div>
      </div>
    </div>
  </div> */
}

{
  /* <div
          className=" h-80 xs:h-98 sm:h-100 md:h-104 lg:h-96 xl:h-full xxl:h-full
         xl:overflow-visible xxl:overflow-visible"
        > */
}
{
  /* <div
            className=" flex-col items-center  w-96 sm:w-full
           md:w-full  lg:w-full  xl:w-full  xxl:w-full       relative"
          >
            <div
              className="bg-main   flex  ml-16 xs:ml-28 sm:ml-32 md:ml-44 
              lg:ml-40 relative z-50  xl:ml-44  xxl:ml-48 
            mt-16  md:mt-32 lg:-mt-20 xl:-mt-14 xxl:-mt-12 borderRadiusHome "
            ></div>
            <div className="flex flex-row  ">
              <div
                className=" w-96 xs:w-104 sm:w-11/12 md:w-11/12 lg:w-11/12 
                xl:w-11/12 xxl:w-11/12  -left-4  z-50 absolute -top-20 
                sm:left-8 md:left-12 md:-top-36  lg:-top-30 lg:left-24 
               xxl:left-20 xl:left-24 xl:-top-20 xxl:-top-64
                3xl:-top-36  4xl:-top-52 "
              >
                {" "}
                <Image
                  src={image}
                  alt={image}
                  placeholder="blur"
                  blurDataURL={image}
                  height={50}
                  width={50}
                  layout="responsive"
                  className=""
                />{" "}
              </div>
              <div
                className="grid absolute  gap-1 left-0 xs:left-10 xs:top-56 md:left-32 
                text-gray-400 top-28  sm:top-36 sm:left-14 lg:top-32 xl:ml-24  xxl:ml-32
                 lg:left-24 md:top-40
               md:ml-2  xl:top-32  xxl:top-36 
                grid-cols-4"
              >
                {dots.map((val, i) => {
                  return (
                    <div key={i} className="text-xl">
                      {val.dot}
                    </div>
                  );
                })}
              </div>
            </div>
          </div> */
}
{
  /* </div> */
}
{
  /* <div className="borderRadiusHome"></div>
  <div className="w-4/12  absolute top-24 right-20">
    <Image
      src={image}
      alt={image}
      placeholder="blur"
      blurDataURL={image}
      height={50}
      width={50}
      layout="responsive"
      className=""
    />
  </div>
</div>; */
}
