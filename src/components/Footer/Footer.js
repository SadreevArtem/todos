import React from 'react'
import { useTodosHelpersContext } from '../../contexts/TodosContext'
import { Form } from '../Form/Form'

export const Footer = React.memo(() => {
  const { clearAllTodos } = useTodosHelpersContext()

  console.log('Render Footer')

  return (
    <footer className="d-flex justify-content-center">
      <button onClick={clearAllTodos} type="button" className="btn btn-danger">
        Clear
      </button>
      <Form />

    </footer>
  )
})
