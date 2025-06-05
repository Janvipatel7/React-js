const ImagePart = (props) => {
  return (
      <>
          <div className="hero-image">
                <img src={props.img} alt="hero-img" className='img-fluid'/>
          </div>
    </>
  )
}

export default ImagePart