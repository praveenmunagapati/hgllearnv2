import React from "react";
import { TbCertificate } from "react-icons/tb";
import CompanyProvide from "./CompanyProvide";

function WhatWeProvide() {
  const data = [
    {
      icon: <TbCertificate />,
      title: "Top Courses",
      description: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text  Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      textLorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      textLorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text ever since the 1500s, when an unknown printer took a galley of type
                   .`,
    },
    {
      icon: <TbCertificate />,
      title: "Certified Teachers",
      description: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text  Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      textLorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      textLorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      text ever since the 1500s, when an unknown printer took a galley of type
                   .`,
    },
    {
      icon: <TbCertificate />,
      title: "Book and Libraries",
      description: `Lorem Ipsum is simply dummy text of the printing and
                   typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                   text  Lorem Ipsum is simply dummy text of the printing and
                   typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                   text Lorem Ipsum is simply dummy text of the printing and
                   typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                   textLorem Ipsum is simply dummy text of the printing and
                   typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                   text Lorem Ipsum is simply dummy text of the printing and
                   typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                   textLorem Ipsum is simply dummy text of the printing and
                   typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                   text ever since the 1500s, when an unknown printer took a galley of type 
                   .`,
    },
  ];

  return (
    <div>
      <div className="py-5 text-center">
        <div className="text-3xl text-main capitalize Poppins font-bold">
          What We Provide
        </div>
        <div className="capitalize Poppins   my-3 text-sm  font-light text-gray-700  ">
          Lorem ipsum dolor sit met, consectetur adipiscing elit
        </div>
      </div>
      <div className="grid  gap-8  py-10 md:py-0 lg:gap-0 xl:gap-10 xl:grid-cols-3 xxl:gap-10 xxl:grid-cols-3">
        {data?.map((val, i) => {
          return (
            <CompanyProvide
              key={i}
              title={val.title}
              description={val.description}
              icon={val.icon}
            />
          );
        })}
      </div>
      );
    </div>
  );
}

export default WhatWeProvide;
