import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Exercices from './components/Exercices'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="exercices" Component={Exercices} />
            <Route path="about" Component={About} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
