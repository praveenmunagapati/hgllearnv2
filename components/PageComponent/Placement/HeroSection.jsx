import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <>
      <section className="flex gap-40 mt-10 ml-10 mr-10 items-center xs:ml-16">
        <div className="sm:w-full md:w-full  lg:w-[40vw] xl:w-[40vw] xxl:w-[40vw] xxxl:w-[40vw]  ">
          <h1 className="font-bold text-main ">
            What we do for your placement?
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae
            ab minus. Dicta, alias quam. Porro, corporis perspiciatis distinctio
            praesentium impedit, neque consequatur aliquam veniam nemo non
            architecto. Voluptatibus deleniti vel laudantium pariatur delectus,
            rerum molestias maiores placeat veritatis, obcaecati quibusdam
            architecto assumenda vero eveniet, amet sint voluptas incidunt esse.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae,
            earum adipisci dolore iste et ab ut voluptas magni culpa eaque
            soluta corrupti in quam fuga odio, aliquam, rerum eveniet.
          </p>
        </div>
        <div className="xs:hidden sm:hidden md:hidden lg:w-[40vw] xl:w-[40vw] xxl:w-[40vw] xxxl:w-[40vw] ">
          <img src="/image1.jpg" className="w-full h-full lg:h-[80%]" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
