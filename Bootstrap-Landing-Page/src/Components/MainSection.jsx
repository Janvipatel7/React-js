
import ImageContent from './ImageContent'
import ImagePart from './ImagePart'
const MainSection = () => {
  let image = "/public/image/hero-1.png"
  let heading = `Sandy is best for  Marketing your Apps.`
  let content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's typesetting industry standard dummy text ever since the typesetting."
  let btn1 = "Download"
  let btn2 = "Read more"
  
  return (
    <>
      <section className='hero-section'>
            <div className="container">
                <div className='row vh-100 align-items-center'>
                      <div className="col-lg-6">
                        <ImageContent heading={heading} content={content} btn1={btn1} btn2={btn2}/>
                      </div>
                      <div className="col-lg-6">
                        <ImagePart img={image}/>
                      </div>
                </div>
            </div>
        </section>
        
        
    </>
  )
}

export default MainSection