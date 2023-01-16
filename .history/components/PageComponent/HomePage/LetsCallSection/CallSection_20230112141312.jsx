import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import {IoPerson} from 'react-icons/io5';
import {BsTelephoneFill} from "react-icons/bs";

function CallSection() {
 return(
  <>
  <div className="w-full bg-gray-400">
    <div className="flex justify-around w-full">
      <div className="capitalize flex flex-col py-10">
        let us give you a <span>quick call</span>!
        <p>leave us your contact number so our represen</p>
      </div>

    </div>

  </div>
  </>
 )
}

export default CallSection;
