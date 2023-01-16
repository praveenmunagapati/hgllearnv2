import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { IoPerson } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { toast, ToastContainer, toastify } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  name: yup.string().required("required!!!"),
  phone: yup
    .string()
    .min(10, "too short!!")
    .max(10, "too long!!")
    .required("required!!"),
});
function CallSection() {
  const postData = (val, resetForm) => {
    resetForm();
    toast.success("submitted successfully");
    try {
      axios.post("https://himal-hubitbackend.adaptable.app/quickcall", val);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full bg-[#EEEAEA] mt-7 lg:mt-14 xl:mt-14 xxl:mt-14 py-8  lg:py-24 xl:py-24 xxl:py-24 ">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2">
          <div className="capitalize py-1  text-center">
            <h2 className="text-xl xl:text-2xl xxl:text-2xl font-bold Poppins">
              {" "}
              let us give you a <span className="text-main">quick call</span>!
            </h2>
            <p className="text-sm xl:text-sm xxl:text-base text-center font-normal text-gray-600 mt-8">
              leave us your contact number so our administratives can contact
              you as soon as possible.
            </p>
          </div>
          <Formik
            initialValues={{
              name: "",
              phone: "",
            }}
            validationSchema={schema}
            onSubmit={(val, { resetForm }) => {
              console.log(val);
              postData(val, resetForm);
              //toast.success("submitted successfully!!");
            }}
          >
            {({ handle,val }) => (
              <Form onSubmit={}>
                <div className="flex flex-col ">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xxl:grid-cols-2 mx-5 ">
                    <div className="flex relative ">
                      <IoPerson className="text-xl absolute top-3 left-4" />
                      <Field
                        type="text"
                        name="name"
                        placeholder="fullname"
                        className="border-none py-2 px-5 rounded-2xl text-center"
                      />
                      <ErrorMessage
                        name="name"
                        component={"div"}
                        className="text-sm text-red-500"
                      />
                    </div>
                    <div className=" flex relative">
                      <BsTelephoneFill className="text-xl absolute top-3 left-4" />
                      <Field
                        type="text"
                        name="phone"
                        placeholder="phone no."
                        className="border-none py-2 px-5 rounded-2xl text-center"
                      />
                      <ErrorMessage
                        name="phone"
                        component={"div"}
                        className="text-sm text-red-500"
                      />
                    </div>
                  </div>
                  <div className="mx-5 md:mx-[14rem] lg:mx-[14rem] xl:mx-[14rem] xxl:mx-[14rem] ">
                    <ToastContainer />
                    <button className="bg-main text-white font-bold text-base rounded-3xl px-10 py-2 ml-5 mt-5 w-fit ">
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default CallSection;
