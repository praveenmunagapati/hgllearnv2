import React from "react";

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

function Inquiry() {
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
            <Form onSubmit={handleSubmit} className="h-[70vh]">
              {FormFields.map((val, i) => {
                return (
                  <div key={i} className="space-y-6">
                    <label htmlFor={val.name}>{val.name}</label>
                    <Field
                      type={val.type}
                      placeholder={`enter your ${val.name}`}
                      name={val.name}
                      className="border-2 rounded-xl border-black"
                    />
                    <ErrorMessage
                      name={val.name}
                      component={"div"}
                      classname="text-red-600"
                    />
                  </div>
                );
              })}
              <div></div>
              <button
                type="submit"
                className="w-fit h-fit px-8 py-3
            hover:scale-110 delay-200 duration-1000 transition-all
            bg-green-500 text-white border-none rounded-md"
              >
                {" "}
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default Inquiry;
