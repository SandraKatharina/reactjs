// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import FooterBar from "./FooterBar";
import HeaderBar from "./HeaderBar";
import MainContent from "./MainContent";
import MenuAside from "./MenuAside";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  const [username, setUsername] = useState("");
  const [temperature, setTemperature] = useState();

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&hourly=temperature_2m"
    )
      .then((data) => data.json())
      .then((value) => setTemperature(value.hourly.temperature_2m[0]));
  }, []);

  return (
    <main className="flex flex-col w-full h-full">
      <HeaderBar
        counter={counter}
        setCounter={setCounter}
        username={username}
      ></HeaderBar>
      <div className="flex h-full">
        <MenuAside username={username} setUsername={setUsername}></MenuAside>

        <MainContent
          counter={counter}
          username={username}
          temperature={temperature}
        ></MainContent>
      </div>
      <FooterBar></FooterBar>
    </main>
  );
}

export default App;
