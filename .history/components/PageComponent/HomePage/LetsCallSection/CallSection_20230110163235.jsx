import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import {}

function CallSection() {
  const FormFields = [
    {
      UserName: "name",
      type: "text",
    },
    {
      UserName: "phone no.",
      type: "number",
    },
  ];
  const CallSectionSchema = yup.object().shape({
    name: yup.string().required("name required"),
    phone: yup
      .string()
      .required(" Required !!!")
      .min(10, "invalid number!!!")
      .max(10, "invalid number!!!"),
  });
  return (
    <div>
      <div className="bg-[#EEEAEA] flex  justify-around mt-7 lg:mt-14 xl:mt-14 xxl:mt-14 py-8  lg:py-24 xl:py-24 xxl:py-24 ">
        <div className="flex flex-col gap-y-6"> 
        <div className="text-xl xl:text-2xl xxl:text-3xl font-bold Poppins text-center">
          Let us Give you a <span className="text-main">Quick Call</span> !
        </div>
        <div className="text-xs xl:text-sm xxl:text-base text-center text-gray-600 mt-1">
          Leave us your number and our representatives will connect with you
          soon!!
        </div>
        </div> 
        <Formik
          initialValues={{
            name: "",
            phone: "",
          }}
          validationSchema={CallSectionSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="my-4 tablet:flex m  w-11/12 tablet:w-7/12 laptop:w-7/12 desktopL:w-6/12 mx-auto">
                <div className="  w-full  ">
                  <Field
                    name="name"
                    placeholder="Fullname"
                    className="px-4 py-3 rounded-lg laptop:h-10 desktop:h-12 capitalize text-sm tablet:text-base desktop:text-lg w-fit font-normal border"
                  />
                  {errors.name && touched.name ? (
                    <div className="text-red-500 mt-1 text-xs xl:text-sm xxl:text-base">
                      {errors.name}
                    </div>
                  ) : null}
                  {/* phone field */}
                  <Field
                    name="phone"
                    placeholder="Phone no."
                    className="px-4 py-3 rounded-lg laptop:h-10 desktop:h-12 capitalize text-sm tablet:text-base desktop:text-lg w-fit font-normal border"
                  />
                  {errors.phone && touched.phone ? (
                    <div className="text-red-500 mt-1 text-xs xl:text-sm xxl:text-base">
                      {errors.phone}
                    </div>
                  ) : null}
                </div>

                <button
                  className="h-8 xl:h-10 xxl:h-12 my-3 sm:my-0 lg:my-0 xl:my-0 md:my-0 xxl:my-0  w-full sm:w-40 md:w-44 lg:w-44 xl:w-44 xxl:w-44   font-semibold    border-none outline-none rounded-3xl
                 transition-all  duration-300 ease-in-out  mx-auto  text-base xl:text-lg xxl:text-xl text-white bg-main capitalize"
                  type="submit"
                >
                  submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CallSection;
