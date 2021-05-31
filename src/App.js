import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementCustom, decrementCustom } from './store/actions/index'

function App() {
  const dispatch = useDispatch()

  const data = useSelector((state) => {
    return state.counter
  })
  
  return (
    <div className="App">
      <h1>Counter : {data}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      <button onClick={()=> dispatch(incrementCustom())}>Increment With Custom Number</button>
      <button onClick={()=> dispatch(decrementCustom())}>Decrement With Custom Number</button>
    </div>
  );
}

export default App;
