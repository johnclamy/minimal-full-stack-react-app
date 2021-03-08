import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import LandingPage from './components/pages/landing'
import HomePage from './components/pages/home'
import PetsPage from './components/pages/pets'
import AboutPage from './components/pages/about'
import * as ROUTES from './routes'

export default function () {
  return (
    <Layout>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.PETS} component={PetsPage} />
        <Route path={ROUTES.ABOUT} component={AboutPage} />
      </Switch>
    </Layout>
  )
}