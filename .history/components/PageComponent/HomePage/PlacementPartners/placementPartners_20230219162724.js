// import partners from "./icons/japan.jpg";

import Image from "next/image";
import ImageFirst from '../../../Resources/walmart.webp';
const PlacementPartners = () => {
  const Placement =[
    {
      image : ImageFirst
    }
  ]
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className=" px-4 md:px-8 lg:px-20 xl:px-24 xxl:px-32 mt-10 flex flex-col items-center ">
      <div className="w-max  text-[#a0047d] text-lg xl:text-xl xxl:text-2xl capitalize Poppins my-10 font-bold">
        Placement Partners
      </div>
      <div className=" grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-6 my-6">
        {Placement.map((item,i) => {
          return (
            <div key={i} className="">
            <div className=" w-94  h-14 flex justify-a relative">
              <Image src={item.image } alt='' className='' layout="fill"/>
              </div>
              </div>
            // <div
            //   key={item}
            //   className="flex flex-row h-max items-center w-full  py-1 px-2 border border-gray-500 shadow-md"
            // >
            //   <span className="text-base xl:text-lg xxl:text-xl">
            //     <SiMicrosoft />
            //   </span>
            //   <span className="ml-2 text-xs xl:text-sm xxl:text-base">
            //     Bright IT
            //   </span>
            // </div>
          );
        })}
      </div>
    </div>
  );
};
export default PlacementPartners;
