import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import {IoPerson} from 'react-icons/io5';
import {BsTelephoneFill} from "react-icons/bs";
import { ToastContainer,toastify } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema=yup.object().shape({
  name: yup.string().required("required!!!"),
  phone: yup.string().min(10,"too short!!").max(10,"too long!!").required("required!!"),
});
function CallSection() {
 return(
  <>
  <div className="w-full bg-gray-300 mt-7 lg:mt-14 xl:mt-14 xxl:mt-14 py-8  lg:py-24 xl:py-24 xxl:py-24 ">
    <div className="flex  w-full">
      <div className="capitalize flex flex-col py-10 text-xl xl:text-2xl xxl:text-3xl font-bold Poppins text">
        let us give you a <span className="text-main">quick call</span>!
        <p className="text-sm xl:text-sm xxl:text-base text-center font-normal text-gray-600 mt-1">leave us your contact number so our administratives can contact you as soon as possible.</p>
      </div>
      <Formik
          initialValues={{
            name: "",
            phone: "",
          }}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit }) => (
            <Form>
              <div className="my-2 tablet:flex  w-full tablet:w-7/12 laptop:w-7/12 desktopL:w-6/12 mx-auto">
                <div className="  w-full flex gap-10  ">
                  <div className="flex border rounded-2xl bg-white ">
                    <IoPerson className="text-xl mt-[3%]  text-gray-600"/>
                  <Field
                    name="name"
                    placeholder="Fullname"
                    className="px-6 py-2 rounded-2xl laptop:h-10 desktop:h-12 capitalize text-sm tablet:text-base desktop:text-lg w-fit font-normal "
                  />
                  </div>
                  {/* phone field */}
                  <div className="flex border-none rounded-2xl bg-white">
                    <BsTelephoneFill className="text-lg text-gray-600 mt-[3.5%] "/>
                 
                  <Field
                    name="phone"
                    placeholder="Phone no."
                    className="px-6 py-2 rounded-2xl laptop:h-10 desktop:h-12 capitalize text-sm tablet:text-base desktop:text-lg w-fit font-normal"
                  />
                 </div>
                </div>
                    <div className="mt-8 mx-24">
                <button
                  className="h-fit  xl:h-fit xxl:h-12 my-3 sm:my-0 lg:my-0 xl:my-0 md:my-0 xxl:my-0  w-full sm:w-40 md:w- lg:w-44 xl:w-44 xxl:w-44   font-semibold    border-none outline-none rounded-3xl
                 transition-all  duration-300 ease-in-out  mx-18  text-base xl:text-lg xxl:text-xl text-white bg-main capitalize"
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
 )
}

export default CallSection;
