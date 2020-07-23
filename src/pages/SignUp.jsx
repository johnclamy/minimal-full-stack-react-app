import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { FirebaseContext } from '../contexts/FirebaseContext'
import './_pages.css'

export default function SignUp () {
  const history = useHistory()
  const { authentication } = useContext(FirebaseContext)
  const [ username, setUserName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ passwordOne, setPasswordOne ] = useState('')
  const [ passwordTwo, setPasswordTwo ] = useState('')
  const [ outputError, setOutputError ] = useState(null)

  const handleInputErrors = () => {
    return (
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''
    )
  }
  const handleSubmit = e => {
    e.preventDefault()
    authentication()
      .createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        setUserName('')
        setEmail('')
        setPasswordOne('')
        setPasswordTwo('')
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
          <legend>sign up</legend>

          <label>
            <span>name <span className='required'>*</span></span>
            <input
              required
              type='text'
              value={username}
              className='input-field'
              onChange={e => setUserName(e.target.value)}
            />
          </label>

          <label>
            <span>email <span className='required'>*</span></span>
            <input
              required
              type='email'
              value={email}
              className='input-field'
              onChange={e => setEmail(e.target.value)}
            />
          </label>

          <label>
            <span>password <span className='required'>*</span></span>
            <input
              required
              type='password'
              value={passwordOne}
              className='input-field'
              onChange={e => setPasswordOne(e.target.value)}
            />
          </label>

          <label>
            <span>password 2 <span className='required'>*</span></span>
            <input
              required
              type='password'
              value={passwordTwo}
              className='input-field'
              onChange={e => setPasswordTwo(e.target.value)}
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
    </div>
  )
}