import ImageContent from "./ImageContent"

const SpecialFeatures = () => {
    
    


    return (
        <>
            <section className="relative special-feature-image pt-100 pb-100">
                <div className="color-overlay "></div>
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="feature">
                                <div className="hero-content">
                                    <div className="mb-4">
                                        <h1 className="fs-50 text-capitalize text-center text-white">Sandy's special features.</h1>
                                    </div>
                                    <div className="mb-5">
                                        <p className="text-center text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's typesetting industry standard dummy text ever since the typesetting.</p>
                                    </div>
                                    <div className="d-flex justify-content-center gap-5">
                                        <button className="primary-btn">Learn more</button>
                                        <button className="black-btn">Download now</button>
                                    </div>
                                    <div className="">
                                        {/* <img src="/public/Image/bg-pattern-light.png" alt="" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SpecialFeatures