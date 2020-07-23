import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { FirebaseContext } from '../contexts/FirebaseContext'
import SignUpLink from '../components/SignUpLink'
import './_pages.css'

export default function SignIn () {
  const history = useHistory()
  const { authentication } = useContext(FirebaseContext)
  const { email, setEmail } = useState('')
  const { password, setPassword } = useState('')
  const { outputError, setOutputError } = useState(null)

  const handleEmailChange = e => setEmail(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)
  const handleInputErrors = () => password === '' || email === ''
  const handleSubmit = e => {
    e.preventDefault()
    authentication()
      .signInWithEmailAndPassword(email, password)
      .then(authUser => {
        setEmail('')
        setPassword('')
        setOutputError(null)
        history.push('/home')
      })
      .catch(error => setOutputError(error))
  }
  
  const isInvalid = handleInputErrors()

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>sign in</legend>

          <label htmlFor='email'>
            <span>email <span className='required'>*</span></span>
            <input
              required
              type='email'
              name='email'
              value={email}
              className='input-field'
              onChange={handleEmailChange}
            />
          </label>

          <label htmlFor='password'>
            <span>password <span className='required'>*</span></span>
            <input
              required
              type='password'
              name='password'
              value={password}
              className='input-field'
              onChange={handlePasswordChange}
            />
          </label>
          
          <label>
            <span> </span>
            <input
              disabled={isInvalid}
              type='submit'
              value='submit'
            />
          </label>

          { outputError && <div><p>{outputError.message}</p></div> }
        </fieldset>
      </form>
      <SignUpLink />
    </div>
  )
}