import React from "react";
import BalBtn from "../buttons/BalBtn";

function SectionNav() {
  return (
    <nav className="flex items-center justify-between p-3 border-b border-gray-600">
      <div className="text-lg transition border-b-2 border-transparent cursor-pointer hover:border-b-2 hover:border-blue-500 ">
        Section
      </div>
      <div className="btn">
        <BalBtn />
      </div>
    </nav>
  );
}

export default SectionNav;
