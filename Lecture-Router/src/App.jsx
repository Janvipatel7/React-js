import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import User from './Pages/User'
import UserDetails from './Pages/UserDetails'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/Services' element={<Services />}></Route>
                <Route path='/User' element={<User/>}></Route>
                <Route path='/User/:id' element={<UserDetails/>}></Route>

            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App