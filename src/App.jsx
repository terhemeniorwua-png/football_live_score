import { useState } from 'react'
import './App.css'
import LiveScoreUpdate from './Component/TeamScoreUpdate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg h-screen'>
        <LiveScoreUpdate />
      </div>
    </>
  )
}

export default App
