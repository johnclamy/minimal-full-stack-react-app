import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(() => ({
  root: { flexGrow: 1 },
  flex: { flex: 1 }
}))

export default function Navbar () {
  const classes = useStyles()
  return (
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
  )
}