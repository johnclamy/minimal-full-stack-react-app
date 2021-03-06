import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import Navigation from './Navigation'
import Footer from './Footer'

export default function ({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 7, offset: 2 }}>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}