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
      <div className="border-2 border-black fixed top-40 bottom-50 right-0 w-[20vw] h-[60vh] bg-slate-300 text-center py-24 space-y-7">
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
              <Form onSubmit={handleSubmit} className="">
                {FormFields.map((val, i) => {
                  return (
                    <div key={i} className="">
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

                <button
                  type="submit"
                  className="w-fit h-fit px-8 py-3
            hover:scale-110 delay-200 duration-1000 transition-all
            bg-green-500 text-white border-none rounded-full capitalize"
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
