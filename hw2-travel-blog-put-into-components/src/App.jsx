import { useState, useEffect } from "react";
import "./App.css";
import IntroSection from "./IntroSection";
import FormsSection from "./FormsSection";
import NavHeader from "./NavHeader";
import SectionDivider from "./SectionDivider";
import DestinationsPreview from "./DestinationsPreview";
import DestinationsDetails from "./DestinationsDetails";
import { Route } from "wouter";

function App({ dividerName }) {
  // feather.replace();

  const [temperature, setTemperature] = useState();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&hourly=temperature_2m"
    )
      .then((data) => data.json())
      .then((value) => setTemperature(value.hourly.temperature_2m[0]));
  }, []);

  return (
    <main id="mainWrapper">
      <NavHeader />
      <IntroSection />
      <SectionDivider dividerName={"discover destinations"} />
      <DestinationsPreview />
      <SectionDivider dividerName={"destinations details"} />
      <Route path="/destinations/:cityId">
        {(params) => {
          const foundCity = cities.filter((city) => city.id === params.cityId);
          return (
            <DestinationsDetails
              title={foundCity.title}
              temperature={temperature}
              setTemperature={setTemperature}
            />
          );
        }}
      </Route>
      <FormsSection />
    </main>
  );
}

export default App;
