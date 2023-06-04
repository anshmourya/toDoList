import React from "react";
import AddList from "./AddList";
import AddTodo from "./AddTodo";

function Lists({ data }) {
  // Check if the 'data' prop is defined before destructuring its properties
  if (!data) {
    // Render the AddList component if 'data' is not defined
    return (
      <div className="m-5">
        <AddList />
      </div>
    );
  }

  const { title, todos, id } = data;

  return (
    <div className="m-5">
      {/* Render the AddList component with the 'title' prop */}
      <AddList title={title} />
      {/* Render the AddTodo component with the 'listId' prop */}
      <AddTodo listId={id} />
      {/* Map over the 'todos' array and render the AddTodo component for each todo */}
      {todos &&
        todos.map((todoitem, index) => {
          return <AddTodo todoitem={todoitem} listId={id} key={index} />;
        })}
    </div>
  );
}

export default Lists;
