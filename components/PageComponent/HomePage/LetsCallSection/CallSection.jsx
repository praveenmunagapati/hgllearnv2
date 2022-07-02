import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
function CallSection() {
  const CallSectionSchema = yup.object().shape({
    name: yup.string().required(" Required !!!"),
  });
  return (
    <div>
      <div className="bg-gray-100 flex flex-col justify-center  my-28 pt-16 pb-12">
        <div className="text-4xl font-bold Poppins text-center my-2">
          Let us Give you a <span className="text-main"> Call</span> !
        </div>
        <div className="text-xs font-light text-center my-2 text-gray-600 Poppins">
          {" "}
          leave us your number and our representatives will connect with you{" "}
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
              <div
                className=" my-8 flex w-11/12 lg:w-9/12 xl:w-7/12 xxl:w-6/12 mx-auto
              "
              >
                <div className="  w-full ">
                  <Field
                    name="name"
                    // placeholder="name"
                    className="h-12   px-5 capitalize text-sm  w-full
                      font-normal border"
                  />
                  {/* md:w-11/12 lg:w-11/12 xl:w-11/12  xxl:w-11/12  */}
                  {errors.name && touched.name ? (
                    <div className="text-red-500 my-2 text-xs">
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
                    className="h-12 w-44  font-semibold    border-none outline-none 
                hover:bg-orange-600    transition-all  duration-300 ease-in-out  mx-auto  text-base text-white 
    bg-main "
                    type="submit"
                  >
                    {/* bg-gradient-to-r from-cyan-500 via-red-500 to-main */}
                    Connect with me
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
