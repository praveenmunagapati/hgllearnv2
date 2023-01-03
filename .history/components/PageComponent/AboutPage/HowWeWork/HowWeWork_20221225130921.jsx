import { data } from "autoprefixer";
import React from "react";
import { BsPeopleFill, BsShareFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { ImPriceTags } from "react-icons/im";

function HowWeWork() {
  const data = [
    {
      icon: <BsPeopleFill />,
      title: "create a team",
      description:
        " ipsum dolor sit amet consectetur adipisicing elit. Omnis aut dolores tempora eum deleniti sunt veniam. Tempore quae vero at nesciunt delectus",
    },
    {
      icon: <IoMail />,
      title: "add inbox",
      description:
        " ipsum dolor sit amet consectetur adipisicing elit. Omnis aut dolores tempora eum deleniti sunt veniam. Tempore quae vero at nesciunt delectus",
    },
    {
      icon: <ImPriceTags />,
      title: "create tags",
      description:
        " ipsum dolor sit amet consectetur adipisicing elit. Omnis aut dolores tempora eum deleniti sunt veniam. Tempore quae vero at nesciunt delectus",
    },
    {
      icon: <BsShareFill />,
      title: "share the work load",
      description:
        " ipsum dolor sit amet consectetur adipisicing elit. Omnis aut dolores tempora eum deleniti sunt veniam. Tempore quae vero at nesciunt delectus",
    },
  ];
  return (
    <div className="px-5 lg:px-20 xl:px-20 xxl:px-20">
      <div>
        <div className="text-2xl text-center  text-main Poppins font-bold capitalize">
          how we work
        </div>

        <div className="text-sm  w-7/12  text-center mx-auto  mt-5 text-gray-400   capitalize">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          quisquam eius animi fugit consectetur maxime obcaecati necessitatibus
          excepturi commodi earum nisi itaque perspiciatis minus, quidem at
          magni possimus maiores nihil.
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div className=" col-span-">
          <div>
            {data.map((val, i) => {
              return (
                <div key={i} className="flex gap-5 my-20 capitalize">
                  <div className=" text-2xl w-fit h-fit p-2  text-main">
                    {val.icon}
                  </div>
                  <div>
                    <div className="my-1 Poppins text-lg">{val.title}</div>
                    <div className="my-1  text-sm text-gray-500">
                      {val.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div>pics & videos</div> */}
      </div>
    </div>
  );
}

export default HowWeWork;
