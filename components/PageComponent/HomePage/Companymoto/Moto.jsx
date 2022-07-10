import PropTypes from "prop-types";
import React from "react";

function Moto({ icon, title, description }) {
  return (
    <div
      className=" shadow-lg border-r-2 transition-all duration-200 ease-linear 
    md:hover:border-b-4 lg:hover:border-b-4 xl:hover:border-b-4
     xxl:hover:border-b-4   md:h-80 xl:h-80  xxl:h-80   
     hover:border-b-main shadow-gray-200 px-4 sm:px-6 
     md:px-8 lg:px-16 xl:px-16 xxl:px-16  pt-4  "
    >
      <div className="flex gap-2 md:gap-4 lg:gap-5 xl:gap-5 xxl:gap-5 items-center ">
        <div className=" text-5xl text-main"> {icon}</div>
        <div className=" Poppins sm:text-lg text-2xl font-bold"> {title}</div>
      </div>
      <div className="font-medium text-sm text-gray-600 text-justify my-4 sm:h-48 h-52 py-2 scroll overflow-scroll ">
        {" "}
        {description}
      </div>
    </div>
  );
}
Moto.prototypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
};
Moto.defaultProps = {
  title: "error",
  icon: "error",
  description: "error",
};

export default Moto;
