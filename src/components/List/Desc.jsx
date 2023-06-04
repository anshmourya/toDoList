import React from "react";

function Desc({ desc }) {
  return (
    <>
      <div className="text-base font-semibold text-gray-500 break-words">
        {desc}
      </div>
    </>
  );
}

export default Desc;
