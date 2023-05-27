import { useState } from "react";
import "./App.css";
import IntroSection from "./IntroSection";
import MenuAside from "./MenuAside";
import FormsSection from "./FormsSection";
import NavHeader from "./NavHeader";
import SectionDivider from "./SectionDivider";
import DestinationsContainer from "./DestinationsContainer";

function App({ dividerName }) {
  feather.replace();

  return (
    <body>
      <main id="mainWrapper">
        <NavHeader></NavHeader>
        <IntroSection />
        <SectionDivider dividerName={"discover destinations"}></SectionDivider>
        <DestinationsContainer></DestinationsContainer>
        <SectionDivider
          id="destinationDetails"
          dividerName={"destinations details"}
        ></SectionDivider>
        <div className="destinationDetailContainer">
          <div id="destinationsBox" className="detailBoxL"></div>
          <div className="detailBoxL">
            <div id="destinationsTitelBox" className="detailBoxS"></div>
            <div id="weatherBox" className="detailBoxS"></div>
          </div>
        </div>
        <FormsSection></FormsSection>
      </main>
      <MenuAside></MenuAside>
    </body>
  );
}

export default App;
