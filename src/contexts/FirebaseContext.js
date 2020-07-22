import React, { createContext } from 'react'

import Firebase from '../services/firebase'

export const FirebaseContext = createContext()

export default function FirebaseContextProvider (props) {
  return (
    <FirebaseContext.Provider
      value={new Firebase()}
    >
      {props.children}
    </FirebaseContext.Provider>
  )
}