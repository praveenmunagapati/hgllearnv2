import React from "react";



const TopSection = () => {
  return (
    <>
      <div className="flex gap-60 ">
        <div className="flex flex-col  xs:w-full sm:w-full md:w-full lg:w-[60vh] xl:w-[60vh] xxl:w-[60vh] xxxl:w-[60vh]">
          <h1 className="text-main font-bold">What is Corporate Training?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, at amet aspernatur autem enim reiciendis ipsam fuga
            odit quidem, doloremque iure cumque, vitae iste? Perferendis, fugiat
            molestias! Sunt culpa delectus ad ipsa vitae quasi fugiat soluta
            saepe earum, magni tempore labore eius dicta praesentium autem
            libero iure molestias perspiciatis qui natus! Tempore aliquid illum
            consequuntur accusantium impedit doloremque? Quis saepe nostrum
           
          </p>
        </div>
        <div className="xs:hidden sm:hidden lg:w-[30vw] xl:w-[30vw] xxl:w-[30vw]">
          <img src="./image1.jpg" alt="" />s
        </div>
      </div>
    </>
  );
};

export default TopSection;
