import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import {IoPerson} from 'react-icons/io5';
import {BsTelephoneFill} from "react-icons/bs";

function CallSection() {
 return(
  <>
  <div className="w-full bg-gray-300 mt-7 lg:mt-14 xl:mt-14 xxl:mt-14 py-8  lg:py-24 xl:py-24 xxl:py-24 ">
    <div className="flex container w-full">
      <div className="capitalize flex flex-col py-10 text-xl xl:text-2xl xxl:text-3xl font-bold Poppins text-center">
        let us give you a <span className="text-main">quick call</span>!
        <p className="text-sm xl:text-sm xxl:text-base text-center font-normal text-gray-600 mt-1">leave us your contact number so our administratives can contact you as soon as possible.</p>
      </div>

    </div>

  </div>
  </>
 )
}

export default CallSection;
