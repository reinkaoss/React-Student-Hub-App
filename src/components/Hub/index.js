import React, { useState, useEffect } from "react";
import "./style.css";
import Bin from "./images/recycle-bin.png";
import Edit from "./images/edit.png";
import { v4 as uuidv4 } from "uuid";

function Hub() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);

  // Load the list from local storage when the component mounts
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list"));
    if (storedList) {
      setList(storedList);
    }
  }, []);

  // Save the list to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);


  //  Changing the state
  const updateInput = (value) => {
    setNewItem(value);
  };

// adding new note
  const addNote = () => {
    const newItemObj = {
      id: uuidv4(),
      value: newItem,
    };
 // concat list of tasks, to get all items
 const newList = list.concat(newItemObj);
 setList(newList);
 setNewItem("");
  };

  const deleteNote = (id) => {
    const updatedNotesList = list.filter((item) => item.id !== id);
    setList(updatedNotesList);
  };

  const editNote = (id, editedValue) => {
    const updatedNotesList = list.map((item) => {
      if (item.id === id) {
        return { id: item.id, value: editedValue };
      }
      return item;
    });
    setList(updatedNotesList);
  };
  

  return (
    <div>
      <h1 className="studentHubTitle">My Notes</h1>
      <div className="containerHub">
        <div>
          <textarea
            className="notesInputText"
            type="text"
            placeholder="Type your note here..."
            value={newItem}
            onChange={(e) => updateInput(e.target.value)}
          />
          <button className="add-btn btn-success" onClick={addNote}>
            <i className="delete-icon"> + </i>
          </button>

          <ul className="notesContainer">
            {list.map((item) => {
              return (
                  <div className="NotesRow row">
                    <div className="col-lg-4">
                      <div className="card">
                        <div className="card-body">
                          <p key={item.id}>{item.value} </p>
                          <div className="buttonsContainer">
                            <button
                              className="btn btn-danger"
                              onClick={() => deleteNote(item.id)}
                            >
                              <img className="binLogo" src={Bin} alt="bin" />
                            </button>
                            <button
                              className="btn btn-warning"
                              onClick={() => editNote(item.id)}
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
  );
}

export default Hub;
