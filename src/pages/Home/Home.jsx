import React, { useContext } from "react";
import { SliderBar } from "../../hooks/SideBar/SliderBarData";
import SideBar from "../../components/NavBar/SideBar";
import Content from "./PageCompo/Content";

function Home() {
  // Access the 'openStyle' and 'rightBarOpen' values from the SliderBar context
  const { openStyle, rightBarOpen } = useContext(SliderBar);

  return (
    <>
      <div className="">
        <SideBar /> {/* Render the SideBar component */}
        <div
          style={{
            paddingLeft: openStyle,
            paddingRight: !rightBarOpen ? "0px" : "285px",
          }}
        >
          <Content /> {/* Render the Content component */}
        </div>
      </div>
    </>
  );
}

export default Home;
