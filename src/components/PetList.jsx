import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import { app } from '../services/firebase'
import PetListItem from './PetListItem'
import data from '../data/pets'

const styles = () => ({ root: { flexGrow: 1 }})
const db = app.firestore()

const PetList = withStyles(styles)(() => {
  const [pets, setPets] = useState(data)
  return <Grid item xs={12} sm={6} md={3}>
    {pets.map(pet => <PetListItem key={pet.id} pet={pet} />)}
  </Grid>
})

export default PetList