import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='pb-100 pt-100 bg-black '>
            <div className="container">
                <div className="row text-center">
                    <div className="col social-icon">
                        <ul>
                            <li className='facebook'>
                                <span><i class="bi bi-facebook"></i></span>
                            </li>
                            <li className='twitter'>
                                <span><i class="bi bi-twitter"></i></span>
                            </li>
                            <li className='google-plus'>
                                <span><i class="bi bi-google"></i></span>
                            </li>
                            <li className='youtube'>
                                <span><i class="bi bi-youtube"></i></span>
                            </li>
                            <li className='linked-in'>
                                <span><i class="bi bi-linkedin"></i></span>
                            </li>
                            <li className='instagram'>
                                <span><i class="bi bi-instagram"></i></span>
                            </li>
                            <li className='pinterest'>
                                <span><i class="bi bi-pinterest"></i></span>
                            </li>
                            <li className='dribbble'>
                                <span><i class="bi bi-dribbble"></i></span>
                            </li>
                            <li className='behance'>
                                <span><i class="bi bi-behance"></i></span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 text-white copyright">
                         © Copyright 2024 <span className='footer-sandy'>Sandy</span>. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
        <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center active">
            <i class="bi bi-chevron-up"></i>
        </a>
    </>
  )
}

export default Footer