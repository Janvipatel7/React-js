import React from 'react'

const Contact = () => {
  return (
    <>
        <section className="relative contact pt-100 pb-100">
                <div className="color-overlay "></div> 
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className='contact-box text-center'>
                                <div className="col-sm-12">
                                    <h3>Need to talk anything about?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed <br/> diam nonummy nibh euismod tincidunt.</p>
                                </div>
                                <form action="">
                                    <div className='row'>
                                      <div className="col-md-6">
                                        <input name="name" className="input-box"  type="text" placeholder="Your Name" />
                                      </div>
                                      <div className="col-md-6">
                                        <input name="email" className="input-box" type="email" placeholder="Your Email" />
                                      </div>
                                      <div className='col-sm-12'>
                                        <input name="subject" className="input-box"  type="text" placeholder="Subject" />
                                      </div>
                                      <div className="col-sm-12">
                                        <textarea name="message" className="input-box textarea-box"  placeholder="Your Message" />
                                      </div>
                                      <div className='col-sm-12'>
                                          <button className='primary-btn'> 
                                              <i class="bi bi-send-fill"></i>
                                              Send Now
                                          </button>
                                      </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Contact