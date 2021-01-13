import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../services/firebase'

export const AuthContext =  createContext()

export default function AuthContextProvider ({ children }) {
  const [ user, setUser ] = useState(null)
  const [loading, setLoading] = useState(false)

  const signUp = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password)

  const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password)

  const logOut = () => auth.signOut()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      onSignUp: signUp,
      onLogin: login,
      onLogOut: logOut
    }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}