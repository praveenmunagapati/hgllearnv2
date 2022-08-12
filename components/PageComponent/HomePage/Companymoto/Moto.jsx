import React from "react";

function Moto({ icon, title, description }) {
  return (
    <div
      className=" shadow-md bg-white transition-all duration-200 ease-linear
    hover:border-b-4 hover:border-b-main shadow-gray-300 px-4 sm:px-6
     md:px-4 lg:px-4 xl:px-16 xxl:px-16 pt-4 "
    >
      <div className="flex gap-2 md:gap-2 lg:gap-2 xl:gap-3 xxl:gap-3 items-center ">
        <div className=" text-3xl xl:text-4xl xxl:text-5xl text-main">
          {" "}
          {icon}{" "}
        </div>
        <div className=" Poppins text-sm xl:text-base xxl:text-lg font-semibold">
          {" "}
          {title}{" "}
        </div>
      </div>
      <div className="text-xs xl:text-sm xxl:text-base text-gray-700 text-justify mb-4 h-36 xl:h-40 xxl:h-52 py-2 scroll overflow-scroll ">
        {description}
      </div>
    </div>
  );
}

export default Moto;
