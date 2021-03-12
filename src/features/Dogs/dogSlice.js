import { createSlice } from '@reduxjs/toolkit'

export const dogSlice = createSlice({
  name: 'dogs',
  initialState: [],
  reducers: {
    addDog: (state, action) => {},
    editDog: (state, action) => {},
    delDog: (state, action) => {}
  }
})

export const {
  addDog,
  editDog,
  delDog
} = dogSlice.actions

export const selectDogs = state => state.dogs
export default dogSlice.reducer