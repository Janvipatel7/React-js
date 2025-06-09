import React from 'react'

const AboutBox = ({ icon, title, desc }) => {
  return (
    <>
        <div className='col-lg-4 col-md-6'>
            <div className="about-box media">
                <div className="about-icon">
                    <i className={icon}></i>
                </div>
                <div className='mt-3'>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutBox