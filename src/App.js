import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Navbar from './components/Navbar'
import PetList from './components/PetList'
import PetForm from './components/PetForm'

const useStyles = makeStyles(() => ({ root: { flexGrow: 1 }}))

export default function App () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Navbar />    
      <PetList />
      <PetForm />  
    </div>
  )
}