import ImageContent from "./ImageContent"

const SpecialFeatures = () => {
    let heading = `Sandy's special features.`
    let content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's typesetting industry standard dummy text ever since the typesetting."
    let btn1 = "Learn more"
    let btn2 = "Download now"

    return (
        <>
            <section className="relative special-feature-image pt-100 pb-100">
                <div className="color-overlay "></div> 
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                           <div className="feature">
                                 <ImageContent heading={heading} content={content} btn1={btn1} btn2={btn2} />
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SpecialFeatures