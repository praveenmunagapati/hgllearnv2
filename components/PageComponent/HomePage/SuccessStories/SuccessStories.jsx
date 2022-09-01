import React from "react";
import SuccessStudentCard from "./SuccessStudentCard";
import image1 from "../../../Resources/images/japan.jpg";
function SuccessStories() {
  const successStudentCard = [
    {
      image: image1,
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "web design",
    },
    {
      image: image1,
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "web design",
    },
    {
      image: image1,
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "web design",
    },
    {
      image: image1,
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "web design",
    },
  ];
  return (
    <div className=" mt-20 lg:mt-28 xl:mt-28 xxl:my-20 lg:mb-28 xl:mb-28 xxl:mb-28">
      <div className="text-xl md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl text-center  text-main Poppins font-bold capitalize">
        some of our students success stories
      </div>
      <div
        className="grid grid-cols-1 gap-y-8  md:grid-cols-2 md:gap-y-8
       lg:gap-y-8 xl:gap-y-0 xxl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 
       xxl:grid-cols-4 px-14 pt-16"
      >
        {successStudentCard.map((val, i) => {
          return (
            <div key={i}>
              <SuccessStudentCard
                image={val.image}
                position={val.position}
                placement={val.placement}
                name={val.name}
                as={val.as}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SuccessStories;
