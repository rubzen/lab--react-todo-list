import React, { Component } from "react";

export default class ListItem extends Component {
  handleDeleteClick = () => {
    const { pending, onDelete } = this.props;
    onDelete(pending.id);
  };

  render() {
    const { pending } = this.props;

    return (
      <ul className="list-unstyled" key={pending.id}>
        <li>
          <input type="checkbox" />
          {pending.initialtext}
          <button className="remove-button" onClick={this.handleDeleteClick}>
            Delete
          </button>
        </li>
      </ul>
    );
  }
}
