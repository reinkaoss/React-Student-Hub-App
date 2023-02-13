import React, { setState } from "react";
import "./style.css";
import Bin from "./images/recycle-bin.png";
import Edit from "./images/edit.png";
import { v4 as uuidv4 } from "uuid";

class Hub extends React.Component {
  state = {
    newItem: "",
    list: [],
  };
  //  Changing the state
  updateInput = (key, value) => {
    this.setState({ newItem: value });
  };

  addNote = () => {
    const newItem = {
      id: uuidv4(),
      value: this.state.newItem,
    };

    // copy list of tasks, using [...] to get all items
    const list = [...this.state.list, newItem];

    this.setState({
      list,
      newItem: "",
    });
  };

  // Using filter to delete item based on ID
  deleteNote = (id) => {
    const updatedNotesList = this.state.list.filter((item) => item.id !== id);

    this.setState({ list: updatedNotesList });
  };

  editNote = () => {
    // TBC
  }

  render() {
    return (
      <div>
        <h1 className="studentHubTitle">My Notes</h1>
        <div className="containerHub">
          <div>
            <textarea
              className="notesInputText"
              type="text"
              placeholder="Type your note here..."
              value={this.state.newItem}
              onChange={(e) => this.updateInput("newItem", e.target.value)}
            />
            <button className="add-btn btn-success" onClick={this.addNote}>
              <i className="delete-icon"> + </i>
            </button>

            <div className="outerWrap">
              <ul className="notesContainer">
                {this.state.list.map((item) => {
                  return (
                    <div className="container">
                      <div className="NotesRow">
                        <div className="card">
                          <div className="card-body">
                            <p key={item.id}>{item.value} </p>
                            <div className="buttonsContainer">
                              <button
                                className="btn btn-danger"
                                onClick={() => this.deleteNote(item.id)}
                              >
                                <img className="binLogo" src={Bin} alt="bin" />

                                {/* <i className="delete-icon">x</i> */}
                              </button>
                              <button
                                className="btn btn-warning"
                                onClick={() => this.editNote(item.value)}
                              >
                                <img
                                  className="editLogo"
                                  src={Edit}
                                  alt="bin"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hub;
