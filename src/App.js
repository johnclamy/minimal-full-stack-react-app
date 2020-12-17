import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navigation from './components/Navigation'
import HomePage from './views/home'
import CreateAlbumPage from './views/createAlbum'

export default function App () {
  return (
    <Router>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Navigation />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/create-album" component={CreateAlbumPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}