import React, { useState } from "react";
import { NavData } from "../NavData";
import TopBar1 from "./TopBar1";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../Resources/images/hubitLogo.svg";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import { MdDehaze } from "react-icons/md";
import { fadeInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";
function TopBar({ iconClick, setIconClick }) {
  const router = useRouter();
  console.log(router);
  const styles = {
    fadeInLeft: {
      animation: "x 0.5s",
      animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
    },
  };
  return (
    <div className="">
      <div className="hidden  lg:block xl:block xxl:block">
        {/* top bar 1 is heading top bar in purple color */}
        <TopBar1 />
        {/* top bar 1 is heading bottom bar in purple color */}
        <div className="flex justify-between px-20 bg-white shadow-lg shadow-gray-300">
          <div className="w-24">
            <Image
              src={Logo}
              height={25}
              width={35}
              placeholder="blur"
              blurDataURL={Logo}
              layout="responsive"
              objectFit="contain"
              quality={100}
              alt="loading..."
            />
          </div>
          <div className="flex gap-2 font-medium text-sm items-center">
            <div className="capitalize flex items-center gap-4 ">
              {NavData.map((val, i) => {
                return (
                  <div className="flex space-x-6  items-center">
                    <Link href={val.path} passHref>
                      <div
                        className={`${
                          val.path === router.asPath
                            ? "border-b-2 border-main"
                            : ""
                        } text-gray-600 w-fit cursor-pointer`}
                      >
                        {val.title}
                      </div>
                    </Link>
                    <div className="borderRight"></div>

                    {/* {val.path !== "/notice" ? (
                  <div className="w-0.5 h-3.5 bg-gray-600"></div>
                ) : (
                  ""
                )} */}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="capitalize text-gray-600  Poppins text-sm">
                more
              </div>
              <div className="grid grid-cols-2 gap-0.5 ">
                <div className="bg-main w-1 h-1 rounded-full"></div>
                <div className="bg-main w-1 h-1 rounded-full"></div>
                <div className="bg-main w-1 h-1 rounded-full"></div>
                <div className="bg-main w-1 h-1 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-3 lg:hidden xl:hidden xxl:hidden">
        {!iconClick ? (
          <div>
            <MdDehaze
              className="w-10 h-10 text-gray-700"
              onClick={() => setIconClick(true)}
            />
          </div>
        ) : (
          <div className="w-10 h-10 "></div>
        )}
      </div>
    </div>
  );
}

export default TopBar;
