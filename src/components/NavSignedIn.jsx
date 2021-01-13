import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { AuthContext } from '../contexts/AuthContext'
import * as ROUTES from '../routes'

export default function NavSignedIn () {
  const [error, setError] = useState('')
  const { onLogOut } = useContext(AuthContext)
  const history = useHistory()

  const handleClick = () => {
    try {   
      onLogOut()
      setError('')
      history.push(ROUTES.LANDING)
    } catch {
      setError('Failed to log out')
      console.error(error)
    }
  }

  return (
    <>
      <Nav className="mr-auto">
        <LinkContainer to={ROUTES.HOME}>
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>

        <LinkContainer to={ROUTES.ADD_PET}>
          <Nav.Link>Add Pet</Nav.Link>
        </LinkContainer>

        <LinkContainer to={ROUTES.ACCOUNT}>
          <Nav.Link>Account</Nav.Link>
        </LinkContainer>

      </Nav>

      <Form inline>
        <Button onClick={handleClick} variant="outline-dark">
          Log Out
        </Button>
      </Form>
    </>
  )
}