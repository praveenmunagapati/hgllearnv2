import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import HomePageWelcomeSection from "./HomePageWelcomeSectiom";
// import ReactPlayer from "react-player";

function WhoWeAre() {
  // const nextVideo = useRef(null);
  // const [show, setshow] = useState(false);
  // const play = (e) => {
  //   setshow(true);
  // };
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className="px-4 lg:px-20 xl:px-24 xxl:px-32 pt-8 pb-20">
      <div className="Poppins text-lg xl:text-xl xxl:text-2xl font-bold  text-main">
        Who We Are ?
      </div>
      <div className="grid grid-cols-1 gap-12 mt-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 ">
        <div className="row-start-2 lg:row-start-1  xl:row-start-1 text-justify xxl:row-start-1">
          <div className="text-xs xl:text-sm xxl:text-base text-gray-700 text-justify">
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
        <div className="">
          {hasWindow && (
            <ReactPlayer
              url="https://www.youtube.com/watch?v=wWgIAphfn2U"
              loop={true}
              controls={true}
              width="100%"
              height="320px"
            />
          )}
          {/* {show ? (
            <video
              ref={nextVideo}
              autoPlay={show ? true : false}
              onPause={() => setshow(false)}
              loop
              controls
              style={{
                zIndex: -1,
                height: "80%",
                width: "100%",
              }}
            >
              <source src={"aboutus.mp4"} type="video/mp4" />
            </video>
          ) : (
            <HomePageWelcomeSection play={(e) => play(e)} />
          )} */}
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
