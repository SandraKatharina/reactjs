// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import FooterBar from "./FooterBar";
import HeaderBar from "./HeaderBar";
import MainContent from "./MainContent";
import MenuAside from "./MenuAside";

function App() {
  return (
    <main class="flex flex-col w-full h-full">
      <HeaderBar></HeaderBar>
      <div class="flex h-full">
        <MenuAside></MenuAside>
        <MainContent></MainContent>
      </div>
      <FooterBar></FooterBar>
    </main>
  );
}

export default App;
