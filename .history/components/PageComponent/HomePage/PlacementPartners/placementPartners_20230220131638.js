// import partners from "./icons/japan.jpg";

import Image from "next/image";
import ImageFirst from '../../../../public/images/shine resunga.png';
import Image1 from '../../../../public/images/1solution.webp';
import Image2 from '../../../../public/images/kangaroo education.png';
import Image3 from '../../../../public/images/kba-global.png';
import Image4 from '../../../../public/images/ng market.png';
import Image5 from '../../../../public/images/printhub.png';
const PlacementPartners = () => {
  const Placement =[
    {
      image : ImageFirst
    },
    {
      image : Image1
    },
    {
      image : Image2
    },
    {
      image : Image3
    },
    {
      image : Image4
    },
    {
      image : Image5
    },
  ]
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className=" px-4 md:px-8 lg:px-20 xl:px-24 xxl:px-32 mt-10 flex flex-col items-center ">
      <div className="w-max  text-[#a0047d] text-lg xl:text-xl xxl:text-2xl capitalize Poppins my-10 font-bold">
        Placement Partners
      </div>
      <div className=" grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-6 gap-4 my-4">
        {Placement.map((item,i) => {
          return (
            <div key={i} className=" flex justify-around w-full ">
            <div className=" w-40 h-10 ">
              <Image src={item.image} alt='items-center' className=''/>
              </div>
              </div>
           
          );
        })}
      </div>
    </div>
  );
};
export default PlacementPartners;
