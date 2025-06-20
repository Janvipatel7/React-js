
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home'
import Header from './Components/Header'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import { useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import Employess from './Pages/Employess';
import AddEmployess from './Pages/AddEmployess';

const App = () => {
  const [isLoggedin , setIsLoggedin] = useState(false)

  useEffect(() => {
    let loginStatus = JSON.parse(localStorage.getItem("isLoggedin")) || false
    setIsLoggedin(loginStatus)
  }, [])
  console.log(isLoggedin);
  return (
    <>
      <BrowserRouter>
        <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/login' element={<Login setIsLoggedin={setIsLoggedin}/>}/>
              <Route path='/employess' element={<Employess />}/>
              <Route path='/add-employess' element={<AddEmployess />}/>
          </Routes>
          <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App