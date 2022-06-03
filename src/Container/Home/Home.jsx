import React from "react";
import ImagePortion from "./ImagePortion/ImagePortion";
import Award from "./AwardPortion/AwardPortion";
import About from "./AboutPortion/About";
import Enzyme from "./Enzyme360Number/Enzyme";
import Benefits from "./BenefitsPortion/Benefits";
const Home=()=>{
    return <>
      <div className="w-full">
      <ImagePortion/>
          <Award/>
          <About/>
          <Enzyme/>
          <Benefits/>
      </div>
    </>
}
export default Home;