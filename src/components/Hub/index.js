import React from "react";
import "./style.css"
import Bin from "./images/recycle-bin.png"

class Hub extends React.Component {
  state = {
    newItem: "",
    list: [],
  };

  //  Changing the state
  updateInput = (key, value) => {
    this.setState({ [key]: value });
  };

  addTask = () => {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    // copy list of tasks, using [...] to get all items
    const list = [...this.state.list, newItem];

    this.setState({
      list,
      newItem: "",
    });
  };

  // Using filter to delete item based on ID
  deleteTask = (id) => {
    const updatedTasksList = this.state.list.filter((item) => item.id !== id);

    this.setState({ list: updatedTasksList });
  };

  render() {
    return (
      <div>
        <h1 className="studentHubTitle">To-do List</h1>
        <div className="containerHub">
          <div
          >
            Add a new Task...
            <br />
            <input
              type="text"
              placeholder="Enter new task"
              value={this.state.newItem}
              onChange={(e) => this.updateInput("newItem", e.target.value)}
            />
            <button
              className="add-btn btn-success"
              onClick={this.addTask}
              disabled={!this.state.newItem.length}
            >
              <i class="delete-icon"> + </i>
            </button>

            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteTask(item.id)}
                    >
                      <img className="binLogo" src={Bin} alt="bin" />
                      {/* <i class="delete-icon">x</i> */}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Hub;

