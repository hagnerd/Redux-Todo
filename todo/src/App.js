import React from "react";

import TodoList from "./components/todo-list";
import TodoInput from "./components/todo-input";

function App() {
  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  );
}

export default App;
