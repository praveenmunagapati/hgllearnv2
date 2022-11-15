import { Formik, Form } from "formik";
import React, { useState } from "react";
import { IoOptions } from "react-icons/io5";
import * as yup from "yup";
import { MultiSelect } from "react-multi-select-component";

function NameOfCourseToEnroll({
  SelectData,
  errors,
  touched,
  values,
  Field,
  description,
}) {
  const [selected, setSelected] = useState([]);
  const [appearBorder, setAppearBorder] = useState(false);
  //   const MultiSelectCourses = (e) => {
  //     setSelected(e.target.value);
  //     setAppearBorder(true);
  //   };
  return (
    <div className="mb-16">
      {" "}
      <div className="bg-main w-full p-2 rounded-t-xl mb-8 Poppins tracking-widest text-center uppercase text-2xl  text-white font-medium">
        name of course/s to enroll:
      </div>
      <div className="flex justify-between  px-8">
        <div className="flex gap-48">
          {SelectData.map((val, i) => {
            if (val.Shift) {
              return (
                <div>
                  <div className="  flex items-center-2 border border-main rounded-sm h-9  pr-2 ">
                    <div
                      className="Poppins flex justify-center items-center bg-[#f1aad4]  w-fit text-gray-800  px-2 py-1
                rounded-sm outline-none border-none text-sm uppercase"
                    >
                      {" "}
                      {val.label}
                    </div>
                    <div className=" flex ml-4 gap-4 items-center">
                      {val.Shift.map((val, i) => {
                        return (
                          <div className="flex gap-2" key={i}>
                            <div>{val.label}</div>
                            <Field
                              type={val.type}
                              value={val.value}
                              name={val.apikey}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div
                    className={`text-red-400  ${
                      errors[val.apikey] && touched[val.apikey]
                        ? " my-2  bg-red-100"
                        : ""
                    }  px-2 py-1 text-xs font-medium`}
                  >
                    {errors[val.apikey] && touched[val.apikey] ? (
                      <div>{errors[val.apikey]}</div>
                    ) : null}
                  </div>
                </div>
              );
            } else {
              return (
                <div>
                  <Field
                    as={"select"}
                    // onChange={(e) => MultiSelectCourses(e)}
                    name={val.apikey}
                    className="bg-[#f1aad4] w-fit text-gray-800 h-9 capitalize px-2 py-1
          rounded-sm outline-none border-none"
                  >
                    {val?.options?.map((val, i) => {
                      console.log(val);

                      return <option key={i}>{val?.course_name}</option>;
                    })}
                  </Field>
                  {/* <div
                    className={`${
                      appearBorder
                        ? "border-2 border-main px-4 py-2 w-fit "
                        : ""
                    }`}
                  >
                    {selected}
                  </div> */}
                  <div
                    className={`text-red-400  ${
                      errors[val.apikey] && touched[val.apikey]
                        ? " my-2  bg-red-100"
                        : ""
                    }  px-2 py-1 text-xs font-medium`}
                  >
                    {errors[val.apikey] && touched[val.apikey] ? (
                      <div>{errors[val.apikey]}</div>
                    ) : null}
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="border-2 border-[#f1aad4] w-fit ">
          <div
            className="bg-[#f1aad4]  w-fit Poppins text-gray-800 h-9 capitalize px-[8.5px] py-1
outline-none border-none"
          >
            other courses previously taken
          </div>
          <div className=" h-[120px]  ">
            <textarea
              name={description}
              className="bg-gray-200 outline-none border-none w-full    "
              rows="5"
              cols="30"
              placeholder="message here!!!"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameOfCourseToEnroll;
