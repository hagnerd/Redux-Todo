import React from "react";
import Todo from "./todo";
import { connect } from "react-redux";

function TodoList({ todos }) {
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

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(TodoList);
