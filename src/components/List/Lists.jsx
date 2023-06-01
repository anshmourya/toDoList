import React from "react";
import AddList from "./AddList";
import AddTodo from "./AddTodo";

function Lists() {
  return (
    <>
      <div className="m-5">
        <AddList />
        <AddTodo />
        <AddTodo />
      </div>
    </>
  );
}

export default Lists;
