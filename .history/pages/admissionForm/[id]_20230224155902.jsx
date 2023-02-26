import { Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import Layout from "../../HOC/Layout/Layout";
import Image from "next/image";
import bg from "../../public/images/Rectangle 35.png";
import * as Yup from "yup";
import NameOfCourseToEnroll from "../../components/PageComponent/NameOfCourseToEnroll/NameOfCourseToEnroll";
import axios from "axios";

function AdmissionForm(){
const [Course,setCourse] = useState(false);
cosnt [clickedCheckBox,setclickedCheckBox] = useState(false);
const getCourse = ()=>{
  try{
    axios
    .get("https://hubitbackend.onrender.com/course")
    .then((res)=>{
      console.log(res);
      setCourse(res.data.data);
    })
    .catch((err)=>{
      console.log(err);
    });
  }
    catch(error){
      console.log(error);
    }
  };

useEffect(()=>{
  getCourse();
},[]);
let courseName = [];
{
  courseName.map((val,i)=>{
    courseName.push({id: val.id, course_name: val.course_name});
    return(
      <div key={i}>{val.course_name}</div>
    );
  });
}

const admissionForm = [
  {
    label: "fullname:",
    type: "text",
    apikey: "fullname",
    placeholder: "Enter your fullname",
  },
  {
    label: "address:",
    type: "text",
    apikey: "address",
    placeholder: "Enter your address",
  },
  {
    label: "date of birth:",
    type: "date",
    apikey: "dob",
  },
  {
    label: "email:",
    type: "email",
    apikey: "email",
    placeholder: "enter your email",
  },
  {
    label: "phone no.",
    type: "text",
    apikey: "phone_no",
    placeholder: "enter your phone number",
  },
];


const AdmissionFormSchema= yup.object().shape({
  fullname: yup.string().min(2,"Too short name!").max(25,"Too long name!").required("required"),
  address: yup.string().required("required"),
  dob: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  phone_no : yup.string().required("required"),
});

return(
  <>
  <Layout>
  <div className="relative">
    <div className=" w-full h-80  bg-main ">
      <Image
        src={bg}
        layout="fill"
        objectfit="cover"
        alt="Loading ..."
        className=" opacity-75 "
      />
    </div>
    <div className="absolute top-20 /0 left-8 sm:left-20 text-white capitalize">
      <div className="font-bold  text-3xl"> Student Admission Form</div>
      <div className="Poppins text-xs w-2/3 font-light mt-2 ">
        Enter your admission information below to enroll to your interested
        IT Course at your comfort, we have made available the Online
        Admission Form below!
      </div>
      <div className="Poppins text-sm mt-2">home/courses</div>
      {/* <button className="px-6 py-2 bg-[#FACC15] Poppins text-black font-medium text-xs mt-2 rounded-full">View Form</button> */}
    </div>
  </div>
  </div>
      <div className="px-2">
        <div className="  rounded-t-2xl">
          <div className="flex flex-col w-full justify-center items-center pb-5 pt-16 gap-2">
            <div className=" w-full   Poppins  text-center uppercase text-xl  text-black font-medium">
              {" "}
              student enrollment registration form:
            </div>
            {/* <div className="text-xs Poppins capitalize ">
              <p>
                Fill out the form carefully for registration. All Asterisks (*)
                fields are mandatory to fill-up.
              </p>
            </div> */}
            <div className="flex bg-[#EEEAEA] py-2 px-4 rounded-full text-xs gap-8 mt-5 Poppins">
              <button>Personel Information</button>
              <button>Payment Option</button>
              <button>Review Details</button>
            </div>
          </div>
          <Formik
            initialValues={{
              full_name: "",
              address: "",
              phone_no: "",
              dob: "",
              guardians_name: "",
              guardians_phone_no: "",
              email: "",
              gender: "",
              level_of_education: "",
              school_or_clg_name: "",
              image: "",
              shifts: "",
              course_names: "",
              description: "",
            }}
            validationSchema={AdmissionFormSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              //   alert(5);
              resetForm();
              Submit(values);
            }}
          >
          {({ errors, touched, handleSubmit, values, setFieldValue }) => (
              <div>
                <Form onSubmit={handleSubmit}>
                  <div className="flex flex-col  px-7 mb-16">
                    <div className={`  flex justify-center  `}>
                      {FormImage.map((val, i) => {
                        let AllImage = val.apikey;
                        return (
                          <div key={i}>
                            <div className=" capitalize font-semibold text-lg text-gray-700">
                              <label
                                className="cursor-pointer "
                                htmlFor={val.apikey}
                              >
                                {val.label}
                              </label>
                            </div>
                            <div className="   ">
                              <label
                                htmlFor={val.apikey}
                                className={`cursor-pointer`}
                              >
                                <Image
                                  objectFit="cover"
                                  objectPosition={"top"}
                                  src={
                                    values[val.apikey]
                                      ? URL.createObjectURL(values[val.apikey])
                                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeH9llEv5AAEqHYkOwwIjcJa0VFPVERRUuw&usqp=CAU"
                                  }
                                  alt="Loading ..."
                                  layout="responsive"
                                  height={100}
                                  width={100}
                                  className="m-auto h-60 laptop:h-80 rounded-full "
                                />
                              </label>
                            </div>
                            <div className="">
                              {" "}
                              <label
                                htmlFor={val.apikey}
                                className="px-4   capitalize cursor-pointer  border-none outline-none   text-black font-medium "
                              >
                                choose your profile
                              </label>
                            </div>
                            <div className="hidden">
                              <input
                                name={val.apikey}
                                id={val.apikey}
                                type={val.type}
                                accept={val.accept}
                                onChange={(e) => {
                                  let file = e.target.files[0];
                                  console.log(file, AllImage);
                                  setFieldValue(AllImage, e.target.files[0]);
                                }}
                              />
                            </div>
                            <div
                              className={`${
                                errors[val.apikey] && touched[val.apikey]
                                  ? "bg-red-100 my-2"
                                  : ""
                              } text-red-400 py-1 px-2 text-xs font-medium`}
                            >
                              {errors[val.apikey] && touched[val.apikey]
                                ? errors[val.apikey]
                                : ""}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
</>
  );


}