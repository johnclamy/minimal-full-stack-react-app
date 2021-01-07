import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LoginForm from '../components/LoginForm'
import SignUpLink from '../components/SignUpLink'

export default function SignUp () {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card className='mt-3'>
            <Card.Header className="h3 text-center">Login</Card.Header>
            <Card.Body><LoginForm /></Card.Body>
            <Card.Footer className="text-center"><SignUpLink /></Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}