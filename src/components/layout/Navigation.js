import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function () {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand>
        <img
          width='30'
          height='30'
          alt='Tiny Pups logo'
          src='/img/logo.png'
          className='s-inline-block align-top'
        />{' '}Tiny Pups
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Pets</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}