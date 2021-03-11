import React from 'react'
import {
  BrowserRouter as
  Router,
  Switch,
  Route
} from 'react-router-dom'

import LandingPage from '../components/pages/Landing'
import HomePage from '../components/pages/Home'
import PetsPage from '../components/pages/Pets'
import AboutPage from '../components/pages/About'
import SigninPage from '../components/pages/Signin'
import * as ROUTES from './index'

export default function () {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.PETS} component={PetsPage} />
        <Route path={ROUTES.ABOUT} component={AboutPage} />
        <Route path={ROUTES.SIGNIN} component={SigninPage} />
      </Switch>
    </Router>
  )
}