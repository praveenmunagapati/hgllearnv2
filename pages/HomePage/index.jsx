import React, { useState } from "react";
import Layout from "../../HOC/Layout/Layout";
import topCourse from "../../components/Resources/Icons/topCourse.svg";
import CertifiedTeacher from "../../components/Resources/Icons/CertifiedTeacher.svg";
import BookandLibraries from "../../components/Resources/Icons/BookandLibraries.svg";
import CompanyMoto from "../../components/PageComponent/HomePage/Companymoto/Moto";
import WelcomePortal from "../../components/PageComponent/HomePage/WelcomePortal/WelcomePortal";
import image1 from "../../components/Resources/images/Rectangle 25.svg";
import image2 from "../../components/Resources/images/Rectangle 26aa.svg";
import images1 from "../../components/Resources/images/python.avif";
import image from "../../components/Resources/images/Group 7.png";
import PopularCourses from "../../components/PageComponent/HomePage/PopularCourses/PopularCourses";
import { TbCertificate } from "react-icons/tb";
import CoursesSchemSchema from "../../components/PageComponent/HomePage/CourseScheme/CoursesScheme";
import Home from "./Home";
import Testimonials from "../../components/PageComponent/HomePage/Testimonials/Testimonials";
import CallSection from "../../components/PageComponent/HomePage/LetsCallSection/CallSection";
import WhoWeAre from "../../components/PageComponent/AboutPage/WhoWeAre/WhoWeAre";
import MIssionVision from "../../components/PageComponent/AboutPage/MissionVision/MIssionVision";
import WhatWeProvide from "../../components/PageComponent/AboutPage/whatWeProvideSection/WhatWeProvide";
import WhatClientsSays from "../../components/PageComponent/AboutPage/What ClientsSays/WhatClientsSays";
function Index() {
  const [Moto, setMoto] = useState([
    {
      icon: <TbCertificate />,
      title: "Top Courses",
      description: `Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer took a galley of type 
             and scrambled it to make a type specimen book. It has survived not only five 
             centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.`,
    },
    {
      icon: <TbCertificate />,
      title: "Certified Teachers",
      description: `Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer took a galley of type 
             and scrambled it to make a type specimen book. It has survived not only five 
             centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.`,
    },
    {
      icon: <TbCertificate />,
      title: "Book and Libraries",
      description: `Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer took a galley of type 
             and scrambled it to make a type specimen book. It has survived not only five 
             centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy 
              text ever since the 1500s, when an unknown printer took a galley of type 
              and scrambled it to make a type specimen book. It has survived not only five 
              centuries, but also the leap into electronic typesetting, remaining essentially
               unchanged.`,
    },
  ]);
  const images = [{ img: image1 }, { img: image2 }];
  const card = [
    {
      img: images1,
      category_name: "programming",
      course_name: "python with artificial intelligenc (ai)",
      duration_type: "3 months",
    },
    {
      img: images1,
      category_name: "programming",
      course_name: "python with artificial intelligenc (ai)",
      duration_type: "3 months",
    },
    {
      img: images1,
      category_name: "programming",
      course_name: "python with artificial intelligenc (ai)",
      duration_type: "3 months",
    },
    {
      img: images1,
      category_name: "programming",
      course_name: "python with artificial intelligenc (ai)",
      duration_type: "3 months",
    },
  ];

  return (
    <div>
      <Layout>
        <Home image={image} />
        <div>
          <div className="grid md:grid-cols-2 gap-5  py-10 md:py-0 lg:gap-0 xl:gap-0 xl:grid-cols-3 xxl:gap-0 xxl:grid-cols-3">
            {Moto?.map((val, i) => {
              return (
                <CompanyMoto
                  key={i}
                  title={val.title}
                  description={val.description}
                  icon={val.icon}
                />
              );
            })}
          </div>
        </div>
        <WelcomePortal images={images} />
        <PopularCourses card={card} />
        <CoursesSchemSchema />
        <Testimonials />
        <CallSection />
        <WhoWeAre />
        <MIssionVision />
        <WhatWeProvide />
        <WhatClientsSays />
      </Layout>
    </div>
  );
}

export default Index;
