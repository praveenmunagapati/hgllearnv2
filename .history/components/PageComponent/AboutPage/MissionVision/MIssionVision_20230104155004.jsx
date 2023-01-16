//import { data } from "autoprefixer";
import React from "react";
import { GiBinoculars } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import { TbClipboardText } from "react-icons/tb";

function MIssionVision() {
  const data = [
    {
      icon: <GiBinoculars />,
      title: "vision",
      description:
        " ipsum dolor sit amet consectetur adipisicing elit. Omnis aut dolores tempora eum deleniti sunt veniam. Tempore quae vero at nesciunt delectus",
    },
    {
      icon: <IoIosRocket />,
      title: "mission",
      description:
        " ipsum dolor sit amet consectetur adipisicing elit. Omnis aut dolores tempora eum deleniti sunt veniam. Tempore quae vero at nesciunt delectus",
    },
    {
      icon: <TbClipboardText />,
      title: "objectives",
      description:
        " ipsum dolor sit amet consectetur adipisicing elit. Omnis aut dolores tempora eum deleniti sunt veniam. Tempore quae vero at nesciunt delectus",
    },
  ];
  return (
    <div className="px-3 sm:px-5 md:px-5 lg:px-20 xl:px-20 xxl:px-20">
      <div className="grid grid-cols-2 gap-12">
        <div>
          {data.map((val, i) => {
            return (
              <div key={i} className="flex gap-5 capitalize my-20">
                <div className=" text-2xl w-fit h-fit p-2 bg-main rounded-full text-white">
                  {val.icon}
                </div>
                <div>
                  <div className="my-1 Poppins text-main text-xl">
                    {val.title}
                  </div>
                  <div className="my-1 mx-5  text-sm text-gray-700">
                    <p>{val.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div>pics & videos</div> */}
      </div>
    </div>
  );
}

export default MIssionVision;
