import React,{useState, useContext} from "react";
import noteContext from "../contexts/NoteContext";

const Noteform = () => {
  const {AddNote} = useContext(noteContext);
  const [newNote, setNewNote] = useState({title: "", description: "", tag: ""})
  const handleOnChange = (e)=>{
    // console.log({[e.target.name] : e.target.value});
    setNewNote(prev=>{
      return ({...prev,[e.target.name] : e.target.value})
    });
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    // console.log("I am clicked.");
    AddNote(newNote);
    setNewNote({title: "", description: "", tag: ""});
  };

  return (
    <>
      <form>
        <div>
          <div className="mb-3">
            <label htmlFor="exampleInputText1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputTitle1"
              aria-describedby="title"
              name="title"
              onChange={handleOnChange}
              value={newNote.title}
              minLength={3}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputText1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputDescription1"
              name="description"
              onChange={handleOnChange}
              value={newNote.description}
              minLength={4}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputText1" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputTag1"
              name="tag"
              onChange={handleOnChange}
              value={newNote.tag}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleOnClick}
            disabled = {(newNote.title.length<3) || (newNote.description.length<4) ? true : false}
          >
            Add Note
          </button>
        </div>
      </form>
    </>
  );
};

export default Noteform;
