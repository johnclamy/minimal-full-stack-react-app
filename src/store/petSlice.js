import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

export const petAdapter = createEntityAdapter()
export const petSelectors = petAdapter.getSelectors(state => state.pets)

const petSlice = createSlice({
  name: 'pets',
  initialState: petAdapter.getInitialState(),
  reducers: {
    addPet: petAdapter.addOne
  }
})

export const { addPet } = petSlice.actions
export default petSlice.reducer