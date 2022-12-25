import { useDispatch, useSelector } from 'react-redux'
import { clearCounterAC, decrementCounterAC, incrementCounterAC } from '../../redux/actionsCreators/counterAC'

export function Counter() {
  const counter = useSelector((store) => store.counter)
  const discpatch = useDispatch()

  const incrementHandler = () => {
    discpatch(incrementCounterAC())
  }

  const decrementHandler = () => {
    discpatch(decrementCounterAC())
  }

  const clearHandler = () => {
    discpatch(clearCounterAC())
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
