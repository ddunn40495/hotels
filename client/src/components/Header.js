import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Form from './Form.js';

export default function Header(props) {
    return (
      <Navbar bg="secondary" expand="lg" variant="dark">
    <Navbar.Brand >Title</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse  id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Add new Listing" id="basic-nav-dropdown">

            <Form handleSubmit={props.handleSubmit}/>

        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
}
