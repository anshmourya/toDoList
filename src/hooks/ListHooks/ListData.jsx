import React, { createContext, useState, useEffect } from "react";

export const ListData = createContext();

export const ListDataProvider = ({ children }) => {
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("lists")) || []
  );
  const [todoData, setTodoData] = useState({});

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const addList = (newList) => {
    setLists((prevLists) => [...prevLists, newList]);
  };

  const addTodo = (newTodo, isEdit) => {
    setLists((prevLists) => {
      return prevLists.map((list) => {
        if (list.id === newTodo.listId) {
          let updatedTodos;
          if (isEdit) {
            updatedTodos = list.todos.map((todo) => {
              if (todo.id === newTodo.id) {
                console.log("match");
                return { ...todo, ...newTodo };
              } else {
                return todo;
              }
            });
          } else {
            updatedTodos = list.todos ? list.todos.concat(newTodo) : [newTodo];
          }
          return { ...list, todos: updatedTodos };
        } else {
          return list;
        }
      });
    });
  };

  useEffect(() => {
    console.log(lists);
  }, [lists]);

  return (
    <ListData.Provider
      value={{ lists, addList, addTodo, todoData, setTodoData }}
    >
      {children}
    </ListData.Provider>
  );
};
