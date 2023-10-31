import { useState } from 'react'
import './App.css'
import Box from './Box'
import ArrowButton from './ArrowButton'

function App() {
  const [boxTop, setBoxTop] = useState(0)
  const [boxLeft, setBoxLeft] = useState(0)

  const changeTop = (move) => {
    setBoxTop(boxTop + move)
  }

  const changeLeft = (move) => {
    setBoxLeft(boxLeft + move)
  }

  return (
    <>
      <Box boxTop={boxTop} boxLeft={boxLeft} />

      <ArrowButton direction="UP" onClick={() => changeTop(-10)} />
      <ArrowButton direction="DOWN" onClick={() => changeTop(10)} />
      <ArrowButton direction="LEFT" onClick={() => changeLeft(-10)} />
      <ArrowButton direction="RIGHT" onClick={() => changeLeft(10)} />

      
    </>
  )
}

export default App

  // First solution, no component
      // <button onClick={() => changeTop(-10)}>UP</button>
      // <button onClick={() => changeTop(10)}>DOWN</button>
      // <button onClick={() => changeLeft(-10)}>LEFT</button>
      // <button onClick={() => changeLeft(10)}>RIGHT</button>