import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

const styles = () => ({
  root: { flexGrow: 1 },
  flex: { flex: 1 }
})

const Navbar = withStyles (styles)(({ classes }) => (
  <div className={classes.root}>
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color='inherit'
          aria-label='Menu'
        >
        </IconButton>
        <Typography
          variant='subtitle1'
          color='inherit'
          className={classes.flex}
        >
          Tiny Pets
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
))

export default Navbar