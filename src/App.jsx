import React from "react";
import Home from "./pages/Home/Home";
import "./styles/styles.css";
import { SliderBarProvider } from "./hooks/SideBar/SliderBarData";
import { ListDataProvider } from "./hooks/ListHooks/ListData";
function App() {
  return (
    <>
      <ListDataProvider>
        <SliderBarProvider>
          <Home />
        </SliderBarProvider>
      </ListDataProvider>
    </>
  );
}

export default App;
