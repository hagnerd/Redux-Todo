import React from "react";
import { connect } from "react-redux";

import Todo from "./todo";
import { toggleTodo, deleteTodo } from "../actions";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <Todo
            id={index}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(
  mapStateToProps,
  { toggleTodo, deleteTodo }
)(TodoList);
