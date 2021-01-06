import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SignUpForm from '../components/SignUpForm'

export default function SignUp () {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card className='mt-3'>
            <Card.Header className="h3 text-center">Sign Up</Card.Header>
            <Card.Body>
              <SignUpForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}