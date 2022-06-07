import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <div id="todos">
        <h2>Todos:</h2>
        {this.props.data.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleCompleted={this.props.toggleCompleted}
            />
          );
        })}
      </div>
    );
  }
}
