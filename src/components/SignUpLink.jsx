import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUpLink () {
  return (
    <p>
      Don't have an account? <Link to='/signup'>Sign Up</Link>
    </p>
  )
}
