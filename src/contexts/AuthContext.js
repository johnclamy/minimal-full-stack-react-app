import React, { createContext, useState } from 'react'

import { auth } from '../services/firebase'

export const AuthContext = createContext()

export default function AuthContextProvider ({ children }) {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)
  
  const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password)
  const login = (email, password) => auth.signInWithEmailAndPassword(email, password)
  const logOut = () => auth.signOut()
  const reset = email => auth.sendPasswordResetEmail(email)
  const update = password => auth.currentUser.updatePassword(password)

  auth.onAuthStateChanged(user =>
    user ? setIsAuthenticated(true) : setIsAuthenticated(false)
  )

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      onSignUp: signUp,
      onLogin: login,
      onLogOut: logOut,
      onPasswordReset: reset,
      onPasswordUpdate: update
    }}>
      {children}
    </AuthContext.Provider>
  )
}