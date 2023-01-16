import PropTypes from "prop-types";
import React from "react";

function CompanyProvide({ icon, title, description }) {
  return (
    <div className="  transition-all duration-200 ease-linear hover:border-b-4 h-96  md:h-80 xl:h-96  xxl:h-96   hover:border-b-main shadow-gray-200 px-16 py-4 ">
      <div className="flex flex-col gap-5 items-center ">
        <div className="text-5xl text-main border-4 rounded-full p-2">
          {" "}
          {icon}
        </div>
        <div className=" Poppins text-2xl font-bold"> {title}</div>
      </div>
      <div
        className="Poppins text-sm text-gray-600 text-justify my-4 h-36 lg:h-52  xl:h-52 xxl:h-52 py-2 scroll overflow-scroll 
      
      
      
      
      
       "
      >
        {" "}
        {description}
      </div>
    </div>
  );
}
CompanyProvide.prototypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
};
CompanyProvide.defaultProps = {
  title: "error",
  icon: "error",
  description: "error",
};

export default CompanyProvide;
