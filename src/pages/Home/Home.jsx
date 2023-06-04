import React, { useContext } from "react";
import { SliderBar } from "../../hooks/SideBar/SliderBarData";
import SideBar from "../../components/NavBar/SideBar";
import Content from "./PageCompo/Content";

function Home() {
  const { openStyle, rightBarOpen } = useContext(SliderBar);
  return (
    <>
      <div className="">
        <SideBar />
        <div
          style={{
            paddingLeft: openStyle,
            paddingRight: !rightBarOpen ? "0px" : "285px",
          }}
        >
          <Content />
        </div>
      </div>
    </>
  );
}

export default Home;
