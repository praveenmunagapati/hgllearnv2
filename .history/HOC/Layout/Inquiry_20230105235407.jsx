import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const schema = yup.object().shape({
  FullName: yup.string().required("fullname is required"),
  email: yup.string().required("email is required"),
  phone: yup
    .string()
    .required("contact number is required")
    .max(10, "invalid number")
    .min(10, "invalid number"),
});

function Inquiry({ Show, setShow }) {
  const FormFields = [
    {
      name: "FullName",
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
  ];
  return (
    <>
      <div
        className={`border-none rounded-md fixed top-40 bottom-50 right-0 w-80 h-fit bg-white shadow-xl shadow-gray-500 text-center py-5 cursor-pointer  ${
          Show ? "-mr-[100%]" : "ease-in-out duration-500 delay-200"
        }`}
      >
        <div className="flex justify-between px-5">
          <h1 className="capitalize text-center text-main text-2xl">
            get in touch
          </h1>
          <RiCloseFill
            onClick={() => {
              setShow(true);
            }}
            className="text-2xl text-white border-none rounded-full bg-main -mt-7"
          />
        </div>
        <Formik
          initialValues={{
            FullName: "",
            email: "",
            phone: "",
          }}
          validationSchema={schema}
          onSubmit={(val) => {
            console.log(val);
          }}
        >
          {({ handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit} className="px-5">
                {FormFields.map((val, i) => {
                  return (
                    <div key={i} className="flex flex-col py-2">
                      {/* <label htmlFor={val.name}>{val.name}</label> */}
                      <Field
                        type={val.type}
                        placeholder={`enter your ${val.name}`}
                        name={val.name}
                        className="border-none rounded-md py-2 bg-gray-200"
                      />
                      <ErrorMessage
                        name={val.name}
                        component={"div"}
                        classname="text-red-600"
                      />
                    </div>
                  );
                })}

                <textarea
                  rows="5"
                  cols="10"
                  className="border-none bg-gray-200 w-full"
                ></textarea>
                <div className=" flex gap-1 px-5">
                  <input type="checkbox" />
                  <p className="text-sm">
                    I agree with the
                    <span className="text-main">Terms and conditions</span> of
                    the institue.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full h-fit px-8 py-3 mt-5
            hover:scale-110 delay-200 duration-1000 transition-all
            bg-main text-white text-[14px] border-none rounded-full capitalize"
                >
                  send request
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}

export default Inquiry;
