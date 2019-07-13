import React from "react";
import PropTypes from "prop-types";

const initialState = {
  taskDescription: ""
};

export default class TodoInput extends React.Component {
  state = initialState;

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };

  handleSubmit = event => {
    event.preventDefault();

    const { taskDescription } = this.state;

    this.props.handleSubmit(taskDescription);
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
