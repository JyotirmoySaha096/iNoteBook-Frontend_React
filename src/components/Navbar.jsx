import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import noteContext from "../contexts/NoteContext";

function NavbarCustom() {
  const {loginStatus} = useContext(noteContext);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid="xxl">
          <LinkContainer to="/">
            <Navbar.Brand>I-notebook</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <LinkContainer to="/action/3.1"><NavDropdown.Item>Action</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/action/3.2"><NavDropdown.Item>Another action</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/action/3.3"><NavDropdown.Item>Something</NavDropdown.Item></LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to="/action/3.4"><NavDropdown.Item>Separated link</NavDropdown.Item></LinkContainer>
                </NavDropdown> */}
              {!loginStatus ? (
                <>
                  <Link
                    className="btn btn-outline-primary"
                    style={{ margin: "0 0 0 61vw" }}
                    to="/signup"
                  >
                    Sign up
                  </Link>
                  <Link
                    className="btn btn-primary"
                    style={{ margin: "0 0 0 1vw" }}
                    to="/login"
                  >
                    Log in
                  </Link>
                </>
              ):
              (
                <Link
                    className="btn btn-primary"
                    style={{ margin: "0 0 0 70vw" }}
                    to="/login"
                    onClick={()=>{localStorage.removeItem("userToken"); loginStatus(false)}}
                  >
                    Log out
                  </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarCustom;
