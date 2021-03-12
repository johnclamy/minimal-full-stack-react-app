import React from 'react'
import { useHistory } from 'react-router-dom'

import * as ROUTES from '../../routes'
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
  const history = useHistory()

  return (
    <Container>
      <Row>
        <Hero>
          <HeroTitle>Welcome to Tiny Pups.</HeroTitle>
          <HeroText>
            Share your images of miniature puppies for all to see and comment.
          </HeroText>
          <Section>
            <HeroButton onClick={() => history.push(ROUTES.SIGNIN)}>
              Sign In to find out more...
            </HeroButton>
          </Section>
        </Hero>
      </Row>
    </Container>
  )
}