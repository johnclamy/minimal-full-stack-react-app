import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import LandingPage from './views/Landing'
import HomePage from './views/Home'
import SignUpPage from './views/SignUp'
import LoginPage from './views/Login'
import PetsPage from './views/Pets'
import AboutPage from './views/About'
import * as ROUTES from './routes'

export default function App () {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.PETS} component={PetsPage} />
        <Route path={ROUTES.ABOUT} component={AboutPage} />
      </Switch>
      <Footer />
    </Router>
  )
}