import React from 'react'
import { useHistory } from 'react-router-dom'

import './_pages.css'

export default function Landing () {
  const history = useHistory()

  return (
    <div className='page-container'>
      <img src='/images/header-image.jpg' alt='Yorkshire Terrier' />
      <button
        type='button'
        onClick={() => history.push('/signin')}
      >
        sign in to view and add pets
      </button>
    </div>
  )
}