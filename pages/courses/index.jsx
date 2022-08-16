import React from "react";
import Image from "next/image";
import image from "../../components/Resources/images/Rectangle 27.jpg";
import Layout from "../../HOC/Layout/Layout";
import images1 from "../../components/Resources/images/python.avif";

import FeaturedCourses from "../../components/PageComponent/Courses/FeaturedCourses/FeaturedCourses";
import PopularCourses from "../../components/PageComponent/HomePage/PopularCourses/PopularCourses";
function Course() {
  const card = [
    {
      img: images1,
      category_name: "programming",
      course_name: "python with artificial intelligence (AI)",
      duration_type: "3 months",
    },
    {
      img: images1,
      category_name: "account & finance",
      course_name: "python with artificial intelligence (AI)",
      duration_type: "3 months",
    },
    {
      img: images1,
      category_name: "Basic Computer",
      course_name: "python with artificial intelligence (AI)",
      duration_type: "3 months",
    },
    {
      img: images1,
      category_name: "Graphic Designing",
      course_name: "python with artificial intelligence (AI)",
      duration_type: "3 months",
    },
    {
      img: images1,
      category_name: "programming",
      course_name: "python with artificial intelligence (AI)",
      duration_type: "3 months",
    },
    {
      img: images1,
      category_name: "account & finance",
      course_name: "python with artificial intelligence (AI)",
      duration_type: "3 months",
    },
    {
      img: images1,
      category_name: "Basic Computer",
      course_name: "python with artificial intelligence (AI)",
      duration_type: "3 months",
    },
    {
      img: images1,
      category_name: "Graphic Designing",
      course_name: "python with artificial intelligence (AI)",
      duration_type: "3 months",
    },
    {
      img: images1,
      category_name: "programming",
      course_name: "python with artificial intelligence (AI)",
      duration_type: "3 months",
    },
    {
      img: images1,
      category_name: "account & finance",
      course_name: "python with artificial intelligence (AI)",
      duration_type: "3 months",
    },
    {
      img: images1,
      category_name: "Basic Computer",
      course_name: "python with artificial intelligence (AI)",
      duration_type: "3 months",
    },
    {
      img: images1,
      category_name: "Graphic Designing",
      course_name: "python with artificial intelligence (AI)",
      duration_type: "3 months",
    },
  ];
  return (
    <Layout>
      <div>
        <div className="relative">
          <div className="w-full bg-main ">
            <Image
              src={image}
              height={13}
              width={45}
              layout="responsive"
              objectFit="cover"
              // objectPosition="center"
              placeholder="blur"
              blurDataURL={image}
              alt="Loading ..."
              className=" opacity-75 "
            />
          </div>
          <div className="absolute z-50  top-40 left-20 text-white capitalize">
            <div className="font-bold  text-3xl">our courses</div>
            <div className="Poppins text-sm mt-2">home/courses</div>
          </div>
        </div>
        <FeaturedCourses />
        <div className="pb-28">
          <PopularCourses card={card} />
        </div>
      </div>
    </Layout>
  );
}

export default Course;
