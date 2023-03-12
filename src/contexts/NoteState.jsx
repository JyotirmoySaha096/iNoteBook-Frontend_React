import React, { useState, useEffect } from "react";
import NoteContext from "./noteContext";

const NoteState = ({ children }) => {
  const [notes, setNotes] = useState([]);

  //Get and display all the notes
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwOGIwY2EwYTk4YmYxNmFmZDhhODQ2In0sImlhdCI6MTY3ODI5MjE3OH0.Q28dJZ89bFcxL7hzLIekkYdK-YvLHhPHy_cTGxCnMuk" }
    };
    fetch('http://localhost:3001/api/notes/fetchallnotes', requestOptions)
        .then(response => response.json())
        .then(data => setNotes(data));
// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [notes]);
  

  
  // Add Notes
  const AddNote = (newNote) => {
      if(newNote.tag==='') newNote.tag = "general";
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwOGIwY2EwYTk4YmYxNmFmZDhhODQ2In0sImlhdCI6MTY3ODI5MjE3OH0.Q28dJZ89bFcxL7hzLIekkYdK-YvLHhPHy_cTGxCnMuk" },
        body: JSON.stringify(newNote)
    };
    fetch('http://localhost:3001/api/notes/addnewnote', requestOptions)
  };

  //Edit Notes
  const EditNote = (id, title, description, tag) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwOGIwY2EwYTk4YmYxNmFmZDhhODQ2In0sImlhdCI6MTY3ODI5MjE3OH0.Q28dJZ89bFcxL7hzLIekkYdK-YvLHhPHy_cTGxCnMuk" },
      body: JSON.stringify({'title' : title, 'description' : description, 'tag': tag})
    };
    fetch(`http://localhost:3001/api/notes/updatenote/${id}`, requestOptions)
    // setNotes((prevNotes) => {
    //   return prevNotes.map((prevNote) => {
    //     if (prevNote._id === id) {
    //       return { ...prevNote, title, description, tag };
    //     } else {
    //       return prevNote;
    //     }
    //   });
    // });
  };

  //Delete Notes
  const DeleteNote = (id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwOGIwY2EwYTk4YmYxNmFmZDhhODQ2In0sImlhdCI6MTY3ODI5MjE3OH0.Q28dJZ89bFcxL7hzLIekkYdK-YvLHhPHy_cTGxCnMuk" }
  };
  fetch(`http://localhost:3001/api/notes//deletenote/${id}`, requestOptions)
    // setNotes((prevNotes) => {
    //   return prevNotes.filter((prevNote) => prevNote._id !== id);
    // });
  };

  return (
    <NoteContext.Provider value={{ notes, AddNote, EditNote, DeleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
