import React from "react";

const SaveBtn = ({ fun }) => {
  return (
    <>
      <button className="rounded-xl bg-blue-700 h-10 m-2" onClick={fun}>
        Save
      </button>
    </>
  );
};

export default SaveBtn;
