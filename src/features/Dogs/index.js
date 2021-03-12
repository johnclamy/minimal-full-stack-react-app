import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Alert,
  List,
  ListItem
} from '../../components/styles'
import {
  selectDogs,
  addDog,
  editDog,
  delDog
} from './dogSlice'

export default function () {
  const dispatch = useDispatch()
  const dogs = useSelector(selectDogs)
  const dogList = dogs && !dogs.length
    ? <Alert>There are currently <strong>no</strong> pets on record.</Alert>
    : (<List>
        {dogs.map((dog, i) => <ListItem key={i}>{dog}</ListItem>)}
      </List>)
  
  return dogList
}