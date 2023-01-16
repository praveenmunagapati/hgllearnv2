import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
//import HomePageWelcomeSection from "./HomePageWelcomeSectiom";
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
      <div className="Poppins xl:text-xl xxl:text-2xl text-main">
        <h1 className=" font-bold">Who We Are ?</h1>
      </div>
      <div className="grid grid-cols-1 gap-12 mt-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 ">
        <div className="row-start-2 lg:row-start-1  xl:row-start-1 text-justify xxl:row-start-1">
          <div className="text-xs xl:text-sm xxl:text-base text-gray-700 text-justify">
            <p>
              HUB IT is recognized as one of Nepal’s best global skill
              development and IT training centers. The journey of HUB IT started
              in 2017 with a big dream to bring applied education to the mass
              population at an affordable cost. The main purpose of HUB IT is to
              facilitate, with the best IT-related skills.
              <br />
              <br />
              Being the best IT training institute in Nepal, HUB IT is
              determined to combine education and job creation that forms a
              unique ecosystem. Here people are connected globally with a
              purpose and mutual benefit. The courses provided by HUB IT will
              help in education and job creation on a global scale.
              <br />
              <br />
              Here everyone gets the same opportunity to leverage our services
              to learn the skills necessary for making a living in the digital
              workplace.We believe that investing in youth education will help
              the freelancing marketplaces with more skilled and qualified
              workers.
            </p>
          </div>
        </div>
        <div className="">
          {hasWindow && (
            <ReactPlayer
              url="https://youtu.be/sKA1hmPkcTA"
              loop={true}
              controls={false}
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
