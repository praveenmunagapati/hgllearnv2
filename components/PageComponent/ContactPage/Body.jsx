import React from "react";
import { SiMicrosoft } from "react-icons/si";

const Body = () => {
  return (
    <>
      <section className="bg-gray-100  ">
        <div className=" px-5 py-24 mx-auto flex xs:flex-col sm:flex-col  gap-36 md:gap-24 items-center">
          <div className="sm:w-full xs:w-full lg:w-[40vw] md:w-[30vw] xl:w-[40vw] xxl:w-[40vw] rounded-lg overflow-hidden sm:mr-10 p-10 flex flex-col items-center justify-center  md:mr-10">
            {[1, 2, 3, 4].map((item, i) => {
              return (
                <div
                  className="flex gap-8 bg-white rounded-lg w-[25vw] h-[15vh] mx-10 my-5 p-4 items-center sm:w-full xs:w-full  "
                  key={i}
                >
                  <SiMicrosoft />{" "}
                  <div className="flex-col ">
                    <p>Call us</p>
                    <p>9821420682 , 9812345678</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:w-1/2 md:w-1/2 xs:ml-10 sm:ml-10 md:ml-10 bg-white h-[80vh] flex flex-col  w-[40vw] sm:w-full xs:w-full md:py-8 mt-8 md:mt-0 border-2 border-gray-400 border-solid rounded-xl p-10 mr-10">
            <h2 className="text-main text-lg mb-1 font-bold">Message Us </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Lorem ipsum dolor, sit amet consect.{" "}
            </p>
            <div className="relative mb-4">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                placeholder="Full Name"
              />
            </div>
            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Email Address"
              />
            </div>
            <div className="relative mb-4">
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Write a Message"
              />
            </div>
            <button
              className="text-white 
            w-48  bg-main border-0 py-2 px-6 focus:outline-none hover:bg-hoverMain rounded-[100px] text-lg sm:w-44 xs:w-44 "
            >
              Send Message{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
