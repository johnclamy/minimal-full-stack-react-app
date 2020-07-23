import React from 'react'
import { Link } from 'react-router-dom'

import SignoutButton from './SignoutButton'

export default function Navigation () {
  return (
    <nav>
      <ul className='nav-menu'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/add-pet'>Add Pet</Link></li>
        <li><Link to='/account'>Account</Link></li>
        <li><Link to='/signin'>Sign In</Link></li>
        <li><SignoutButton /></li>
      </ul>
    </nav>
  )
}