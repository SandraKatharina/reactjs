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
  const [counter, setCounter] = useState(1);
  const [username, setUsername] = useState("");

  return (
    <main className="flex flex-col w-full h-full">
      <HeaderBar
        counter={counter}
        setCounter={setCounter}
        username={username}
      ></HeaderBar>
      <div className="flex h-full">
        <MenuAside username={username} setUsername={setUsername}></MenuAside>
        <MainContent counter={counter} username={username}></MainContent>
      </div>
      <FooterBar></FooterBar>
    </main>
  );
}

export default App;
