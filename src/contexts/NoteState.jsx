import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = ({ children }) => {
  const noteInitial = [
    {
      _id: "640a0f528b96e8df10a1bb00",
      user: "6408b0ca0a98bf16afd8a846",
      title: "MynewNote",
      description: "My notes description",
      tag: "general",
      date: "2023-03-09T16:54:42.088Z",
      __v: 0,
    },
    {
      _id: "640a0f528b96e8df10a1bb80",
      user: "6408b0ca0a98bf16afd8a846",
      title: "MynewNote",
      description: "My notes description",
      tag: "general",
      date: "2023-03-09T16:54:42.088Z",
      __v: 0,
    },
    {
      _id: "640a0f528b96e8df10a1bb09",
      user: "6408b0ca0a98bf16afd8a846",
      title: "MynewNote",
      description: "My notes description",
      tag: "general",
      date: "2023-03-09T16:54:42.088Z",
      __v: 0,
    },
    {
      _id: "640a0f528b96e8d210a1bb09",
      user: "6408b0ca0a98bf16afd8a846",
      title: "MynewNote",
      description: "My notes description",
      tag: "general",
      date: "2023-03-09T16:54:42.088Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(noteInitial);

  // Add Notes
  const AddNote = (newNote) => {
    setNotes((prev) => {
      return [...prev, newNote];
    });
  };

  //Edit Notes
  const EditNote = (id, title, description, tag) => {
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
    setNotes((prevNotes) => {
      return prevNotes.filter((prevNote) => prevNote._id !== id);
    });
  };

  return (
    <NoteContext.Provider value={{ notes, AddNote, EditNote, DeleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
