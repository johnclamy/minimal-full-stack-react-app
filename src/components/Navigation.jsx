import React, { useContext } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

import { AuthContext } from '../contexts/AuthContext'
import NavbarIn from './NavbarIn'
import NavbarOut from './NavbarOut'
import * as ROUTES from '../routes'

export default function Navigation () {
  const { user } = useContext(AuthContext)
  const navbar = !user ? <NavbarOut user={user} /> : <NavbarIn />

  console.log(user)

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
        {navbar}       
      </Navbar.Collapse>
    </Navbar>
  )
}