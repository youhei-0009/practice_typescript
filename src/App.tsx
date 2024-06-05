import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Practice1 } from './practices/Practice1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Practice1 />
      </div>
    </>
  )
}

export default App
