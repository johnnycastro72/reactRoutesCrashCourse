import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename='/tutorial' >
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route exact path='/' element={ <Home /> }></Route>
        <Route path='/about' element={ <About /> }></Route>
        <Route path='/profile' element={ <Profile /> }></Route>
        <Route path='*' element={ <NotFound /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
