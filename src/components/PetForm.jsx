import React, { useContext, useState } from 'react'

import { PetContext } from '../contexts/PetContext'

export default function PetForm () {
  const { onAddPet } = useContext(PetContext)
  const { breed, setBreed } = useState('')
  const { origin, setOrigin } = useState('')
  const { shortDescription, setShortDescription } = useState('')
  const { longDescription, setLongDescription } = useState('')

  return (
    <form className='pet-form'>
      <input
        required
        type='text'
        value={breed}
        placeholder='Dog breed...'
        onChange={e => setBreed(e.target.value)}
      />
    </form>
  )
}