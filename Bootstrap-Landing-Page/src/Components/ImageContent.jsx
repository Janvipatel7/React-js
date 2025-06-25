
const ImageContent = ({heading , content , btn1 , btn2}) => {
  return (
    <>
            <div className="hero-content">
                <div className="mb-4">
                    <h1 className="fs-50  text-capitalize">{heading}</h1>
                </div>
                <div className="mb-5">
                    <p className="">{content}</p>
                </div>
                <div className="d-flex gap-5">
                    <button className="primary-btn">{btn1}</button>
                    <button className="black-btn">{btn2}</button>
                </div>
                <div className="">
                  {/* <img src="/public/Image/bg-pattern-light.png" alt="" /> */}
                </div>
            </div>
    </>
  )
}

export default ImageContent