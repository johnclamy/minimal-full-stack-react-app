import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PetContextProvider from './contexts/PetContext'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Footer from './components/Footer'

import LandingPage from './pages/Landing'
import HomePage from './pages/Home'
import SignUpPage from './pages/SignUp'
import SignInPage from './pages/SignIn'
import AddPetPage from './pages/AddPet'
import AccountPage from './pages/Account'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <PetContextProvider>
          <Header />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/signup' component={SignUpPage} />
            <Route exact path='/signin' component={SignInPage} />
            <Route exact path='/add-pet' component={AddPetPage} />
            <Route exact path='/account' component={AccountPage} />
          </Switch>
        </PetContextProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
