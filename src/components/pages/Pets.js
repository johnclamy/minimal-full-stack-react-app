import React from 'react'
import { Link } from 'react-router-dom'

import Dogs from '../../features/Dogs'
import { Container, Row, Section } from '../styles'
import * as ROUTES from '../../routes'

export default function () {
  return (
    <Container>
      <Row>
        <Dogs />
        <Section style={{textAlign: 'center'}} >
          <Link style={{fontSize: '1.1rem'}} to={ROUTES.HOME}>Add a pet</Link>
        </Section>
      </Row>
    </Container>
  )
}