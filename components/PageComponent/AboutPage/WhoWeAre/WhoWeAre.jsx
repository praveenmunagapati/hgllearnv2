import React from "react";
import { useRef, useState, useEffect } from "react";
import HomePageWelcomeSection from "./HomePageWelcomeSectiom";

function WhoWeAre() {
  const nextVideo = useRef(null);
  const [show, setshow] = useState(false);
  const play = (e) => {
    setshow(true);
    // nextVideo.play();
  };

  return (
    <div className="px-5 lg:px-20 xl:px-20 xxl:px-20 pt-10 pb-20">
      <div className="Poppins text-5xl font-bold  text-main">Who We Are ?</div>
      <div className="grid grid-cols-1 lg:mt-10 xl:mt-10 xxl:mt-10 gap-12 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 ">
        <div className="row-start-2 lg:row-start-1  xl:row-start-1 text-justify xxl:row-start-1">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            eos quidem, exercitationem commodi cumque ex est quaerat repudiandae
            esse porro asperiores maiores aliquam necessitatibus suscipit,
            laboriosam, nulla et accusantium nobis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Architecto eos quidem, exercitationem
            commodi cumque ex est quaerat repudiandae esse porro asperiores
            maiores aliquam necessitatibus suscipit, laboriosam, nulla et
            accusantium nobis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Architecto eos quidem, exercitationem commodi
            cumque ex est quaerat repudiandae esse porro asperiores maiores
            aliquam necessitatibus suscipit, laboriosam, nulla et accusantium
            nobis.
          </div>
        </div>
        <div className="py-6 lg:py-0 xl:py-0 xxl:py-0">
          {show ? (
            <video
              ref={nextVideo}
              autoPlay={show ? true : false}
              onPause={() => setshow(false)}
              loop
              controls
              style={{
                zIndex: -1,
                height: "100%",
                width: "100%",
              }}
            >
              <source src={"aboutus.mp4"} type="video/mp4" />
            </video>
          ) : (
            <HomePageWelcomeSection play={(e) => play(e)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
