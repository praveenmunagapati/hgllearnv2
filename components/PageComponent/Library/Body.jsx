import Link from "next/link";
import React from "react";
import { IoMdCopy } from "react-icons/io";
const Body = () => {
  return (
    <>
      <section className="">
        <div className=" items-center justify-center font-bold xl:mt-28 xxl:mt-28">
          <h1 className="text-center text-main">Our Library</h1>
          <h3 className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </div>
        <div className="xs:flex xs:justify-center xs:items-center px-5 py-24 ml-20">
          <div className="flex flex-wrap -m-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
              return (
                <div className="p-4 sm:w-[42vw] md:w-[28vw] lg:w-[28vw] xl:w-[22vw] xxl:w-[22vw]">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxOluvYA1hlxr6zzd8P__pV9hUY57H5_iatY3FJGU&s"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        Learn AI for Beginner{" "}
                      </h1>
                      <hr />

                      <div class="flex items-center mt-2">
                        <img
                          class="w-10 h-10 object-cover rounded-full"
                          alt="image"
                          src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                        />
                        <div class="pl-2 flex items-center gap-4">
                          <div class="font-medium">Kisan Mahat</div>
                          <div>
                            <IoMdCopy />
                          </div>
                          <div class="text-gray-600 text-xs">
                            <p>20</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
