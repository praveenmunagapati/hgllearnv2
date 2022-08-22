import Image from "next/image";
import React from "react";
import { SiMicrosoft } from "react-icons/si";
const placement = () => {
  return (
    <>
      <section>
        <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className=" md:w-1/2  md:pr-16   md:items-start md:text-left mb-16 md:mb-0 text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#a0047d]">
              What we do for your placement?
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident velit inventore at excepturi debitis molestiae, ab
              quibusdam voluptatibus porro pariatur. Est sequi omnis labore nisi
              deleniti voluptatum exercitationem fugiat Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sit, voluptatem expedita
              blanditiis natus dolores magnam dicta voluptas accusamus quod quo
              eveniet dolore recusandae repellendus minima quasi deleniti animi
              unde veniam! Qui earum ullam reiciendis nulla, vero praesentium
              ipsa quo esse, modi quia iure eligendi, architecto nesciunt
              aperiam exercitationem illum autem?
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="image "
              src="https://www.derby-college.ac.uk/wp-content/uploads/2022/04/Courses-starting-april2022.jpg"
              width={700}
              height={500}
            />
          </div>
        </div>
      </section>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div
              className="rounded overflow-hidden shadow-lg group p-2 "
              key={index}
            >
              <img
                className="w-full group-hover:scale-105 transition-all duration-300"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXzIgxiHN9Ktcb5hqKCr_ezUySvhoawPrUQ&usqp=CAU"
                alt="Mountain"
                height={250}
                width={250}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Placement At Hubit Pvt . Ltd
                </div>
              </div>
              <hr />
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block px-1 py-1 text-sm font-semibold mr-2 mb-2">
                  Roshika Chettri
                </span>
                <span className=" px-1 py-1 text-sm font-semibold text-[#a0047d]  mb-2">
                  Web Design
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-4 md:px-8 lg:px-20 xl:px-24 xxl:px-32 mt-20 flex flex-col items-center justify-center">
        <div className="w-max text-[#a0047d] text-lg xl:text-xl xxl:text-2xl capitalize Poppins font-bold">
        Our  Placement Partners
        </div>
        <div className="w-full flex flex-row flex-wrap gap-10 justify-center my-6">
          {[1,2,3,4,5,6].map((item) => {
            return (
              <div
                key={item}
                className="flex flex-row h-max items-center py-1 px-2 border border-gray-500 shadow-md "
              >
                <span className="text-base xl:text-lg xxl:text-xl">
                  <SiMicrosoft />
                </span>
                <span className="ml-2 text-xs xl:text-sm xxl:text-base">
                  Microsoft
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default placement;
