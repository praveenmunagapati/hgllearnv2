import PropTypes from "prop-types";
import React from "react";

function Moto({ icon, title, description }) {
  return (
    <div className=" shadow-lg border-r-2 transition-all duration-200 ease-linear hover:border-b-4 h-96  md:h-96 xl:h-80  xxl:h-80   hover:border-b-main shadow-gray-200 px-16 py-4 ">
      <div className="flex gap-5 items-center ">
        <div className="text-5xl text-main"> {icon}</div>
        <div className=" Poppins text-2xl font-bold"> {title}</div>
      </div>
      <div className="Poppins text-sm text-gray-600 text-justify my-4 h-52 py-2 scroll overflow-scroll ">
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
