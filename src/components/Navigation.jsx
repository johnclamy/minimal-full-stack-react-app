import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import * as ROUTES from '../routes'

export default function Navigation () {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to={ROUTES.LANDING}>
        <Navbar.Brand>Tiny Pups</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <LinkContainer to={ROUTES.LANDING}>
            <Nav.Link>Landing</Nav.Link>
          </LinkContainer>

          <LinkContainer to={ROUTES.HOME}>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to={ROUTES.ADD_PET}>
            <Nav.Link>Add Pet</Nav.Link>
          </LinkContainer>

          <LinkContainer to={ROUTES.ACCOUNT}>
            <Nav.Link>Account</Nav.Link>
          </LinkContainer>

          <LinkContainer to={ROUTES.ADMIN}>
            <Nav.Link>Admin</Nav.Link>
          </LinkContainer>

          <LinkContainer to={ROUTES.LOGIN}>
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}