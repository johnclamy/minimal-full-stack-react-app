import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import * as ROUTES from '../routes'

export default function NavbarOut () {
  return (
    <>
      <Nav className="mr-auto">
        <LinkContainer to={ROUTES.LANDING}>
          <Nav.Link></Nav.Link>
        </LinkContainer>
      </Nav>
      <Form inline>
        <Button variant="outline-dark">Login</Button>
      </Form>
    </>

  )
}