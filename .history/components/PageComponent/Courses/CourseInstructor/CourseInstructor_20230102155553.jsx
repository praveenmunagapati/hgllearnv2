import React from "react";
//import OurTeamCard from "../../AboutPage/OurTeamMembers/OurTeamCard";
import InstructorCard from "./InstructorCard";
function CourseInstructor() {
  const InstructorData = [
    {
      image: "/images/Group 7.png",
      name: "nischal karki",
      role: "instructor",
      email: "nischalkarki1661@gmail.com",
    },
  ];
  return (
    <div>
      <div className=" px-14 py-16 rounded-sm border">
        {InstructorData.map((val, i) => {
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
