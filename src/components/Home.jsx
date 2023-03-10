import React from 'react'
import NoteForm from './Noteform';
import Notes from './Notes';


const Home = () => {
  
  return (
    <>
    <div className="container my-4">
      <NoteForm />
      <Notes />
    </div>
    </>
  )
}

export default Home