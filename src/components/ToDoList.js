import React, { Component } from "react";
import ListItem from "./ListItem";


export default class ToDoList extends Component {
    handleDeleteListItem = id => {
        this.props.onDeleteListPendings(id);
    };

render() {
    return (
        <div className="List">
            <h2>Lista</h2>
            {this.props.data.lenght === 0 ? (
                <p>No Pendings</p>
            ) : (
                <ul>
                    {this.props.data.map(pending => (
                        <ListItem
                        key={pending.id}
                        pending={pending}
                        onDelete={this.handleDeleteListItem}
                        />
                    )
                        )}
                </ul>
            )}
        </div>        
    );
}





}