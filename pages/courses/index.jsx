import React from "react";
import Buttom from "../../components/PageComponent/Courses/CourseSection/Buttom";
import Leftbanner from "../../components/PageComponent/Courses/CourseSection/LeftBanner";
import ScheduleSection from "../../components/PageComponent/Courses/UpcomingSchedule/ScheduleSection";
import Layout from "../../HOC/Layout/Layout";
import RelatedCourseCard from "../../components/PageComponent/Courses/RelatedCourse/RelatedCourseSection.jsx";
import EnquiryForm from "../../components/PageComponent/Courses/UpcomingSchedule/EnquiryForm";
const index = () => {
  return (
    <Layout>
      <div className="  lg:grid  lg:grid-cols-3 xl:grid  xl:grid-cols-3 xxl:grid  xxl:grid-cols-3 md:px-5 lg:px-20 xl:px-20  xxl:px-20   gap-4">
        <div className=" col-span-2 ">
          <div>
            <Leftbanner />
          </div>
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

export default index;
