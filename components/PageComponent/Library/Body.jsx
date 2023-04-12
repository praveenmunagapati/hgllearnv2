// import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IoMdCopy } from "react-icons/io";
const Body = () => {
  return (
    <>
      <section className="">
        <div className=" items-center justify-center font-bold xl:mt-28 xxl:mt-28">
          <h1 className="text-center text-main">Our Library</h1>
          <h3 className="text-center">
            
          </h3>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => {
            return (
              <div className="rounded overflow-hidden shadow-lg" key={i}>


                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Learn AI for Beginner{" "}
                  </h1>
                  <hr />

                  <div className="flex items-center mt-2">
                   
                    <div className="pl-2 flex items-center gap-4">
                      <div className="font-medium">Kisan Mahat</div>
                      <div>
                        <IoMdCopy />
                      </div>
                      <div className="text-gray-600 text-xs">
                        <p>20</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Body;
