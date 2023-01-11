import { createSlice } from '@reduxjs/toolkit'
import { getInitialState } from '../../initState'

const todosSlice = createSlice({
  name: 'todos',
  initialState: getInitialState().todos,
  reducers: {
    todoCreate: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title) {
        return {
          payload: {
            id: crypto.randomUUID(),
            title,
            status: false,
          },
        }
      },
    },
    todoChangeStatus(state, action) {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            status: !todo.status,
          }
        }
        return todo
      })
    },
    todoDelete(state, action) {
      return state.filter((todo) => todo.id !== action.payload)
    },
    todosClear() {
      return []
    },
  },
})

export const {
  todosClear, todoDelete, todoCreate, todoChangeStatus,
} = todosSlice.actions

export const todosReducer = todosSlice.reducer
