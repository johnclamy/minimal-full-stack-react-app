import React, { useContext } from 'react'

import { PetContext } from '../contexts/PetContext'

export default function PetItem ({ pet }) {
  const { onRemovePet } = useContext(PetContext)
  return (
    <li>
      <h2>{pet.breed}</h2>
      <p>{pet.shortDescription}</p>
      <p>from {pet.origin}</p>
      <footer>
        <button onClick={() => onRemovePet(pet.id)}>x</button>
      </footer>
    </li>
  )
}