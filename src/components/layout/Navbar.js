import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import * as ROUTES from '../../routes'
import {
  Nav,
  NavTitle,
  NavList,
  NavListItem
} from '../styles'

const Navbar = () => (
  <Nav>
    <NavTitle><Link to={ROUTES.HOME}>Tiny Pups</Link></NavTitle>
    <NavList>
      <NavListItem><NavLink to={ROUTES.HOME}>Home</NavLink></NavListItem>
      <NavListItem><NavLink to={ROUTES.PETS}>Pets</NavLink></NavListItem>
      <NavListItem><NavLink to={ROUTES.ABOUT}>About</NavLink></NavListItem>
      <NavListItem style={{marginRight: '0'}}>Sign In</NavListItem>
    </NavList>
  </Nav>
)

export default Navbar