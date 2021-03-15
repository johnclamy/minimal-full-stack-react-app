import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import {
  Alert,
  List,
  ListItem,
  FormGroup,
  FormControl,
  SubmitButton,
  ErrorContainer,
  ButtonContainer
} from '../../components/styles'
import {
  selectDogs,/*
  addDog,
  editDog,
  delDog */
} from './dogSlice'

export const DogList = () => {
  const dogs = useSelector(selectDogs)
  const dogList = dogs && !dogs.length
    ? <Alert>There are currently <strong style={{textDecoration: 'underline'}}>no</strong> pets on record.</Alert>
    : (<List>
        {dogs.map((dog, i) =>
        <ListItem key={i}>
          <Link to={`/pet/${dog.id}`}>{dog.breed}</Link>
        </ListItem>)}
      </List>)
  
  return dogList
}

export const DogForm = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data, e) => {
    e.preventDefault()
    console.log(data)
    e.target.reset()
  }
  const dogForm = (
    <form
      style={{paddingTop: '1rem'}}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>
        <label style={{fontSize: '1.4rem'}}>Dog breed</label>
        <FormControl
          type='text'
          name='breed'
          ref={register({ required: true })}
          placeholder="Enter your dog's breed..."
        />
      </FormGroup>
      {errors.breed && <ErrorContainer>
        This field is required
        </ErrorContainer>}
      <ButtonContainer>
        <SubmitButton type='submit'>add pet</SubmitButton>
      </ButtonContainer>
    </form>
  )
  return dogForm
}