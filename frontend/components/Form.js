import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <input
          onChange={this.props.todoOnChange}
          value={this.props.todoInput}
          name="todo"
          placeholder="Type todo"
        ></input>
        <button onClick={this.props.addTodo}>Submit</button>
        <button>Hide Completed</button>
      </form>
    );
  }
}
