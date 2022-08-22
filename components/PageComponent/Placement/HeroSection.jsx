import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <section className="">
        <div className="  flex px-5 py-7 md:flex-row lg:flex-row xl:flex-row xxl:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 xl:w-[30vw]  xxl:w-[40vw] flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
            <h1 className=" sm:text-4xl  text-3xl font-medium text-main">
              What we do for your placement?
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quos
              maxime dignissimos soluta beatae, explicabo quia aspernatur totam
              quasi unde inventore architecto, dolore doloribus praesentium eos
              ea labore sequi minus vel? Cumque quisquam vitae reiciendis
              explicabo non error recusandae, dolorem nulla iusto laudantium,
              voluptas animi consequatur ipsum deleniti quis aut.
            </p>
          </div>
          <div className="xs:hidden sm:hidden lg:max-w-lg lg:w-full md:w-1/2 xl:w-3/6 xxl:w-1/2 bg-main">
            <Image
              className="object-cover object-center rounded opacity-70"
              alt="Hubit"
              src="https://www.derby-college.ac.uk/wp-content/uploads/2022/04/Courses-starting-april2022.jpg"
              layout="responsive"
              width={70}
              height={40}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
