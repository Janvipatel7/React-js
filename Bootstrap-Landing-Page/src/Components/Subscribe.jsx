import React from 'react'
import AllSectionHeadline from './AllSectionHeadline'

const Subscribe = () => {

    return (
        <>
            <section className='pb-100 pt-100 bg-light-blue'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 text-center">
                            <div className="subscribe-box mb-4">
                                <h4 className='mb-3'>Subscribe now!</h4>
                                <p>Subscribe to get all latest news from us.</p>
                                <form action="">
                                    <div>
                                        <input type="email" name="email" placeholder="Your Email" className="input-box" />
                                        <button type="submit" className="primary-btn">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-7 text-center">
                            <div className='subscribe-content'>
                                <h4 className='mb-3'>Download SANDY from your flatform</h4>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                <div className='apps-btn me-4'>
                                    <i className="bi bi-apple"></i>
                                    <i> Get now
                                        <span>App store</span>
                                    </i>
                                </div>
                                <div className='apps-btn me-4'>
                                    <i className="bi bi-android2"></i>
                                    <i> Get now
                                        <span>App store</span>
                                    </i>
                                </div>
                                <div className='apps-btn me-4'>
                                    <i className="bi bi-windows"></i>
                                    <i> Get now
                                        <span>App store</span>
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Subscribe