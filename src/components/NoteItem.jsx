import React, { useState, useContext } from "react";
import noteContext from "../contexts/noteContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const NoteItem = ({ id, title, description, tag, date }) => {
  const { DeleteNote, EditNote } = useContext(noteContext);
  const [show, setShow] = useState(false);
  const [editedNote, setEditedNote] = useState({
    etitle: tag,
    edescription: description,
    etag: tag,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (id) => {
    // console.log(id);
    if (editedNote.etag === "")
      setEditedNote((pre) => {
        return { ...pre, etag: "general" };
      });
    EditNote(id, editedNote.etitle, editedNote.edescription, editedNote.etag);
  };
  const handleDelete = (id) => {
    // console.log(id);
    DeleteNote(id);
  };

  const handleEditedValues = (e) => {
    setEditedNote((pr) => {
      return { ...pr, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the title to be updated"
                autoFocus
                name="etitle"
                onChange={handleEditedValues}
                value={editedNote.etitle}
                // value={title}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="edescription"
                onChange={handleEditedValues}
                value={editedNote.edescription}
                // value={description}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Tag</Form.Label>
              <Form.Control
                type="text"
                placeholder="#tag"
                name="etag"
                onChange={handleEditedValues}
                value={editedNote.etag}
                // value={tag}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleEdit(id);
              handleClose();
              // setEditedNote({ etitle: "", edescription: "", etag: "" });
            }}
          >
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>

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
                onClick={() => {
                  handleShow(id);
                }}
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
    </>
  );
};

export default NoteItem;
