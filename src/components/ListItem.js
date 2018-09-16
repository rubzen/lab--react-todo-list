import React, { Component } from "react";

export default class ListItem extends Component {
  handleDeleteClick = () => {
    const { pending, onDelete } = this.props;
    onDelete(pending.id);
  };

  render() {
    const { pending } = this.props;

    return (
      <li key={pending.id}>
        {pending.initialtext}
        <button className="remove-button" onClick={this.handleDeleteClick}>
          Delete Item
        </button>
      </li>
    );
  }
}
