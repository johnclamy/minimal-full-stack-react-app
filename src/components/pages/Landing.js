import React from 'react'

import {
  Container,
  Row,
  Hero,
  HeroTitle,
  HeroText
} from '../styles'

export default function () {
  return (
    <Container>
      <Row>
        <Hero>
          <HeroTitle>Welcome to Tiny Pups.</HeroTitle>
          <HeroText>Share your images of miniature puppies for all to see and comment.</HeroText>
        </Hero>
      </Row>
    </Container>
  )
}