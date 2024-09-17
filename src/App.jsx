import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NewLesson from './pages/NewLesson'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<NewLesson />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
