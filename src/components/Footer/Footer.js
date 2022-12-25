import React from 'react'
import { useDispatch } from 'react-redux'
import { Form } from '../Form/Form'
import { clearTodosAC } from '../../redux/actionsCreators/todosAC'

export const Footer = React.memo(() => {
  const dispatch = useDispatch()
  const clearTodoHandler = () => {
    dispatch(clearTodosAC())
  }

  console.log('Render Footer')

  return (
    <footer className="d-flex justify-content-center">
      <button onClick={clearTodoHandler} type="button" className="btn btn-danger">
        Clear
      </button>
      <Form />

    </footer>
  )
})
