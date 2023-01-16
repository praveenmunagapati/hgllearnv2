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
          {({handlesubmit})=>(
            <Form method="post" onSubmit={handlesubmit}>
              <div>
                <div>
                   fiel
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
