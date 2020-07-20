import React, { createContext, useState } from 'react'

import initialData from '../data/initial-data'

export const PetContext = createContext()

export default function PetContextProvider (props) {
  const [ pets, setPets ] = useState(initialData)

  const handleAddPet = pet => {
    const id = pets[pets.length - 1].id + 1
    const breed = pet.breed
    const origin = pet.origin
    const shortDescription = pet.shortDescription
    const longDescription = pet.longDescription
    setPets([ ...pets, { id, breed, origin, shortDescription, longDescription } ]) 
  }

  const handleRemovePet = id => {
    const filteredPets = pets.filter(pet => pet.id !== id)
    setPets(filteredPets)
  }

  return (
    <PetContext.Provider
      value={{
        pets,
        onAddPet: handleAddPet,
        onRemovePet: handleRemovePet
      }}
    >
      {props.children}
    </PetContext.Provider>
  )
}