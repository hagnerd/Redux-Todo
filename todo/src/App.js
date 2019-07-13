import React from "react";

import TodoList from "./components/todo-list";
import TodoInput from "./components/todo-input";

function App() {
  const todos = [
    {
      value: "First todo",
      completed: false
    },
    {
      value: "Second todo",
      completed: true
    }
  ];

  return (
    <>
      <TodoInput
        handleSubmit={value => console.log({ value, completed: false })}
      />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
