import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

function CallSection() {
  const CallSectionSchema = yup.object().shape({
    name: yup.string().required(" Required !!!"),
  });
  return (
    <div>
      <div className="bg-gray-100 flex flex-col justify-center mt-14 py-8 ">
        <div className="text-xl xl:text-2xl xxl:text-3xl font-bold Poppins text-center">
          Let us Give you a <span className="text-main"> Call</span> !
        </div>
        <div className="text-xs xl:text-sm xxl:text-base text-center text-gray-600 mt-1">
          Leave us your number and our representatives will connect with you
          soon!!
        </div>
        <Formik
          initialValues={{
            name: "",
          }}
          validationSchema={CallSectionSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="my-4 sm:flex md:flex lg:flex xl:flex xxl:flex  w-11/12 lg:w-7/12 xl:w-7/12 xxl:w-6/12 mx-auto">
                <div className="  w-full ">
                  <Field
                    name="name"
                    className="px-2 h-8 xl:h-10 xxl:h-12 capitalize text-sm xl:text-base xxl:text-lg w-full font-normal border"
                  />
                  {errors.name && touched.name ? (
                    <div className="text-red-500 mt-1 text-xs xl:text-sm xxl:text-base">
                      {errors.name}
                    </div>
                  ) : null}
                </div>

                <div
                  className="
                border-none outline-none
                   "
                >
                  <button
                    className="h-8 xl:h-10 xxl:h-12 my-3 sm:my-0 lg:my-0 xl:my-0 md:my-0 xxl:my-0  w-full sm:w-40 md:w-44 lg:w-44 xl:w-44 xxl:w-44   font-semibold    border-none outline-none
                hover:bg-orange-600    transition-all  duration-300 ease-in-out  mx-auto  text-base xl:text-lg xxl:text-xl text-white bg-main capitalize"
                    type="submit"
                  >
                    {/* bg-gradient-to-r from-cyan-500 via-red-500 to-main */}
                    Connect with us
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CallSection;
