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
  const postData = (val,resetForm) => {
    resetForm();
  toast.success("submitted successfully");
    try {
      axios
        .post("https://himal-hubitbackend.adaptable.app/quickcall", val)
        .then((res) => {
          //console.log("gfg");
          if (res.status === "200") {
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };
  const handlechange =()=>{
    console.log(e.target.values);
  };
  return (
    <>
      <div className="w-full bg-[#EEEAEA] mt-7 lg:mt-14 xl:mt-14 xxl:mt-14 py-8  lg:py-24 xl:py-24 xxl:py-24 ">
        <div className="flex justify-evenly ">
          
          <div className="capitalize py-1  text-center">
           <h2 className="text-xl xl:text-2xl xxl:text-2xl font-bold Poppins"> let us give you a <span className="text-main">quick call</span>!</h2>
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
            onSubmit={(val,{resetForm}) => {
              console.log(val);
              postData(val,resetForm);
              //toast.success("submitted successfully!!");
            }}
          >
            {({ handleSubmit,values }) => (
              <Form onSubmit={handleSubmit}>
                <div className="my-2 w-full relative mx-auto">
                  <div className=" flex  gap-4">
                    <div className=" rounded-2xl bg-white ">
                      <IoPerson className="text-xl absolute top-3 text-gray-600" />
                      <Field
                        name="name"
                        type="text"
                        placeholder="Fullname"
                        className="px-6 ml-5  rounded-2xl laptop:h-10 desktop:h-12 capitalize text-sm  w-fit font-normal "
                      />
                      {console.log(values)}
                      <ErrorMessage name="name" component={"div"}
                      className="text-red-500 text-sm"/>
                    </div>
                    {/* phone field */}
                    <div className=" rounded-2xl bg-white">
                      <BsTelephoneFill className="text-lg text-gray-600  " />

                      <Field
                        name="phone"
                        type="text"
                        placeholder="Phone no."
                        className="px-4 py-2 rounded-2xl laptop:h-10 desktop:h-12 capitalize text-sm tablet:text-base desktop:text-lg w-fit font-normal"
                      />
                       <ErrorMessage name="phone" component={"div"}
                      className="text-red-500 text-sm"/>
                    </div>
                  </div>
                  <div className="mt-8 mx-24">
                    <ToastContainer />
                    <button
                      className="h-fit  xl:h-fit xxl:h-12 my-3 sm:my-0 lg:my-0 xl:my-0 md:my-0 xxl:my-0  w-full sm:w-40 md:w- lg:w-44 xl:w-44 xxl:w-44   font-semibold    border-none outline-none rounded-3xl transition-all  duration-300 ease-in-out  mx-18  text-base xl:text-lg xxl:text-xl text-white bg-main capitalize"
                      type="submit"
                    >
                      submit
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
