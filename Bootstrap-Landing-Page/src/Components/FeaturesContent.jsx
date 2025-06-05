import React from 'react'
import ImagePart from './ImagePart'

const FeaturesContent = () => {
    let img = "/public/image/hero-1.png"
  return (
    <>
    <div className="container">
        <div className="row">
            <ImagePart image={img} />
        </div>
    </div>
        
    </>
  )
}

export default FeaturesContent