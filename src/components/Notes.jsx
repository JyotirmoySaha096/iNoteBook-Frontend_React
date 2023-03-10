import React, { useContext } from 'react'
import noteContext from '../contexts/noteContext';
import NoteItem from './NoteItem';
const Notes = () => {
    const {notes,setNotes} = useContext(noteContext);
  return (
    <div>
        <h1>Your Notes</h1>
        <div className='row'>{notes.map(note=><NoteItem key={note._id} title={note.title} description={note.description} tag={note.tag} date={note.date} />)}</div>
    </div>
  )
}

export default Notes