import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    
    return (
        <>
            <nav className='header'>
                <div className="container">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <img src="public/Image/logo.png" alt="Logo" />
                        </div>
                        <div>
                            <ul className='d-flex align-items-center list-unstyled gap-4 mt-3 d-none d-md-flex'>
                                <li className='hover-line'>Home</li>
                                <li className='hover-line'>Features</li>
                                <li className='hover-line'>About</li>
                                <li className='hover-line'>Screenshots</li>
                                <li className='hover-line'>Pricing</li>
                                <li className='hover-line'>Blog</li>
                                <li className='hover-line'>Contact</li>
                                <li className='hover-line'>Subscribe</li>
                            </ul>
                            <button className='bg-transparent d-flex d-md-none' >
                                <i class="bi bi-list"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </nav>




            {/* <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
            <OffCanvasExample placement={'top'} name={'top'} /> */}

        </>
    )
}

export default Header