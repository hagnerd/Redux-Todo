import React from "react";
import { connect } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

import { toggleTodo, deleteTodo } from "../actions";

// 1. We need to render the value based on completed
// 1.a Render it with a <del> tag if it's completed
// 1.b Render it with a <p> tag if it isn't completed
//
// 2. We need to allow the user to toggle the todo with a
// toggleTodo prop (function) that we pass the id into

function Todo({ id, value, completed, toggleTodo, deleteTodo }) {
  return (
    <>
      <button onClick={() => toggleTodo(id)}>
        {completed ? <del>{value}</del> : <p>{value}</p>}
      </button>
      <FaTrashAlt
        onClick={() => deleteTodo(id)}
        color="red"
        style={{ cursor: "pointer" }}
      />
    </>
  );
}

export default connect(
  null,
  { toggleTodo, deleteTodo }
)(Todo);
