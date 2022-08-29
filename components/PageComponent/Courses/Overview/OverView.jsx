import React from "react";
import Leftbanner from "../../../PageComponent/Courses/CourseSection/LeftBanner";

function OverView({ image, description }) {
  return (
    <div>
      <div>
        {image !== null && (
          <Leftbanner image={image} description={description} />
        )}
      </div>
    </div>
  );
}

export default OverView;
