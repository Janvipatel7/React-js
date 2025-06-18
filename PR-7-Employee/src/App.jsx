import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/About' element={<About />}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/Login' element={<Login />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App