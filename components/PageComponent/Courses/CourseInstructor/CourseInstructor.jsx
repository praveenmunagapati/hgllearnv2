import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
//import OurTeamCard from "../../AboutPage/OurTeamMembers/OurTeamCard";
import InstructorCard from "./InstructorCard";
import axios from "../../../../components/UI/Axios/Axios";
// import Router from "next/router";
//import { useEffect, useState } from "react";
function CourseInstructor() {
  const router = useRouter();
  const { id } = router.query;
  const [instructor, setInstructor] = useState([]);
  const getInstructorData = () => {
    // console.log(pid);
    try {
      axios

        .get(`/instructor`)
        .then((res) => {
          console.log(res.data.data);
          setInstructor(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getInstructorData();
  }, []);
  let instructorInfo = [];
  {
    instructor.map((val, i) => {
      instructorInfo.push({
        id: val.id,
        instructor_name: val.name,
        image: val.image,
        post: val.post,
        aboutMe: val.aboutMe,
        skill: val.skill,
        experience: val.experience,
      });
      return (
        <div key={i}>
          {val.instructor_name},{val.image},{val.post},{val.aboutMe},{val.skill}
          ,{val.experience}
        </div>
      );
    });
  }
  console.log(instructorInfo);

  return (
    <div>
      <div className=" px-14 py-16 rounded-sm border">
        {instructor.map((val, i) => {
          return (
            <div key={i}>
              <InstructorCard
                image={val.image}
                name={val.name}
                role={val.role}
                email={val.email}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseInstructor;
