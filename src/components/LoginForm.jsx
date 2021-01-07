import React, { useContext, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import { AuthContext } from '../contexts/AuthContext'
import * as ROUTES from '../routes'

export default function LoginForm () {
  const { onLogin } = useContext(AuthContext)
  const emailRef = useRef()
  const passwordRef = useRef()
  const history = useHistory()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const invalid = email === '' || password === ''

    if (invalid) {
      return setError('Please check the data fields are not empty.')
    }

    try {
      setError('')
      setLoading(true)
      await onLogin(email, password)
      history.push(ROUTES.HOME)
    } catch {
      setError('Failed to login.')
    }
    setLoading(false)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group id='email'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          ref={emailRef}
          placeholder="Enter your email address..."
          required
        />
      </Form.Group>

      <Form.Group id='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          ref={passwordRef}
          placeholder="Password..."
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

      {error &&
      <Alert
        className='mt-3 text-center'
        variant='danger'
      >
        {error}
      </Alert>}
    </Form>
  )
}