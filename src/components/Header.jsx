import React, { useContext } from 'react'

import { PetContext } from '../contexts/PetContext'

export default function Header () {
  const { pets } = useContext(PetContext)
  const petCount = pets.length === 1 ? 'one pet' : (pets.length)
  const petLabel = `Currently have ${petCount} pets listed. Add your favourite pets.`
  return (
    <header className='app-header'>
      <h1>Small Pet Dogs</h1>
      <p>{petLabel}</p>
    </header>
  )
}