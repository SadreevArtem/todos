export const REDUX_LS_KEY = 'REDUX_LS_KEY'

export const initialState = {
  todos: [],
  counter: 0,
}

export const getInitialState = () => {
  const stateLS = localStorage.getItem(REDUX_LS_KEY)
  return stateLS ? JSON.parse(stateLS) : initialState
}
