
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home'
import Header from './Components/Header'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import { useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import ProtectedRoute from './Components/ProtectedRoute';
import { EditEmiployee } from './Pages/EditEmiployee';
import Employees from './Pages/Employees';
import AddEmployees from './Pages/AddEmployees';

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
              <Route path='/employees' element={<ProtectedRoute  Component={Employees}/>}/>
              <Route path='/add-employees' element={<ProtectedRoute  Component={AddEmployees}/>}/>
              <Route path='edit-employee/:id' element={<ProtectedRoute Component={EditEmiployee}/>}/>
          </Routes>
          <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App