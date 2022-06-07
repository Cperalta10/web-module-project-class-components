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

  toggleCompleted = (todoId) => {
    this.setState({
      data: this.state.data.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  todoOnChange = (e) => {
    this.setState({
      todoInput: e.target.value,
    });
  };

  addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      name: this.state.todoInput,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      ...this.state,
      data: [...this.state.data, newTodo],
    });

    this.setState({
      todoInput: "",
    });
  };

  render() {
    return (
      <div>
        <TodoList
          data={this.state.data}
          toggleCompleted={this.toggleCompleted}
        />
        <Form
          todoOnChange={this.todoOnChange}
          todoInput={this.state.todoInput}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}
