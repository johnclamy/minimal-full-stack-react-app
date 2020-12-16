import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

// import { app } from '../services/firebase'

const useStyles = makeStyles(theme => ({
  container: { margin: theme.spacing.unit * 2 }
}))

export default function PetForm () {
  // const db = app.firestore()
  const classes = useStyles()
  const [breed, setBreed] = useState('')
  // const [description, setDescription] = useState('')

  const handleClick = () => {}

  return (
    <Grid
      container
      spacing={4}
      direction='column'
      className={classes.container}
    >
      <Grid item>
        <TextField
          id='petBreed'
          label='Pet breed'
          value={breed}
          onChange={e => setBreed(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          color='primary'
          onClick={handleClick}
        >
          Add Image
        </Button>
      </Grid>
    </Grid>
  )
}