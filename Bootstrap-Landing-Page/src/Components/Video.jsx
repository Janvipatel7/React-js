import React from 'react'

const Video = () => {
  return (
    <>
          <section className="video-section position-relative pt-100 pb-100">
                <div className="color-overlay"></div>
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className='video-content'>
                                <h2>Sandy is very easy to use.</h2>
                                <p className='mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's typesetting industry standard dummy text ever since the typesetting.</p>
                                <button className='video-btn'>
                                   <i class="bi bi-play-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Video