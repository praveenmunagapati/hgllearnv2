import React, { useState, useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import CourseOption from "./CourseOption";

const schema = yup.object().shape({
  name: yup.string().required("fullname is required"),
  email: yup
    .string()
    .email("not a valid email address")
    .required("email is required"),
  phone: yup
    .string()
    .required("contact number is required")
    .max(10, "worng number"),
  description: yup.string().required("type your description"),
});

function Inquiry() {
  const [Show, setShow] = useState(false);

  const FormFields = [
    {
      name: "name",
      type: "text",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "phone",
      type: "text",
    },
    {
      name: "course",
     
      as: "select",
      option: [],
    },
    {
      name: "description",
     
      as: "textarea",
    },
    
  ];

  // post data
  const postData = (val, resetForm) => {
    resetForm();

    try {
      axios
        .post("https://himal-hubitbackend.adaptable.app/inquire", val)
        .then((res) => {
          console.log("gfg");
          if (res.status === "200") {
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };
  const [course, setCourse] = useState([]);
  const getData = () => {
    try {
      axios
        .get("https://himal-hubitbackend.adaptable.app/course")
        .then((res) => {
          console.log(res);
          setCourse(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // useEffect(() => {
  //   FormFields[3].option = course;
  // }, [course]);
  let data = [
    {
      _id: "0",
      course_name: "select course name",
    },
  ];
  FormFields[3].option.push(...data, ...course);

  return (
    <>
      <div>
        {console.log(FormFields)}
        {/* send us inquiry button */}
        <div>
          <button
            onClick={() => setShow(true)}
            className="capitalize bg-main text-white fixed top-80 bottom-50 right-0 border-none rounded-lg p-2"
          >
            send us inquiry
          </button>
        </div>
        {/* form body */}
        <div
          className={`border-none rounded-md fixed top-36 bottom-60 right-0 w-72 h-fit bg-white shadow-xl shadow-gray-500 text-center py-5 cursor-pointer ${
            Show
              ? "transition-all duration-500 delay-100 mr-3"
              : "ease-in-out duration-500 delay-100 -mr-96"
          }`}
        >
          <div className="flex justify-between px-5">
            <h1 className="capitalize text-center text-main text-2xl">
              get in touch
            </h1>
            <RiCloseFill
              onClick={() => setShow(false)}
              className="text-2xl text-white border-none rounded-full bg-main -mt-7 -mr-5"
            />
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              course: "",
              description: "",
            }}
            validationSchema={schema}
            onSubmit={(val, { resetForm }) => {
              console.log(val);
              postData(val, resetForm);
              toast.success("submitted succes")
            }}
          >
            {({ handleSubmit, values }) => {
              return (
                <Form
                  action="post"
                  onSubmit={handleSubmit}
                  className="px-5 flex flex-col py-2 "
                >
                  {FormFields.map((val, i) => {
                    if (val.as === "select") {
                      return (
                        <div key={i} className="">
                          <Field
                            as={val.as}
                            placeholder={`enter your ${val.name}`}
                            name={val.name}
                           
                            className="border-none rounded-md py-2 px-6 text-base text-gray-500 bg-gray-200"
                          >
                            {val.option?.map((val, i) => {
                              return (
                                <option
                                  key={i}
                                  value={val._id}
                                  className="text-gray-500 text-xs"
                                >
                                  {val.course_name}
                                </option>
                              );
                            })}
                          </Field>
                          {console.log(values)}
                          <ErrorMessage
                            name={val.name}
                            component={"div"}
                            className="text-red-600 text-xs "
                          />
                        </div>
                      );
                    } else {
                      return (
                        <div key={i} className="flex flex-col py-2 ">
                          <Field
                            as={val.as}
                            type={val.type}
                            placeholder={`enter your ${val.name}`}
                            name={val.name}
                           
                            className="border-none rounded-md text-base text-gray-500 py-2 px-3 bg-gray-200"
                          />
                         
                          {console.log(values)}
                          <ErrorMessage
                            name={val.name}
                            component={"div"}
                            className="text-red-600 text-xs "
                          />
                        </div>
                      );
                    }
                  })}
                  <ToastContainer />
                  <button
                    type="submit"
                    className="w-full h-fit px-8 py-3 mt-5
            bg-main text-white text-[14px] border-none rounded-full capitalize"
                  >
                    send request
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Inquiry;
