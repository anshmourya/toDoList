import React from "react";
import Home from "./pages/Home/Home";
import "./styles/styles.css";
import { SliderBarProvider } from "./hooks/SideBar/SliderBarData";

function App() {
  return (
    <>
      <SliderBarProvider>
        <Home />
      </SliderBarProvider>
    </>
  );
}

export default App;
