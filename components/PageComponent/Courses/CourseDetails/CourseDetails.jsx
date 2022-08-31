import React, { useEffect, useState } from "react";
import Buttom from "../../../PageComponent/Courses/CourseSection/Buttom";
import ScheduleSection from "../../../PageComponent/Courses/UpcomingSchedule/ScheduleSection";
import Layout from "../../../../HOC/Layout/Layout";
import RelatedCourseCard from "../../../PageComponent/Courses/RelatedCourse/RelatedCourseSection.jsx";
import EnquiryForm from "../../../PageComponent/Courses/UpcomingSchedule/EnquiryForm";
import { useRouter } from "next/router";
import OverView from "../Overview/OverView";
import CourseCuriculum from "../Curiculum/CourseCuriculum";
import CourseInstructor from "../CourseInstructor/CourseInstructor";
const CourseDetails = () => {
  const router = useRouter();
  const [Image, setImage] = useState(null);
  const [description, setDes] = useState(null);
  const [active, setActive] = useState("overview");
  useEffect(() => {
    if (router.isReady) {
      const { image, description } = router.query;
      console.log(image, router.query);
      setImage(image);
      setDes(description);
    }
  }, [router.isReady, router.query]);
  const tabs = [
    { title: "overview" },
    { title: "curiculum" },
    { title: "instructor" },
    { title: "review" },
  ];
  const Tabs = () => {
    switch (active) {
      case "overview":
        return <OverView image={Image} description={description} />;
        break;
      case "curiculum":
        return <CourseCuriculum />;
        break;
      case "instructor":
        return <CourseInstructor />;
        break;
      case "review":
        return 4;
        break;

      default:
        break;
    }
  };
  return (
    <Layout>
      <div className=" px-5 pt-5 md:px-5 lg:px-20 xl:px-20  xxl:px-20 ">
        <div
          className="   lg:grid  lg:grid-cols-3 xl:grid  xl:grid-cols-3 xxl:grid 
       xxl:grid-cols-3   gap-12"
        >
          <div className=" col-span-2 ">
            <div className="my-5 bg-gray-100    flex gap-4">
              {tabs.map((val, i) => {
                return (
                  <div
                    key={i}
                    className={` ${
                      active === val.title ? "text-white tipDown " : ""
                    } capitalize px-4 py-2 cursor-pointer`}
                    onClick={() => setActive(val.title)}
                  >
                    {val.title}
                  </div>
                );
              })}
            </div>
            {Tabs()}
            <div className="">
              <Buttom />
              <RelatedCourseCard />
            </div>
          </div>
          <div>
            <ScheduleSection />
            <EnquiryForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetails;
