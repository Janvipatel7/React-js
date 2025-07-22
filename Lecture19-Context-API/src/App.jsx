import React, { createContext, useState } from 'react'
import Navbar from './components/Navbar'

export const AppContext = createContext(); //return consumer and provider
const App = () => {

  const [user , setUser] = useState({name : "Yanvi Patel"});

  const handleLogout = () => {
    setUser(null);
  }
  return (
    <>
      <AppContext.Provider value={{ user, handleLogout}}>
         <Navbar />
      </AppContext.Provider>
    </>
  )
}

export default App