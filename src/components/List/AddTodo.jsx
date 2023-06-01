import React from "react";
import MoneyBag from "../../assets/moneyBag.svg";

import Desc from "./Desc";
import PlusBtn from "../buttons/Editbtns/PlusBtn";
function AddTodo() {
  return (
    <>
      <div className="p-3 my-4 bg-gray-900 rounded-lg" id="AddTodo">
        <div className="flex items-center gap-1 mb-3">
          <img
            src={MoneyBag}
            alt=""
            className="w-6 h-6 p-1 rounded-full AddTodo "
          />
          <input
            type="text"
            placeholder="Add Todo"
            className="w-9/12 text-lg capitalize bg-transparent outline-none"
          />
          <PlusBtn />
        </div>
        <Desc />
      </div>
    </>
  );
}

export default AddTodo;
