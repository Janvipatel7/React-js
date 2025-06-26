const ImagePart = (props) => {
  return (
      <>
          <div className="hero-image text-center">
                <img src={props.img} alt="hero-img" width={'100%'}/>
          </div>
    </>
  )
}

export default ImagePart