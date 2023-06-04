import React from "react";
import AddList from "./AddList";
import AddTodo from "./AddTodo";

function Lists({ data }) {
  // Check if the 'data' prop is defined before destructuring its properties
  if (!data) {
    return (
      <div className="m-5">
        <AddList />
      </div>
    );
  }

  const { title, todos, id } = data;

  return (
    <div className="m-5">
      <AddList title={title} />
      <AddTodo listId={id} />
      {todos &&
        todos.map((todoitem, index) => {
          return <AddTodo todoitem={todoitem} listId={id} key={index} />;
        })}
    </div>
  );
}

export default Lists;
