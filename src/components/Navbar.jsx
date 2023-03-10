import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'

function NavbarCustom() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid="xxl">
        <LinkContainer to="/"><Navbar.Brand>I-notebook</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/About"><Nav.Link>About</Nav.Link></LinkContainer>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <LinkContainer to="/action/3.1"><NavDropdown.Item>Action</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/action/3.2"><NavDropdown.Item>Another action</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/action/3.3"><NavDropdown.Item>Something</NavDropdown.Item></LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to="/action/3.4"><NavDropdown.Item>Separated link</NavDropdown.Item></LinkContainer>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  );
}

export default NavbarCustom;