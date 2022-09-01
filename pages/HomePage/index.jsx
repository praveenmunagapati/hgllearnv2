import React, { useState, useEffect } from "react";
import WhyHub from "../../components/PageComponent/HomePage/WhyHub/whyHub";
import CompanyMoto from "../../components/PageComponent/HomePage/Companymoto/Moto";
import WelcomePortal from "../../components/PageComponent/HomePage/WelcomePortal/WelcomePortal";
import image1 from "../../components/Resources/images/Rectangle 25.svg";
import image2 from "../../components/Resources/images/Rectangle 26aa.svg";
import images1 from "../../components/Resources/images/python.avif";
import image from "../../components/Resources/images/Group 7.png";
import PopularCourses from "../../components/PageComponent/HomePage/PopularCourses/PopularCourses";
import { TbCertificate } from "react-icons/tb";
import Home from "./Home";
import CallSection from "../../components/PageComponent/HomePage/LetsCallSection/CallSection";
import PlacementPartners from "../../components/PageComponent/HomePage/PlacementPartners/placementPartners";
import axios from "axios";
import WhatClientsSays from "../../components/PageComponent/AboutPage/What ClientsSays/WhatClientsSays";
import SuccessStories from "../../components/PageComponent/HomePage/SuccessStories/SuccessStories";
import FindUsOn from "../../components/PageComponent/HomePage/FindUsOn/finUsOn";
function Index() {
  const [card, setCard] = useState([]);
  const [Moto, setMoto] = useState([
    {
      icon: <TbCertificate />,
      title: "Top Courses",
      description: `Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & many more), and personal development and productivity.`,
    },
    {
      icon: <TbCertificate />,
      title: "Certified Instructor",
      description: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only five
      centuries Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only five
      centuries`,
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
  // const card = [
  //   {
  //     img: images1,
  //     category_name: "programming",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  //   {
  //     img: images1,
  //     category_name: "account & finance",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  //   {
  //     img: images1,
  //     category_name: "Basic Computer",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  //   {
  //     img: images1,
  //     category_name: "Graphic Designing",
  //     course_name: "python with artificial intelligence (AI)",
  //     duration_type: "3 months",
  //   },
  // ];
  const getData = () => {
    try {
      axios
        .get("https://hubitnep.herokuapp.com/course")
        .then((res) => {
          console.log(res);
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
    <div className="">
      <Home image={image} />
      <div className="bg-white xxl:h-96">
        <div
          className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 
         gap-5  py-10 md:py-0 lg:gap-[1px] xl:gap-0 xl:grid-cols-3 xxl:gap-0 xxl:grid-cols-3"
        >
          {Moto.map((val, i) => {
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
      <div className=" pt-8 pb-20">
        {" "}
        <PopularCourses card={card} value="onlyTag" />
      </div>
      <WhyHub />
      <WhatClientsSays />
      <PlacementPartners />
      <SuccessStories />
      <FindUsOn />
      <CallSection />
    </div>
  );
}

export default Index;
