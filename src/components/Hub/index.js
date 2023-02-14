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

    if(list.length > 3) {
      console.log("Test2");
    }

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

  // Adding localstorage, creating the key list to add the const list
  componentDidMount() {
    const storage = localStorage.getItem("list")
    if (storage != null) {
      this.setState({ list: JSON.parse(storage) });
      console.log(storage);
  }
  }
// CHeck if localstorage isnt empty 
  componentDidUpdate() {
    if (this.list !== this.state.list) {
      localStorage.setItem("list", JSON.stringify(this.state.list));
    }
  }

  editNote = (value) => {
    console.log(value);
    console.log(this.value);
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

              <ul className="notesContainer">
                {this.state.list.map((item) => {
                  return (
                    <div className="container">
                      <div className="NotesRow row">
                        <div className="col-lg-4">
                        <div className="card">
                          <div className="card-body">
                            <p key={item.id}>{item.value} </p>
                            <div className="buttonsContainer">
                              <button
                                className="btn btn-danger"
                                onClick={() => this.deleteNote(item.id)}
                              >
                                <img className="binLogo" src={Bin} alt="bin" />
                              </button>
                              <button
                                className="btn btn-warning"
                                onClick={() => this.editNote(this.value)}
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
                    </div>
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
