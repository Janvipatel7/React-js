
import FeaturesInfo from './FeaturesInfo'
import ImagePart from './ImagePart'

const FeaturesContent = () => {
    let image = "/public/image/feature-image.png"
  return (
    <>
    <div className="container">
        <div className="row align-items-center">
          <div className='col-lg-5'>
              <ImagePart img={image} alt="feature-img" className='img-fluid'/>
          </div>
          <div className='col-lg-7'>
              <div className='row  gy-4'>
                    <FeaturesInfo />
              </div>
          </div>
        </div>
    </div>
        
    </>
  )
}

export default FeaturesContent