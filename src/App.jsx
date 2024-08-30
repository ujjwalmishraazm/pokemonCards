import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HowNotToFetchApi } from './HowNotFetchApi'
import { Pokem } from './pokem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HowNotToFetchApi/> */}
     <
      Pokem/>

    </>
  )
}

export default App
