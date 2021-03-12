import React from 'react'

import {
  Container,
  Row,
  Hero,
  HeroTitle,
  HeroText,
  HeroButton,
  Section
} from '../styles'

export default function () {
  return (
    <Container>
      <Row>
        <Hero>
          <HeroTitle>Welcome to Tiny Pups.</HeroTitle>
          <HeroText>Share your images of miniature puppies for all to see and comment.</HeroText>
          <Section>
            <HeroButton>Sign In to find out more...</HeroButton>
          </Section>
        </Hero>
      </Row>
    </Container>
  )
}