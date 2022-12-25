/* eslint-disable default-param-last */
import {
  ADD_TODO, CHANGE_STATUS_TODO,
  CLEAR_TODOS, DELETE_TODO,
} from '../../types/todosTypes'

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state]

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload)

    case CHANGE_STATUS_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            status: !todo.status,
          }
        }
        return todo
      })
    case CLEAR_TODOS:
      return []

    default:
      return state
  }
}
