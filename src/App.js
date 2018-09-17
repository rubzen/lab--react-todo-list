import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewToDoListForm from "./components/NewToDoListForm";
import ToDoList from "./components/ToDoList";

class App extends Component {
  state = {
    allPendings: [
      {
        id: 1,
        initialtext: "Mandatory complete this activity ",
        check: false
      }
    ]
  };

  handleCreatePending = pending => {
    const nextAllPending = [...this.state.allPendings, pending];

    this.setState({
      allPendings: nextAllPending
    });
  };

  handleDeletePending = id => {
    const nextAllPending = this.state.allPendings.filter(
      pending => pending.id !== id
    );

    this.setState({
      allPendings: nextAllPending
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <NewToDoListForm onToDo={this.handleCreatePending} />
        </div>
        <div>
          <ToDoList
            data={this.state.allPendings}
            onDeleteListPendings={this.handleDeletePending}
          />
        </div>
      </div>
    );
  }
}

export default App;
