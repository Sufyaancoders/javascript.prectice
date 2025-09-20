//The state depends on previous values.
//The state logic is complex (e.g., involves multiple sub-values or actions).
//You want to centralize state updates in a reducer function, similar to Redux.
//useREDUSER.....
import { useReducer } from 'react'
import './App.css'

function App() {
  const initialState : { count: number } = { count: 0 }
  const reducer = (state: { count: number }, action: { type: string }) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 } // state.count + action.payload
      case 'decrement':
        return { count: state.count - 1 }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
    </>
  )
}

export default App
