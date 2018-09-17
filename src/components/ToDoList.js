import React, { Component } from "react";
import ListItem from "./ListItem";

export default class ToDoList extends Component {
  handleDeleteListItem = id => {
    this.props.onDeleteListPendings(id);
  };

  render() {
    return (
      <div className="ToDoList">
        <h2>Pending List</h2>
        {this.props.data.lenght === 0 ? (
          <p>No Pendings :)</p>
        ) : (
          <ul className="list-unstyled">
            {this.props.data.map(pending => (
              <li>
                <input type="checkbox" />
                <ListItem
                  key={pending.id}
                  pending={pending}
                  onDelete={this.handleDeleteListItem}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
