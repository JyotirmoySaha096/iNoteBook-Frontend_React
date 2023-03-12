import React, { useState, useContext } from "react";
import noteContext from "../contexts/noteContext";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const NoteItem = ({ id, title, description, tag, date }) => {
  const { DeleteNote, EditNote } = useContext(noteContext);
  const handleEdit = (id,title,description,tag) => {
    // console.log(id);
    EditNote(id,"Edited","Edited","Edited");
  };
  const handleDelete = (id) => {
    // console.log(id);
    DeleteNote(id);
  };
  return (
    <div className="col-md-4 my-3 justify-content-center">
      <Card bg="warning" text={"white"} style={{ width: "15rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>
            {title}
            <FontAwesomeIcon
              className="mx-3 ic"
              icon={faEdit}
              size="sm"
              onClick={() => handleEdit(id)}
            />
            <FontAwesomeIcon
              className="ic"
              icon={faTrash}
              size="sm"
              onClick={() => handleDelete(id)}
            />
          </Card.Title>

          <Card.Subtitle className="mb-2 opacity-75">
            tag: {"#" + tag}
          </Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          {/* <div style={{display: "flex",flexDirection:"row", gap:"4em"}}> */}
          {/* <Button variant="dark">View Full note</Button> */}
          {/* <Button style={{position:"absolute",left:"12em", top:"8.5em",backgroundColor:"whitesmoke", borderRadius:"50%", color:"black"}}><FontAwesomeIcon icon={faTrash}  size="lg"/></Button> */}
          {/* </div> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoteItem;
