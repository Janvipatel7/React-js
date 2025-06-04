import React from 'react'

const Header = () => {
  return (
    <>
        <nav className='header'>
            <div className="container">
                <div className='d-flex  justify-content-between align-items-center'>
                    <div>
                        <img src="public/Image/logo.png" alt="Logo" />
                    </div>
                    <div>
                        <ul className='d-flex list-unstyled align-items-center gap-4 '>
                            <li>Home</li>
                            <li>Features</li>
                            <li>About</li>
                            <li>Screenshots</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>Subscribe</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header