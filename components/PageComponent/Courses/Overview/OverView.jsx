import React from "react";
import Leftbanner from "../../../PageComponent/Courses/CourseSection/LeftBanner";

function OverView({ detail, coursetitle, description, id }) {
  console.log(detail, "sfmldkfxgjdfkjv nhbfkjcv");
  return (
    <div>
      <div>
        {detail !== null && (
          <Leftbanner
            image={detail.image}
            coursetitle={coursetitle}
            description={detail.description}
            id={id}
          />
        )}
      </div>
    </div>
  );
}

export default OverView;
