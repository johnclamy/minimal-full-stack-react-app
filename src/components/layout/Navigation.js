import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

import * as ROUTES from '../../routes/'

export default function () {
  return (
    <Navbar 
      bg="light"
      expand="lg"
      className='mb-1'
    >
      <LinkContainer to={ROUTES.LANDING}>  
        <Navbar.Brand className="font-weight-bold text-muted">
          <img
            width='30'
            height='30'
            alt='Tiny Pups logo'
            src='/img/logo.png'
            className='s-inline-block align-top'
          />{' '}Tiny Pups
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <LinkContainer to={ROUTES.HOME}><Nav.Link>Home</Nav.Link></LinkContainer>
          <LinkContainer to={ROUTES.PETS}><Nav.Link>Pets</Nav.Link></LinkContainer>
          <LinkContainer to={ROUTES.ABOUT}><Nav.Link>About</Nav.Link></LinkContainer>
          <LinkContainer to={ROUTES.SIGNIN}><Nav.Link className='text-success'>Sign In</Nav.Link></LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}