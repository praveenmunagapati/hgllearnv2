import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
function TopBar1() {
  const data = [
    { id: 1, title: "check certificate" },
    { id: 2, title: "career" },
    { id: 3, title: "contact us" },
    { id: 4, title: "download brouchour" },
    { id: 5, title: "hackathons" },
    { id: 6, title: "hire talents" },
    { id: 7, title: "testimonials" },
  ];
  //   const [showUnderline, setShowUnderline] = useState(false);
  //   const [ID, setId] = useState("");
  return (
    <div>
      <div className="bg-main text-sm flex   text-white py-2.5 items-center justify-between px-20 ">
        <div className="flex gap-4 items-center ">
          <div className="flex gap-2.5  items-center">
            <div>
              <BsFillTelephoneFill className="w-3 h-3" />
            </div>
            <div>071-532805</div>
            <div className="w-0.5 h-3.5 bg-white"></div>
            <div>9827494116</div>
            <div className="w-0.5 h-3.5 bg-white"></div>
            <div>9851045414</div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <IoMdMail />
            </div>
            <div>training@hubit.comp.np</div>
          </div>
        </div>
        <div className="flex gap-4">
          {data.map((val, i) => {
            return (
              <div
                // onClick={() => {
                //   setShowUnderline(true), setId(val.id);
                // }}
                key={i}
                className={` hover:scale-105 transition-all duration-300 ease-in-out  capitalize cursor-pointer `}
              >
                {" "}
                {val.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopBar1;

// ${
//     showUnderline && ID === val.id ? "border-b border-white" : " "
//   }
