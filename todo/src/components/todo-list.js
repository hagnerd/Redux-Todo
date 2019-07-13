import React from "react";
import Todo from "./todo";

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <Todo id={index} {...todo} />
        </li>
      ))}
    </ul>
  );
}
