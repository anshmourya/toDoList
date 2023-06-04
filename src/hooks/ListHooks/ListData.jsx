import React, { createContext, useState, useEffect } from "react";

export const ListData = createContext();

export const ListDataProvider = ({ children }) => {
  // State to store the lists data, initialized with the data from localStorage or an empty array if no data exists
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("lists")) || []
  );

  // State to store the current todo data
  const [todoData, setTodoData] = useState({});

  // Effect to update localStorage whenever the lists state changes
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  // Function to add a new list to the lists state
  const addList = (newList) => {
    setLists((prevLists) => [...prevLists, newList]);
  };

  // Function to add a new todo or update an existing todo in the lists state
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

  // Effect to log the lists state whenever it changes
  useEffect(() => {
    console.log(lists);
  }, [lists]);

  // Provide the lists data and related functions to the components in the subtree
  return (
    <ListData.Provider
      value={{ lists, addList, addTodo, todoData, setTodoData }}
    >
      {children}
    </ListData.Provider>
  );
};
