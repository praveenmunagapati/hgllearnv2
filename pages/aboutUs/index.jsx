import React from "react";
import HowWeWork from "../../components/PageComponent/AboutPage/HowWeWork/HowWeWork";
import MIssionVision from "../../components/PageComponent/AboutPage/MissionVision/MIssionVision";
import OurAchivements from "../../components/PageComponent/AboutPage/OurAchivements/OurAchivements";
import OurTeamMembers from "../../components/PageComponent/AboutPage/OurTeamMembers/OurTeamMembers";
import WhatClientsSays from "../../components/PageComponent/AboutPage/What ClientsSays/WhatClientsSays";
import WhatWeProvide from "../../components/PageComponent/AboutPage/whatWeProvideSection/WhatWeProvide";
import WhoWeAre from "../../components/PageComponent/AboutPage/WhoWeAre/WhoWeAre";
import FindUsOn from "../../components/PageComponent/HomePage/FindUsOn/finUsOn";
import Layout from "../../HOC/Layout/Layout";

function Aboutus() {
  return (
    <div>
      <Layout>
        <div className=" pt-8 pb-24">
          {/* <div className={styles.container}> */}
          <WhoWeAre />
          <MIssionVision />
          <WhatWeProvide />
          <WhatClientsSays />
          <OurTeamMembers />
          <HowWeWork />
          <OurAchivements />
          <FindUsOn />
          {/* </div> */}
        </div>
      </Layout>
    </div>
  );
}

export default Aboutus;
