import React, { /*useContext*/ } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav' // for dev purposes ONLY
/*
import { AuthContext } from '../contexts/AuthContext'
import NavSignedIn from './NavSignedIn'
import NavSignedOut from './NavSignedOut' */
import * as ROUTES from '../routes'

export default function Navigation () {
  // const { user } = useContext(AuthContext)
  // const navbar = !user ? <NavSignedOut /> : <NavSignedIn />

  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to={ROUTES.LANDING}>
        <Navbar.Brand>
          <img
            alt="logo"
            src="/img/logo.png"
            width="30"
            height="30"
            className="d-line-block align-top"
          />{'  '}
          Tiny Pups
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* Force use NavSignedIn for dev purposes */}
        <Nav className="mr-auto">
          <LinkContainer to={ROUTES.HOME}>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to={ROUTES.PETS}>
            <Nav.Link>Pets</Nav.Link>
          </LinkContainer>

          <LinkContainer to={ROUTES.ABOUT}>
            <Nav.Link>About</Nav.Link>
          </LinkContainer>

        </Nav>      
      </Navbar.Collapse>
    </Navbar>
  )
}