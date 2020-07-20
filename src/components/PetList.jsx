import React, { useContext } from 'react'

import { PetContext } from '../contexts/PetContext'
import PetItem from './PetItem'

export default function PetList (props) {
  const { pets } = useContext(PetContext)
  return pets.length ? (
    <ul>
      {pets.map(pet =>
        <PetItem key={pet.id} pet={pet} />  
      )}
    </ul>
  ) : (
    <div className='no-pet-list'>
      <h2>No pets available on record at present.</h2>
    </div>
  )
}