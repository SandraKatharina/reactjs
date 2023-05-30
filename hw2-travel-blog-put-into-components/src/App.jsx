import { useState } from "react";
import "./App.css";
import IntroSection from "./IntroSection";
import MenuAsideHide from "./MenuAsideHide";
import FormsSection from "./FormsSection";
import NavHeader from "./NavHeader";
import SectionDivider from "./SectionDivider";
import DestinationsPreview from "./DestinationsPreview";
import DestinationsDetails from "./DestinationsDetails";

function App({ dividerName, noDestDetails, showDestDetails }) {
  feather.replace();
  const [destinationsDetails, setDestinationsDetails] = useState(false);
  const [menuAsidePos, setMenuAsidePos] = useState(<MenuAsideHide />);

  return (
    <body>
      <main id="mainWrapper">
        <NavHeader menuHidden={menuAsidePos} menuShow={setMenuAsidePos} />
        <IntroSection />
        <SectionDivider dividerName={"discover destinations"} />
        <DestinationsPreview />
        <SectionDivider dividerName={"destinations details"} />
        <DestinationsDetails
          noDestDetails={destinationsDetails}
          showDestDetails={setDestinationsDetails}
        />
        <FormsSection />
      </main>
      <MenuAsideHide />
    </body>
  );
}

export default App;
