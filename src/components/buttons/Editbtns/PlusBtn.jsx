import React from "react";
import Plus from "../../../assets/plus.svg";
function PlusBtn() {
  return (
    <>
      <button className="p-1 bg-gray-500 border border-transparent rounded-full">
        <img src={Plus} alt="" />
      </button>
    </>
  );
}

export default PlusBtn;
