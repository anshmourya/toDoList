import React, { useContext } from "react";
import { SliderBar } from "../../hooks/SideBar/SliderBarData";
import { ListData } from "../../hooks/ListHooks/ListData";
import MoneyBag from "../../assets/moneyBag.svg";
import Desc from "./Desc";
import PlusBtn from "../buttons/Editbtns/PlusBtn";
import { BsPencilFill } from "react-icons/bs";

function AddTodo({ listId, todoitem }) {
  // Accessing the SliderBar context to control the right sidebar state
  const { setRightBarOpen, rightBarOpen } = useContext(SliderBar);

  // Accessing the ListData context to set and retrieve todo data
  const { setTodoData, todoData } = useContext(ListData);

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    setTodoData({
      listId,
      id: todoitem?.title || "",
      title: todoitem?.title || "",
      desc: todoitem?.desc || "",
      isDone: false,
    });
    setRightBarOpen(true);
  };

  return (
    <>
      <div className="p-3 my-4 bg-gray-900 rounded-lg" id="AddTodo">
        <div className="flex items-center gap-1 mb-3">
          <img
            src={MoneyBag}
            alt=""
            className="w-6 h-6 p-1 rounded-full AddTodo"
          />
          <input
            type="text"
            placeholder="Add Todo"
            className="w-9/12 text-lg capitalize bg-transparent outline-none"
            value={todoitem?.title || ""}
            disabled="disabled"
            onChange={(e) =>
              setTodoData({ ...todoData, title: e.target.value })
            }
          />
          {/* Render the PlusBtn component if todoitem is not provided, otherwise render the pencil icon */}
          {!todoitem ? (
            <PlusBtn fun={handleAddTodo} />
          ) : (
            <BsPencilFill
              onClick={handleAddTodo}
              className="p-1 bg-gray-500 border border-transparent rounded-full text-2xl cursor-pointer"
            />
          )}
        </div>
        <Desc desc={todoitem?.desc || ""} />
      </div>
    </>
  );
}

export default AddTodo;
