import React from "react";
import Leftbanner from "../../../PageComponent/Courses/CourseSection/LeftBanner";

function OverView({ image, coursetitle, description }) {
  return (
    <div>
      <div>
        {image !== null && (
          <Leftbanner
            image={image}
            coursetitle={coursetitle}
            description={description}
          />
        )}
      </div>
    </div>
  );
}

export default OverView;
