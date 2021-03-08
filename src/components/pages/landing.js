import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'

export default function () {
  return (
    <Jumbotron>
      <h1 className='display-4'>Welcome to Tiny Pups!</h1>
      <p className='my-4 lead'>
        We list as many miniature puppies from the net as we can.
        Feel free to add your <strong>tiny pup</strong> too.
      </p>
      <p>
        <Button size='lg' variant='warning'>Sign In</Button>
      </p>
    </Jumbotron>
  )
}