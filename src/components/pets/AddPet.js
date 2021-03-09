import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import { nanoid } from '@reduxjs/toolkit'

import { addPet } from '../../store/petSlice'


export default function () {
  const dispatch = useDispatch()
  const [breed, setBreed] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addPet({ id: nanoid(), breed, completed: false }))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type='text'
        size='lg'
        value={breed}
        placeholder='Add your pup...'
        onClick={e => setBreed(e.target.value)}
      />
      <Button
        size='lg'
        type='submit'
        className='text-uppercase'
      >
        add pet
      </Button>
    </Form>
  )
}