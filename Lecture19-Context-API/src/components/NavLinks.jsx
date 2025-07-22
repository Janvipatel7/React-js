import React, { useContext } from 'react'
import { AppContext } from '../App';

const NavLinks = () => {

  const { user , handleLogout} = useContext(AppContext);
  
  return (
    <>
      <div className='d-flex align-items-center gap-5'>
        <ul className='d-flex list-unstyled gap-5 mb-0'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Helloo {user?.name?.toUpperCase()} </li>  {/*optional chaning properties */}
        </ul>
        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
      </div>
    </>
  )
}

export default NavLinks