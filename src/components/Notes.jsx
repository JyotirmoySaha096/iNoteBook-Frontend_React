import React, { useContext, useState } from "react";
import noteContext from "../contexts/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const { notes } = useContext(noteContext);
  
  return (
    <div className="my-3">
      <h1>Your Notes</h1>
      <div className="row">
        <div className='container'>
          {notes.length===0 && "No notes to display"}
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
