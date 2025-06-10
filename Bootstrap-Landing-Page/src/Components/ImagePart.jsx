const ImagePart = (props) => {
  return (
      <>
          <div className="hero-image">
                <img src={props.img} alt="hero-img" width={'100%'}/>
          </div>
    </>
  )
}

export default ImagePart