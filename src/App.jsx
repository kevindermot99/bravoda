import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
