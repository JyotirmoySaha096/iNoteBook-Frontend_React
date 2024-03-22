import React, { useState, useEffect } from "react";
import NoteContext from "./NoteContext";

const NoteState = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false);

  //Fetch all notes
  const fetchNotes = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem("userToken"),
      },
    };
    fetch("http://localhost:3001/api/notes/fetchallnotes", requestOptions)
      .then((response) => response.json())
      .then((data) => setNotes(data));
  };

  // Add Notes
  const AddNote = async (newNote) => {
    if (newNote.tag === "") newNote.tag = "general";
    console.log(newNote);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem("userToken"),
      },
      body: JSON.stringify(newNote),
    };
    await fetch("http://localhost:3001/api/notes/addnewnote", requestOptions);
    await fetchNotes();
  };

  //Edit Notes
  const EditNote = (id, title, description, tag) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem("userToken"),
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag,
      }),
    };
    fetch(`http://localhost:3001/api/notes/updatenote/${id}`, requestOptions);
    setNotes((prevNotes) => {
      return prevNotes.map((prevNote) => {
        if (prevNote._id === id) {
          return { ...prevNote, title, description, tag };
        } else {
          return prevNote;
        }
      });
    });
  };

  //Delete Notes
  const DeleteNote = (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem("userToken"),
      },
    };
    fetch(`http://localhost:3001/api/notes//deletenote/${id}`, requestOptions);
    setNotes((prevNotes) => {
      return prevNotes.filter((prevNote) => prevNote._id !== id);
    });
  };

  return (
    <NoteContext.Provider value={{ notes, loginStatus, AddNote, EditNote, DeleteNote, fetchNotes, setLoginStatus }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
