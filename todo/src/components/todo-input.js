import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createTodo } from "../actions";

const initialState = {
  taskDescription: ""
};

class TodoInput extends React.Component {
  state = initialState;

  static propTypes = {
    createTodo: PropTypes.func.isRequired
  };

  handleSubmit = event => {
    event.preventDefault();

    const { taskDescription } = this.state;

    this.props.createTodo(taskDescription);
    this.setState(initialState);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo-input">Task:</label>
        <input
          type="text"
          id="todo-input"
          name="taskDescription"
          value={this.state.taskDescription}
          onChange={this.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createTodo
};

export default connect(
  null,
  mapDispatchToProps
)(TodoInput);
