import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function () {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="float-md-right">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Pets</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}