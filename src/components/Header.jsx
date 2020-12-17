import React from 'react'
import { withRouter } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

function Header (props) {
  return (
    <header>
      <Jumbotron>
        <section className='text-center'>
          <h1>Welcome to Tiny Pups</h1>
          <p className='lead'>
            Create an album of your favourite puppies.<br />
            You can create as many as you wish!  
          </p>
          <p>
            <Button
              size="lg"
              variant="light"
              onClick={() => props.history.push('/create-album')}
            >
              Create Album
            </Button>
          </p>
        </section>
      </Jumbotron>
    </header>
  )
}

export default withRouter(Header)