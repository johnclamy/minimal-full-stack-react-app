import React from 'react'

import { DogForm } from '../../features/Dogs'
import { Container, Row, Section } from '../styles'

export default function () {
  return (
    <Container>
      <Row>
        <header>
          <h1>Add your pup</h1>
          <hr style={{marginTop: '0.75rem'}} />
        </header>
        <Section>
          <DogForm />
        </Section>
      </Row>
    </Container>
  )
}