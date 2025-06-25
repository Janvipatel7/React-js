
import AllSectionHeadline from './AllSectionHeadline'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Blog = () => {
    let title = "Latest ";
    let highlight = "Blogs";
    let des = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.";
    let sliderArr = [
        {
            imageClass:"image-1",
        },
        {
            imageClass:"image-2",
        },
        {
            imageClass:"image-3",
        },
        {
            imageClass:"image-4",
        },
        {
            imageClass:"image-5",
        },
        {
            imageClass:"image-6",
        },
    ]

    return (
        <>
            <section className='pb-100 pt-100 bg-light-blue'>
                <div className="container">
                    <div className="row">
                        <AllSectionHeadline title={title} highlight={highlight} des={des} />
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="blog-section">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={3}
                                 
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                    Autoplay={false}
                                >
                                   {sliderArr.map((nothing)=>{
                                        return <SwiperSlide>
                                        <div className="blog-post">
                                            <div className={`blog-image ${nothing.imageClass}`}>
                                                <div className="blog-thumb-overlay">
                                                    <div className="blog-des">
                                                        Posted: 08-02-2024<br />
                                                        Posted In: Creative , Design , Apps<br />
                                                        Posted By: Sandy Blogger<br />
                                                        10 Comments
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-content">
                                                <h2>Modern Apps With Amazing Features</h2>
                                                <p>Lorem Ipsum is simply dummy tex of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                                <button>Read more...</button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                   })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog