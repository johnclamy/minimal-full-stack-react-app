import React, { createContext } from 'react'

import authentication from '../services/firebase'

export const FirebaseContext = createContext()

export default function FirebaseContextProvider (props) {
  return (
    <FirebaseContext.Provider
      value={{ authentication }}
    >
      {props.children}
    </FirebaseContext.Provider>
  )
}