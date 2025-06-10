import React from 'react'
import ImagePart from './ImagePart'
import ImageContent from './ImageContent'

const Intro = () => {
    let image = "/public/image/intro.jpg"
    let heading = "Showcase your app with Sandy"
    let content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's typesetting industry standard dummy text ever since the typesetting. Lorem Ipsum has been the industry's typesetting industry standard."
    let btn1 = "Read more"
    let btn2 = "Contact us"

    return (
        <>
            <section className='pb-100 pt-100'>
                <div className="container ">
                    <div className="row">
                        <div className="col-6">
                            <ImagePart img={image} />
                        </div>
                        <div className="col-6">
                            <div className='d-flex align-items-center h-100'>
                                <ImageContent heading={heading} content={content} btn1={btn1} btn2={btn2} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Intro