// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import FooterBar from "./FooterBar";
import HeaderBar from "./HeaderBar";
import MainContent from "./MainContent";
import MenuAside from "./MenuAside";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(8);

  return (
    <main class="flex flex-col w-full h-full">
      <HeaderBar counter={counter}></HeaderBar>
      <div class="flex h-full">
        <MenuAside counter={counter} setCounter={setCounter}></MenuAside>
        <MainContent name={""} counter={counter}></MainContent>
      </div>
      <FooterBar></FooterBar>
    </main>
  );
}

export default App;
