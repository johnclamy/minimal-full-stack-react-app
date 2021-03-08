import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

export default function ({ children }) {
  return (
    <Container className='bg-light'>
      <Row>
        <Col className='my-4'>{children}</Col>
      </Row>
    </Container>
  )
}