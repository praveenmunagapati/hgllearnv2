import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Collapse from "@kunukn/react-collapse";
import axios from "axios";
import { useRouter } from "next/router";
function CourseCuriculum() {
  const [toggle, setToggle] = useState(false);
  const [courseCuriculumData, setCourseCuriculumData] = useState([]);

  const [ID, setID] = useState([]);
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      console.log(id);
      setID(id);
    }
  }, [router.isReady, router.query]);
  console.log(ID);

  const getCuriculumData = () => {
    try {
      axios
        .get(`https://hubitnep.herokuapp.com/syallabus/${ID}`)
        .then((res) => {
          console.log(res);
          setCourseCuriculumData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCuriculumData();
  }, [ID]);

  return (
    <div>
      <div className=" bg-gray-50 px-3 h-108 overflow-y-auto scroll">
        {courseCuriculumData.map((val, i) => {
          return (
            <div
              key={i}
              id="content"
              onClick={() => {
                setToggle(!toggle), setID(val.sectiont_id);
              }}
              className={` border rounded-md border-gray-400 my-8`}
            >
              <div className="text-main Poppins  text-lg px-6  py-4 cursor-pointer flex items-center justify-between  ">
                <div>{val.Section}</div>
                <div>
                  {toggle && ID === val.sectiont_id ? (
                    <MdKeyboardArrowUp className="w-7 h-7" />
                  ) : (
                    <MdKeyboardArrowDown className="w-7 h-7" />
                  )}
                </div>
              </div>
              <Collapse
                isOpen={ID === val.sectiont_id}
                // state ko value yeha change huni raicha like true or false
                className={
                  "app__collapse app__collapse--gradient " +
                  (ID === val.sectiont_id
                    ? "app__collapse--active UserProfile "
                    : "UserProfile ")
                }
                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                aria-hidden={
                  toggle && ID === val.sectiont_id ? "false" : "true"
                }
                elementType="article"
                render={() => (
                  <React.Fragment>
                    <div>
                      {val.subSection.map((val, i) => {
                        return (
                          <div
                            key={i}
                            className="border-t px-6 py-4 text-sm text-gray-600  font-medium border-gray-300 "
                          >
                            <div>{val.subSection}</div>
                            {/* <div>{val.answer2}</div> */}
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
