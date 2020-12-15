import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = () => ({
  card: { maxWidth: 322 }, 
  media: { width: 322, height: 322 }
})

const PetListItem = withStyles(styles)(({ classes, pet }) => (
  <Card className={classes.card}>
      <CardHeader title='Alaskan Klee Kai' />
      <CardMedia
        className={classes.media}
        image={`/img/${pet.image}`}
        title={pet.title}
      />
      <CardContent>
        <Typography>{pet.info}</Typography>
      </CardContent>
    </Card>
))

export default PetListItem