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
        "Our vision at the HIGPL is to empower individuals and organizations with the knowledge and skills they need to get started in digital Nepal. We are glad to be the leading provider of quality education and services in the field of information technology.",
    },
    {
      icon: <IoIosRocket />,
      title: "mission",
      description:
        "Our mission at the HIGPL is to provide high-quality education, services and proper infrastructure to individuals and organizations in information technology. We aim to achieve this through offering a range of updated courses, proper infrastructure, and best quality services and make the dream of digital Nepal true.",
    },
    {
      icon: <TbClipboardText />,
      title: "objectives",
      description:
        " Our mission at the HIGPL is to provide high-quality education, services and proper infrastructure to individuals and organizations in information technology. We aim to achieve this through offering a range of updated courses, proper infrastructure, and best quality services and make the dream of digital Nepal true.        ",
    },
  ];
  return (
    <div className="px-12 lg:px-20 xl:px-24 xxl:px-24">
      <div className="grid grid-cols-2 gap-12">
        <div>
          {data.map((val, i) => {
            return (
              <div key={i} className="flex gap-5 capitalize my-20 ">
                <div className=" text-2xl w-fit h-fit p-2 bg-main rounded-full text-white">
                  {val.icon}
                </div>
                <div>
                  <div className="my-1 Poppins text-main text-xl">
                    {val.title}
                  </div>
                  <div className="my-1 mx-5  text-sm text-gray-500">
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
