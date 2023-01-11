import { useDispatch, useSelector } from 'react-redux'
import { clearCounter, decrement, increment } from '../../redux/slices/counterSlice/counterSlice'

export function Counter() {
  const counter = useSelector((store) => store.counter)
  const discpatch = useDispatch()

  const incrementHandler = () => {
    discpatch(increment())
  }

  const decrementHandler = () => {
    discpatch(decrement())
  }

  const clearHandler = () => {
    discpatch(clearCounter())
  }

  return (
    <div className="counter-wr my-3">
      <h2>
        Counter:
        {' '}
        {counter}
      </h2>
      <div>
        <button onClick={incrementHandler} type="button" className="mx-3 btn btn-success">+</button>
        <button onClick={decrementHandler} type="button" className="mx-3 btn btn-danger">-</button>
        <button onClick={clearHandler} type="button" className="mx-3 btn btn-dark">Clear</button>
      </div>
    </div>
  )
}
