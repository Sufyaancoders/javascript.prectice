
import './App.css'
import { incrementByAmount, incrementCount, decrementCount } from './redux/slice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './redux/store'

function App() {
const [value, setValue] = useState<number>(0);
const dispatch = useDispatch();
const count = useSelector((state: RootState) => state.root.count);

const handleIncrementByAmount = () => {
dispatch(incrementByAmount(value));
}

const handleIncrement = () => {
  dispatch(incrementCount());
}

const handleDecrement = () => {
  dispatch(decrementCount());
}
  return (
    <>
 <div className="flex flex-col items-center justify-center col-center h-screen gap-4  "> 
  <div className='border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col gap-4'>
  <div className='border border-gray-500 p-2 rounded-lg shadow-lg bg-amber-900'>
    <h1 className='text-xl text-white font-bold'>Redux Toolkit with TypeScript</h1>
    </div>
    <p>Current count: {count}</p>
    <input type="number" className='border border-gray-400 p-1 rounded-lg' value={value} onChange={(e) => setValue(Number(e.target.value))} />
    <button className='bg-blue-500 text-white p-2 rounded-lg' onClick={handleIncrementByAmount}>Increment by Amount</button>
    <button className='bg-blue-500 text-white p-2 rounded-lg' onClick={handleIncrement}>Increment by 1</button>
    <button className='bg-blue-500 text-white p-2 rounded-lg' onClick={handleDecrement}>Decrement by 1</button>
  </div>
 </div>
    </>
  )
}

export default App
