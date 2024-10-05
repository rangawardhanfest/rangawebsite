import React from "react";
import Header from "./Header/Header.jsx";
import WhatWeDo from "./WhatWeDo/WhatWeDo.jsx";
import Sponsors from "./Sponsors/Sponsors";
import AOS from "aos";
import "aos/dist/aos.css";
import Theme from "./Theme/Theme.js";
// import CurrentEvent from "./CurrentEvents/CurrentEvent.js";
// import TeamSection from "./TeamSection/TeamSection.js";
// import CoreCommittee from "./Team/CoreCommittee/CoreCommittee.js";

AOS.init();
function App() {
  return (
    <>
      <Header />
      {/*<TeamSection/>*/}
      
      {/*<CurrentEvent/>*/}
      <Theme />
      <WhatWeDo />
      <Sponsors />
      {/* <Webteam /> */}
    </>
  );
}

export default App;
