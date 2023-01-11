import { createSlice } from '@reduxjs/toolkit'
import { getInitialState } from '../../initState'

const counterSlice = createSlice({
  name: 'counter',
  initialState: getInitialState().counter,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    clearCounter: () => 0,
  },
})

export const { increment, decrement, clearCounter } = counterSlice.actions

export const counterReducer = counterSlice.reducer
