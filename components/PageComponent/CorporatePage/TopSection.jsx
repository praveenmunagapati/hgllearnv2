import React from "react";

const TopSection = () => {
  return (
    <>
      <div className="flex gap-60 ">
        <div className="flex flex-col  xs:w-full sm:w-full md:w-full lg:w-[60vh] xl:w-[60vh] xxl:w-[60vh] xxxl:w-[60vh]">
          <h1 className="text-main font-bold">What is Corporate Training?</h1>
          <p>
            
           
          </p>
        </div>
        <div className="xs:hidden sm:hidden lg:w-[30vw] xl:w-[30vw] xxl:w-[30vw]">
          <image src="./image1.jpg" alt="loading" />
        </div>
      </div>
    </>
  );
};

export default TopSection;
