import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const schema = yup.object().shape({
  FullName: yup.string().required("fullname is required"),
  email: yup.string().required("email is required"),
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
            <Form onSubmit={handleSubmit}>
              {FormFields.map((val, i) => {
                return (
                  <div key={i}>
                    <label htmlFor={val.name}>{val.name}</label>
                    <Field
                      type={val.type}
                      placeholder="enter your fullname"
                      name={val.name}
                    />
                    <ErrorMessage
                      name={val.name}
                      component={"div"}
                      classname="text-red-600"
                    />
                  </div>
                );
              })}
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default Inquiry;
