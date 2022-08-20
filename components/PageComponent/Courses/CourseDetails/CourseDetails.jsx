import React, { useEffect, useState } from "react";
import Buttom from "../../../PageComponent/Courses/CourseSection/Buttom";
import Leftbanner from "../../../PageComponent/Courses/CourseSection/LeftBanner";
import ScheduleSection from "../../../PageComponent/Courses/UpcomingSchedule/ScheduleSection";
import Layout from "../../../../HOC/Layout/Layout";
import RelatedCourseCard from "../../../PageComponent/Courses/RelatedCourse/RelatedCourseSection.jsx";
import EnquiryForm from "../../../PageComponent/Courses/UpcomingSchedule/EnquiryForm";
import { useRouter } from "next/router";
const CourseDetails = () => {
  const router = useRouter();
  const [Image, setImage] = useState(null);
  const [Des, setDes] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const { image, description } = router.query;
      console.log(image, router.query);
      setImage(image);
      setDes(description);
    }
  }, [router.isReady, router.query]);

  return (
    <Layout>
      <div
        className=" px-5 pt-5  lg:grid  lg:grid-cols-3 xl:grid  xl:grid-cols-3 xxl:grid 
       xxl:grid-cols-3 md:px-5 lg:px-20 xl:px-20  xxl:px-20   gap-12"
      >
        <div className=" col-span-2 ">
          <div>{Image !== null && <Leftbanner image={Image} Des={Des} />}</div>
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
    </Layout>
  );
};

export default CourseDetails;
