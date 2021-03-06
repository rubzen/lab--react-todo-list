import React, { Component } from "react";

export default class NewToDoListForm extends Component {
  todoRef = React.createRef();

  handleSubmit = event => {
    event.preventDefault();

    const pending = {
      id: Date.now(),
      initialtext: this.todoRef.current.value
    };

    this.props.onToDo(pending);
    event.target.reset();
  };

  render() {
    return (
      <div className="NewToDoListForm">
        <h2>To Do List</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="todoList">To Do </label>
            <input id="initialtext" ref={this.todoRef} type="text" />
            <button className="submit-button">+ Add</button>
          </div>
        </form>
      </div>
    );
  }
}
