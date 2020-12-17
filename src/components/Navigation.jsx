import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from 'react-router-dom'
import { LinkContainer } from "react-router-bootstrap"

export default function Navigation () {
  return (
    <Navbar bg="light" expand="md">
      <Link to="/">
        <Navbar.Brand className="font-weight-bold text-muted">
          Tiny Pups
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">      
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/create-album">
            <Nav.Link>Create Album</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  )
}