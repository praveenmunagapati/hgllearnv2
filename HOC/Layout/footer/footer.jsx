import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  const links = [
    { title: "home" },
    { title: "about us" },
    { title: "our services" },
    { title: "latest information" },
    { title: "recent a quote" },
    { title: "get in touch" },
  ];
  const about = [
    { title: "company" },
    { title: "careers" },
    { title: "customers" },
    { title: "contact us" },
  ];
  return (
    <div className=" px-4 lg:px-8  xl:px-9  xxl:px-10 bg-gray-800   py-12 ">
      <div className="mx-auto grid gap-5 text-white grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4">
        <div className="col-span-1 capitalize">
          <div className="text-xl lg:text-2xl xl:text-2xl xxl:text-2xl Poppins  my-2">
            links
          </div>
          <div>
            {links.map((val, i) => {
              return (
                <div key={i}>
                  <div className="my-2  cursor-pointer text-sm md:text-base lg:text-base  xl:text-base xxl:text-base  w-fit textPrimary">
                    {val.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-1 capitalize">
          <div className="text-xl lg:text-2xl xl:text-2xl xxl:text-2xl  my-2 Poppins ">
            about{" "}
          </div>
          <div>
            {about.map((val, i) => {
              return (
                <div key={i}>
                  <div className="my-2 cursor-pointer   w-fit text-sm md:text-base lg:text-base  xl:text-base xxl:text-base textPrimary">
                    {val.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1  md:col-span-1 lg:col-span-1  xl:col-span-1 xxl:col-span-1 capitalize">
          <div className="text-xl lg:text-2xl xl:text-2xl xxl:text-2xl  my-2 Poppins">
            featured courses
          </div>
          <div className="my-2 font-medium text-xs md:text-sm lg:text-base  xl:text-base xxl:text-base ">
            MERN Stack Development
          </div>
          <div className="my-2 text-sm">
            starts in <span className="text-main"> March 20,2020</span>
          </div>
          <div className="my-2 font-medium ">Web Designing</div>
          <div className="my-2 text-xs lg:text-sm  xl:text-sm xxl:text-sm">
            starts in <span className="text-main"> April 21,2020</span>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1  md:col-span-1 lg:col-span-1  xl:col-span-1 xxl:col-span-1">
          <div className="text-xl capitalize lg:text-2xl xl:text-2xl xxl:text-2xl  my-2 Poppins">
            our contact
          </div>
          <div className=" ">
            <div className="flex space-x-4 my-2   md:text-sm xxl:my-3 items-center">
              <IoCall className="w-6 h-6" />
              <p>+977-9821424241</p>
            </div>
            <div className="flex  items-center space-x-4 my-2  xxl:my-3 md:text-sm  ">
              <IoMdMail className="w-6 h-6" />
              <a href="">hubit@gmail.com</a>
            </div>
            <div className="flex space-x-4 my-2   md:text-sm xxl:my-3  items-center">
              <BiCurrentLocation className="w-8 h-8" />
              <p className="capitalize">
                milan chowk-8, Butwal, ganganagar 30secs from main street
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full border-b py-7 border-white"></div>
      </div>
      {/* bottom section starts  */}

      <div className="flex flex-col md:gap-6 lg:gap-10 xl:gap-10 xxl:gap-10 md:flex-row lg:flex-row xl:flex-row xxl:flex-row lg:items-center xl:items-center xxl:items-center justify-between py-5 space-y-5 md:space-y-0">
        <Link href={"/"} passHref>
          <div className="w-28 -mt-2  cursor-pointer">
            <Image
              src="/vercel.svg"
              alt="logo"
              height={50}
              sizes={"80vw"}
              width={100}
              placeholder="blur"
              priority={"true"}
              loading="eager"
              blurDataURL="/sikkai1.webp"
              layout="responsive"
              quality={75}
              objectFit="contain"
            />
          </div>
        </Link>

        {/* privacy policy section starts  */}
        <div className=" flex-1 md:mx-8 lg:mx-16">
          <div className="flex items-center space-x-1 md:space-x-2 text-white font-medium  text-xs sm:text-sm  lg:text-base xl:text-base xxl:text-base">
            <Link href="">
              <p className="cursor-pointer  textPrimary transition hover:opacity-80">
                Terms & Condition
              </p>
            </Link>
            <span className="h-4 w-0.5 bg-white"></span>
            <Link href="">
              <p className="cursor-pointer textPrimary transition hover:opacity-80">
                Privacy Policy
              </p>
            </Link>
            <span className="h-4 w-0.5 bg-white"></span>
            <Link href="">
              <p className="cursor-pointer textPrimary transition hover:opacity-80">
                Lisence Aggrement
              </p>
            </Link>
          </div>
          <p className="mt-5  md:my-4 lg:my-2 xl:my-2 xxl:my-2  text-xs sm:text-sm   lg:text-sm xl:text-sm xxl:text-sm text-white">
            Copyright &copy; {new Date().getFullYear()}, Sikkai
          </p>
        </div>

        {/* privacy policy section ends  */}
        {/* social media icons section  */}
        <div className="flex items-center space-x-4 text-xl ">
          <FaFacebookF
            className="text-white cursor-pointer transition textPrimary

"
          />
          <BsTwitter
            className="text-white cursor-pointer transition textPrimary
"
          />
          <AiFillInstagram
            className="text-white cursor-pointer transition textPrimary
"
          />
          <FaTiktok
            className="text-white cursor-pointer transition textPrimary
"
          />
          <BsWhatsapp
            className="text-white cursor-pointer transition textPrimary
textPrimary
"
          />
        </div>
        {/* social media icon section ends  */}
      </div>

      {/* bottom section ends  */}
    </div>
  );
}

export default Footer;
