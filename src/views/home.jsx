import React from 'react'
import Row from 'react-bootstrap/Row'

import Header from '../components/Header'
import Albums from '../components/Albums'

export default function HomePage () {
  return (
    <main>
      <Header />
        <Row>
          <Albums />
        </Row>
    </main>
  )
}