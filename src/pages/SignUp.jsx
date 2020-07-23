import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { FirebaseContext } from '../contexts/FirebaseContext'
import './_pages.css'

export default function SignUp () {
  const history = useHistory()
  const { authentication } = useContext(FirebaseContext)
  const { username, setUserName } = useState('')
  const { email, setEmail } = useState('')
  const { passwordOne, setPasswordOne } = useState('')
  const { passwordTwo, setPasswordTwo } = useState('')
  const { outputError, setOutputError } = useState(null)

  const handleUserNameChange = e => setUserName(e.target.value)
  const handleEmailChange = e => setEmail(e.target.value)
  const handlePasswordOneChange = e => setPasswordOne(e.target.value)
  const handlePasswordTwoChange = e => setPasswordTwo(e.target.value)
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
          <label htmlFor='username'>
            <span>name <span className='required'>*</span></span>
            <input
              required
              type='text'
              name='username'
              value={username}
              className='input-field'
              onChange={handleUserNameChange}
            />
          </label>

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

          <label htmlFor='password-one'>
            <span>password <span className='required'>*</span></span>
            <input
              required
              type='password'
              name='password-one'
              value={passwordOne}
              className='input-field'
              onChange={handlePasswordOneChange}
            />
          </label>

          <label htmlFor='password-two'>
            <span>password 2 <span className='required'>*</span></span>
            <input
              required
              type='password'
              name='password-two'
              value={passwordTwo}
              className='input-field'
              onChange={handlePasswordTwoChange}
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