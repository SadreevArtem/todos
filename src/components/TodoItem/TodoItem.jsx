import { useTodosHelpersContext } from '../../contexts/TodosContext'
import todoItemStyles from './styles.module.scss'

export function TodoItem({
  id, title, status, inx,
}) {
  const { changeTodoStatus, deleteTodo } = useTodosHelpersContext()

  return (
    <li
      className="list-group-item d-flex justify-content-between"
    >
      <span
        className={`d-flex align-items-center ${
          status ? todoItemStyles.done : ''
        }`}
      >
        {inx + 1}
        .
        {title}
        {' '}
      </span>
      <div>
        <button
          onClick={() => deleteTodo(id)}
          type="button"
          className="btn mx-2 btn-danger"
        >
          Delete
        </button>
        <button
          onClick={() => changeTodoStatus(id)}
          type="button"
          className="btn btn-success"
        >
          Done
        </button>
      </div>
    </li>
  )
}
