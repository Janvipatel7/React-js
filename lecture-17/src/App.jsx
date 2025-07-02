import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./redux/action";


const App = () => {

  const count = useSelector((state) => {
      console.log(state);
      return state;
  })

  const dispatch = useDispatch();

  return (
    <div>
        <h1>Count : {count}</h1>

        <button onClick={() => dispatch(increment())}>Add</button>
        <button onClick={() => dispatch(decrement())}>Minus</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App