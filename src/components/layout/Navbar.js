import React from 'react'

import {
  Nav,
  NavTitle,
  NavList,
  NavListItem
} from '../styles'

const Navbar = () => (
  <Nav>
    <NavTitle>Tiny Pups</NavTitle>
    <NavList>
      <NavListItem>Home</NavListItem>
      <NavListItem>Pets</NavListItem>
      <NavListItem>About</NavListItem>
      <NavListItem style={{marginRight: '0'}}>Sign In</NavListItem>
    </NavList>
  </Nav>
)

export default Navbar