import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

const data = [
  {
    name: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    name: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data,
      todoInput: "",
    };
  }

  todoOnChange = (e) => {
    this.setState({
      todoInput: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <TodoList data={this.state.data} />
        <Form
          todoOnChange={this.todoOnChange}
          todoInput={this.state.todoInput}
        />
      </div>
    );
  }
}
