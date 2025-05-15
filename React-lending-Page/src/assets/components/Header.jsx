const Header = () =>{
    return(
        <header>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between back-color">
                    <div>
                        <img src="image/Logo_1.webp" alt="" />

                    </div>
                    <div>
                        <nav>
                            <ul className="d-flex gap-4 m-0 p-0 text-white">
                                <li>Home</li>
                                <li>Service</li>
                                <li>About</li>
                                <li>Projects</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <nav>
                            <ul className="m-0 p-0">
                                <li className="d-flex align-items-center justify-content-between gap-3">
                                    <span className="social-icons">
                                        <i className="bi bi-instagram"></i>
                                    </span>
                                    <span className="social-icons">
                                        <i className="bi bi-threads"></i>
                                    </span>
                                    <span className="social-icons">
                                        <i className="bi bi-twitter"></i>
                                    </span>
                                    <span className="social-icons">
                                        <i className="bi bi-github"></i>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;