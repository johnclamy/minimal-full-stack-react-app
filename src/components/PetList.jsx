import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'

import { app } from '../services/firebase'
import PetListItem from './PetListItem'

export default function PetList () {
  const [pets, setPets] = useState([])
  const db = app.firestore()

  useEffect(() => {
    db.collection('pets')
    .onSnapshot(snap => {
      const items = []
      snap.forEach(doc => items.push(doc.data()))
      setPets(items)
    })
  }, [db])

  return (
    <Grid container spacing={12}>
      {pets.map(pet => <PetListItem key={pet.id} pet={pet} />)}
    </Grid>
  )
}