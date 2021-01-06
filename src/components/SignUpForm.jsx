import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

export default function SignUpForm () {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [passwordOne, setPasswordOne] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')
  const [error, setError] = useState('')
  const disabled =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    userName === ''

  const handleSubmit = e => {}

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>User name</Form.Label>
        <Form.Control
          type="text"
          value={userName}
          placeholder="Enter a user name..."
          onChange={e => setUserName(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          placeholder="Enter your email address..."
          onChange={e => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={passwordOne}
          placeholder="Password..."
          onChange={e => setPasswordOne(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
      <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          value={passwordTwo}
          placeholder="Retype you password..."
          onChange={e => setPasswordTwo(e.target.value)}
        />
      </Form.Group>

      <Button
        className='text-uppercase'
        type='submit'
        variant="primary"
        disabled={disabled}
      >
        sign up 
      </Button>
      {error &&
      <Alert className='mt-3' variant='danger'>
        {error.message}
      </Alert>}
    </Form>
  )
}
