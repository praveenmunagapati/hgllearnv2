import React, { useState, useEffect } from "react";
import Image from "next/image";

import Layout from "../../HOC/Layout/Layout";

import axios from "axios";
import FeaturedCourses from "../../components/PageComponent/Courses/FeaturedCourses/FeaturedCourses";
import PopularCourses from "../../components/PageComponent/HomePage/PopularCourses/PopularCourses";
function Course() {
  // const card = [
  //   {
  //     ../../public/images/Rectangle 27.jpg: ../../public/images/Rectangle 27.jpgs1,
  //     category_name: "programming",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  //   {
  //     ../../public/images/Rectangle 27.jpg: ../../public/images/Rectangle 27.jpgs1,
  //     category_name: "account & finance",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  //   {
  //     ../../public/images/Rectangle 27.jpg: ../../public/images/Rectangle 27.jpgs1,
  //     category_name: "Basic Computer",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  //   {
  //     ../../public/images/Rectangle 27.jpg: ../../public/images/Rectangle 27.jpgs1,
  //     category_name: "Graphic Designing",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  //   {
  //     ../../public/images/Rectangle 27.jpg: ../../public/images/Rectangle 27.jpgs1,
  //     category_name: "programming",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  //   {
  //     ../../public/images/Rectangle 27.jpg: ../../public/images/Rectangle 27.jpgs1,
  //     category_name: "account & finance",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  //   {
  //     ../../public/images/Rectangle 27.jpg: ../../public/images/Rectangle 27.jpgs1,
  //     category_name: "Basic Computer",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  //   {
  //     ../../public/images/Rectangle 27.jpg: ../../public/images/Rectangle 27.jpgs1,
  //     category_name: "Graphic Designing",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  //   {
  //     ../../public/images/Rectangle 27.jpg: ../../public/images/Rectangle 27.jpgs1,
  //     category_name: "programming",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  //   {
  //     ../../public/images/Rectangle 27.jpg: ../../public/images/Rectangle 27.jpgs1,
  //     category_name: "account & finance",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  //   {
  //     ../../public/images/Rectangle 27.jpg: ../../public/images/Rectangle 27.jpgs1,
  //     category_name: "Basic Computer",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  //   {
  //     ../../public/images/Rectangle 27.jpg: ../../public/images/Rectangle 27.jpgs1,
  //     category_name: "Graphic Designing",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  // ];
  const [card, setCard] = useState([]);
  const getData = () => {
    try {
      axios
        .get("https://hubitnep.herokuapp.com/course")
        .then((res) => {
          console.log(res.data.data);
          setCard(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <div>
        <div className="relative">
          <div className=" w-full h-80  bg-main ">
            <Image
              src={"/images/Rectangle 27.jpg"}
              layout="fill"
              objectfit="cover"
              alt="Loading ..."
              className=" opacity-75 "
            />
          </div>
          <div className="absolute top-32 sm:top-28   md:top-40 lg:top-40 xl:top-32 xxl:top-40 left-8 sm:left-20 text-white capitalize">
            <div className="font-bold  text-3xl">our courses</div>
            <div className="Poppins text-sm mt-2">home/courses</div>
          </div>
        </div>
        <FeaturedCourses />
        <div className="pb-28">
          <PopularCourses card={card} value="courses" />
        </div>
      </div>
    </Layout>
  );
}

export default Course;
