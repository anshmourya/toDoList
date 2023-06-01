import React from "react";
import SectionNav from "../../../components/NavBar/SectionNav";
import Lists from "../../../components/List/Lists.jsx";

function Content() {
  return (
    <>
      <div className="aa">
        <SectionNav />
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row justify-center place-items-center">
          <Lists />
          <Lists />
          <Lists />
          <Lists />
          <Lists />
          <Lists />
          <Lists />
          <Lists />
          <Lists />
        </div>
      </div>
    </>
  );
}

export default Content;
