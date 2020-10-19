import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
export default function Header(props) {
    return (
      <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Title</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Add new Listing" id="basic-nav-dropdown">
          <NavDropdown.Item >
            <div>
              <Form handleSubmit={props.handleSubmit}/>
            </div>
              </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
}
