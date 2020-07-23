import React, { useContext } from 'react'

import { FirebaseContext } from '../contexts/FirebaseContext'

export default function SignoutButton () {
  const { authentication } = useContext(FirebaseContext)

  return (
    <button
      type='button'
      className='signout-button'
      onClick={authentication().signOut}
    >
      Sign Out
    </button>
  )
}