import { configureStore } from '@reduxjs/toolkit'
import { REDUX_LS_KEY } from './initState'
import { counterReducer } from './slices/counterSlice/counterSlice'
import { todosReducer } from './slices/todosSlice/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    counter: counterReducer,
  },
})

store.subscribe(() => {
  localStorage.setItem(REDUX_LS_KEY, JSON.stringify(store.getState()))
})
