import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.todoOnChange}
          value={this.props.todoInput}
          name="todo"
          placeholder="Type todo"
        ></input>
        <button>Submit</button>
        <button>Hide Completed</button>
      </div>
    );
  }
}
