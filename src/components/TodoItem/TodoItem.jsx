import { useDispatch } from 'react-redux'
import todoItemStyles from './styles.module.scss'
import { todoChangeStatus, todoDelete } from '../../redux/slices/todosSlice/todosSlice'

export function TodoItem({
  id, title, status, inx,
}) {
  const dispatch = useDispatch()

  const deleteHandler = () => {
    dispatch(todoDelete(id))
  }
  const changeTodoStatusHandler = () => {
    dispatch(todoChangeStatus(id))
  }

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
          onClick={() => deleteHandler(id)}
          type="button"
          className="btn mx-2 btn-danger"
        >
          Delete
        </button>
        <button
          onClick={() => changeTodoStatusHandler(id)}
          type="button"
          className="btn btn-success"
        >
          Done
        </button>
      </div>
    </li>
  )
}
