import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  card: { maxWidth: 322 }, 
  media: { width: 322, height: 322 }
}))

export default function PetListItem ({ pet }) {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <CardHeader title={pet.title} />
        <CardMedia
          className={classes.media}
          image={`/img/${pet.image}`}
          title={pet.title}
        />
        <CardContent>
          <Typography>{pet.info}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}