import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import Navigation from './Navigation'
import Footer from './Footer'

import './Layout.css'

export default function ({ children }) {
  return (
    <Container className='Layout' fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}