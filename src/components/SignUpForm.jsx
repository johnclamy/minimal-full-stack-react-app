import React, { useContext, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import { AuthContext } from '../contexts/AuthContext'
import * as ROUTES from '../routes'

export default function SignUpForm () {
  const { onSignUp } = useContext(AuthContext)
  const userNameRef = useRef()
  const emailRef = useRef()
  const passwordOneRef = useRef()
  const passwordTwoRef = useRef()
  const history = useHistory()
  const [error, setError] = useState('')
  const [inputError, setInputError] = useState('')
  const [loading, setLoading] = useState(false)

  const userName = userNameRef.current.value
  const email = emailRef.current.value
  const passwordOne = passwordOneRef.current.value
  const passwordTwo = passwordTwoRef.current.value 

  if (passwordOne === '' || passwordTwo === '' ||
    email === '' || userName === '') {
      setInputError('Please make sure no fields are left empty.')
    } else if (passwordOne !== passwordTwo) {
      setInputError('Please check the password entries match.')
    }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await onSignUp(email, passwordOne)
      history.push(ROUTES.HOME)
    } catch {
      setError('Failed to create an account.')
    }
    setLoading(false)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group id='username'>
        <Form.Label>User name</Form.Label>
        <Form.Control
          type="text"
          ref={userNameRef}
          placeholder="Enter a user name..."
          required
        />
      </Form.Group>

      <Form.Group id='email'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          ref={emailRef}
          placeholder="Enter your email address..."
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group id='passwordOne'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          ref={passwordOneRef}
          placeholder="Password..."
          required
        />
      </Form.Group>

      <Form.Group id='passwordTwo'>
      <Form.Label>Password Confirmation</Form.Label>
        <Form.Control
          type="password"
          ref={passwordTwoRef}
          placeholder="Confirm your password..."
          required
        />
      </Form.Group>

      <Button
        className='text-uppercase'
        type='submit'
        variant="primary"
        disabled={loading}
      >
        sign up 
      </Button>
      {inputError &&
        <Alert className='mt-3 text-center' variant='danger'>
          {inputError}
        </Alert>}
      {error &&
        <Alert 
          className='mt-1 text-center text-uppercase font-weight-bold'
          variant='danger'>
          {error}
        </Alert>}
    </Form>
  )
}