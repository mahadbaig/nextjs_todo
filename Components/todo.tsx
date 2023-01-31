"use client";
import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "Task # 1", completed: false },
    { todoText: "Task # 2", completed: true },
    { todoText: "Task # 3", completed: true },
    { todoText: "Task # 4", completed: false },
  ]);

  const onClickHandler = (meraElm: any) => {
    console.log("meraElm", meraElm);

    
    const newTodos = todos.map((todo) => {
      console.log("todo: ", todo);
      if (todo.todoText == meraElm.todoText) {
        todo.completed = !todo.completed; 
      }
      return todo;
    });

    console.log(newTodos);
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (meraTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == meraTodo.todoText) return false;
      return true;
    });
    console.log("old todos", todos, "new todos", newTodos);
    setTodos(newTodos);
  };
  return (
    <>
      <h1>Todo App</h1>
      <input
        placeholder="add todo text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{
                color: elm.completed ? "gray" : "black",
                textDecorationLine : elm.completed ? "line-through" : "",
                fontStyle: "normal",
                listStyle: "none",
                display:"flex",
                justifyContent : "space-between",
                marginLeft : "auto",
                marginRight : "auto",
                width : "50%"
                
              }}
              key={elm.todoText}
            >
              <button
                onClick={() => {
                  onClickHandler(elm);
                }}
              >
                {"  "}
                Completed
              </button>
              {elm.todoText}
              <button
                onClick={() => {
                  deleteTodo(elm);
                }}
              >
                {"  "}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}