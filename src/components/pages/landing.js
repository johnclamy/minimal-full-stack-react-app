import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Jumbotron } from 'react-bootstrap'

import * as ROUTES from '../../routes'

export default function () {
  const history = useHistory()

  return (
    <Jumbotron>
      <h1 className='display-4'>Welcome to Tiny Pups!</h1>
      <p className='my-4 lead'>
        We list as many miniature puppies from the net as we can.
        Feel free to add your <strong>tiny pup</strong> too.
      </p>
      <p>
        <Button
          size='lg'
          variant='warning'
          onClick={() => history.push(ROUTES.SIGNIN)}
        >
          Sign In
        </Button>
      </p>
    </Jumbotron>
  )
}