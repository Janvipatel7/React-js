import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <nav className='header'>
                <div className="container">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <img src="public/Image/logo.png" alt="Logo" />
                        </div>
                        <div>
                            <ul className='d-flex align-items-center list-unstyled gap-4 mt-3 d-none d-lg-flex header-nav'>
                                <li className='hover-line'>Home</li>
                                <li className='hover-line'>Features</li>
                                <li className='hover-line'>About</li>
                                <li className='hover-line'>Screenshots</li>
                                <li className='hover-line'>Pricing</li>
                                <li className='hover-line'>Blog</li>
                                <li className='hover-line'>Contact</li>
                                <li className='hover-line'>Subscribe</li>
                            </ul>
                            <button className='bg-transparent d-flex d-lg-none' onClick={handleShow} >
                                <i class="bi bi-list"></i>
                            </button>
                        </div>
                        {/* <Button variant="primary" onClick={handleShow}>
                                Launch
                            </Button> */}

                    </div>
                </div>
            </nav>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src="public/Image/logo.png" alt="Logo" />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='list-unstyled gap-4 mt-3 header-nav'>
                        <li className='hover-line my-3'>Home</li>
                        <li className='hover-line my-3'>Features</li>
                        <li className='hover-line my-3'>About</li>
                        <li className='hover-line my-3'>Screenshots</li>
                        <li className='hover-line my-3'>Pricing</li>
                        <li className='hover-line my-3'>Blog</li>
                        <li className='hover-line my-3'>Contact</li>
                        <li className='hover-line my-3'>Subscribe</li>
                    </ul> 
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Header