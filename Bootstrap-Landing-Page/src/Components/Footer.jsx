

const Footer = () => {
  return (
    <>
        <footer className='pb-100 pt-100 bg-black '>
            <div className="container">
                <div className="row text-center">
                    <div className="col social-icon">
                        <ul>
                            <li className='facebook'>
                                <span><i className="bi bi-facebook"></i></span>
                            </li>
                            <li className='twitter'>
                                <span><i className="bi bi-twitter"></i></span>
                            </li>
                            <li className='google-plus'>
                                <span><i className="bi bi-google"></i></span>
                            </li>
                            <li className='youtube'>
                                <span><i className="bi bi-youtube"></i></span>
                            </li>
                            <li className='linked-in'>
                                <span><i className="bi bi-linkedin"></i></span>
                            </li>
                            <li className='instagram'>
                                <span><i className="bi bi-instagram"></i></span>
                            </li>
                            <li className='pinterest'>
                                <span><i className="bi bi-pinterest"></i></span>
                            </li>
                            <li className='dribbble'>
                                <span><i className="bi bi-dribbble"></i></span>
                            </li>
                            <li className='behance'>
                                <span><i className="bi bi-behance"></i></span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 text-white copyright">
                         © Copyright 2024 <span className='footer-sandy'>Sandy</span>. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center active">
            <i className="bi bi-chevron-up"></i>
        </a>
    </>
  )
}

export default Footer