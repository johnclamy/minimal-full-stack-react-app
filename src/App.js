import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Navbar from './components/Navbar'
import PetList from './components/PetList'

const styles = () => ({ root: { flexGrow: 1 }})

const App = withStyles (styles)(({ classes }) => (
  <div className={classes.root}>
    <Navbar />
    <Grid container spacing={4}>
      <PetList />        
    </Grid>
  </div>
))

export default App