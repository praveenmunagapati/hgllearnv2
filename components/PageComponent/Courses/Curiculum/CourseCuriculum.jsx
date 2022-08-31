import React, { useState } from "react";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Collapse from "@kunukn/react-collapse";

function CourseCuriculum() {
  const [toggle, setToggle] = useState(false);
  const [ID, setID] = useState(false);
  const courseCuriculumData = [
    {
      id: 1,
      question: "What is a web page?",
      answer: [
        { answer1: "web page is a page1" },
        { answer2: "web page is a page2" },
      ],
    },
    {
      id: 2,
      question: "What is a web page?",
      answer: [
        { answer1: "web page is a page1" },
        { answer2: "web page is a page2" },
      ],
    },
    {
      id: 3,
      question: "What is a web page?",
      answer: [
        { answer1: "web page is a page1" },
        { answer2: "web page is a page2" },
      ],
    },
    {
      id: 4,
      question: "What is a web page?",
      answer: [
        { answer1: "web page is a page1" },
        { answer2: "web page is a page2" },
      ],
    },
    {
      id: 5,
      question: "What is a web page?",
      answer: [
        { answer1: "web page is a page1" },
        { answer2: "web page is a page2" },
      ],
    },
    {
      id: 6,
      question: "What is a web page?",
      answer: [
        { answer1: "web page is a page1" },
        { answer2: "web page is a page2" },
      ],
    },
  ];
  return (
    <div>
      <div className=" bg-gray-50 px-3 h-108 overflow-y-auto scroll">
        {courseCuriculumData.map((val, i) => {
          return (
            <div
              key={i}
              id="content"
              onClick={() => {
                setToggle(!toggle), setID(val.id);
              }}
              className={` border rounded-md border-gray-400 my-8`}
            >
              <div className="text-main Poppins  text-lg px-6  py-4 cursor-pointer flex items-center justify-between  ">
                <div>{val.question}</div>
                <div>
                  {toggle && ID === val.id ? (
                    <MdKeyboardArrowUp className="w-7 h-7" />
                  ) : (
                    <MdKeyboardArrowDown className="w-7 h-7" />
                  )}
                </div>
              </div>
              <Collapse
                isOpen={toggle && ID === val.id}
                // state ko value yeha change huni raicha like true or false
                className={
                  "app__collapse app__collapse--gradient " +
                  (toggle && ID === val.id
                    ? "app__collapse--active UserProfile "
                    : "UserProfile ")
                }
                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                aria-hidden={toggle && ID === val.id ? "false" : "true"}
                elementType="article"
                render={() => (
                  <React.Fragment>
                    <div>
                      {val.answer.map((val, i) => {
                        return (
                          <div
                            key={i}
                            className="border-t px-6 py-4 text-sm text-gray-600  font-medium border-gray-300 "
                          >
                            <div>{val.answer1}</div>
                            <div>{val.answer2}</div>
                          </div>
                        );
                      })}
                    </div>
                  </React.Fragment>
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseCuriculum;
