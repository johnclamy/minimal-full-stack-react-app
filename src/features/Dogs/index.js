import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import { Alert, List, ListItem, Form, FormControl } from '../../components/styles'
import { selectDogs, addDog, editDog, delDog } from './dogSlice'

export const DogList = () => {
  const dogs = useSelector(selectDogs)
  const dogList = dogs && !dogs.length
    ? <Alert>There are currently <strong>no</strong> pets on record.</Alert>
    : (<List>
        {dogs.map((dog, i) => <ListItem key={i}>{dog}</ListItem>)}
      </List>)
  
  return dogList
}

export const DogForm = () => {
  const { register, handleSubmit, errors } = useForm()
  const dogForm = (
    <Form style={{paddingTop: '1rem'}}>
      <label style={{fontSize: '1.4rem'}}>Dog breed</label>
      <FormControl
        type='text'
        name='breed'
        ref={register}
        placeholder="Enter your dog's breed..."
      />
    </Form>
  )
  return dogForm
}