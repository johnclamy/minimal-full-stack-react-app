import React from 'react'
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import * as ROUTES from '../routes'

export default function Landing () {
  const header = (
    <Jumbotron>
      <h1 className=' text-primary display-4'>Welcome to Tiny Pups!</h1>
      <p className='lead'>
        We like to collect images of <strong>miniature dog breeds.</strong><br />
        <span className=' text-primary'>Log in to our web app to share your pup pics.</span>
      </p>
      <Link to={ROUTES.LOGIN}>
        <Button size='lg' variant='outline-primary'>Log In</Button>
      </Link>
    </Jumbotron>
  )

  return header
}