import React, { useContext, useState, useEffect } from "react";
import noteContext from "../contexts/NoteContext";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const { notes, fetchNotes, setLoginStatus } = useContext(noteContext);
  const navigate = useNavigate();
  

  //Get and display all the notes for the logged in user
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    if (localStorage.getItem("userToken")) {
      fetchNotes();
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
      navigate("/login");
    }
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div className="my-3">
      <h1>Your Notes</h1>
      <div className="row">
        <div className="container">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => (
          <NoteItem
            key={note._id}
            id={note._id}
            title={note.title}
            description={note.description}
            tag={note.tag}
            date={note.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
