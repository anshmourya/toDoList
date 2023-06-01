import React from "react";
import Plus from "../../assets/Plus.svg";
import PlusBtn from "../buttons/Editbtns/PlusBtn";
function AddList() {
  return (
    <>
      <div className="flex items-center font-semibold bg-gray-600 rounded-xl placeholder:text-gray-400 addlist ">
        <input
          type="text"
          name="addlist"
          id="addlist"
          placeholder="Add Todo-List"
          className="text-lg capitalize bg-transparent outline-none"
        />
        <PlusBtn />
      </div>
    </>
  );
}

export default AddList;
