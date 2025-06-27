import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AllSectionHeadline from './AllSectionHeadline';


const Blog = () => {
    let title = "Latest ";
    let highlight = "Blogs";
    let des = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.";
    let sliderArr = [
        {
            imageClass: "image-1",
        },
        {
            imageClass: "image-2",
        },
        {
            imageClass: "image-3",
        },
        {
            imageClass: "image-4",
        },
        {
            imageClass: "image-5",
        },
        {
            imageClass: "image-6",
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
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    breakpoints={{
                                        576: { slidesPerView: 1 },
                                        768: { slidesPerView: 2 },
                                        992: { slidesPerView: 3 },
                                        1200: { slidesPerView: 3 }
                                    }}
                                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                >

                                    {sliderArr.map((nothing, index) => (
                                        <SwiperSlide key={index}>
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
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                                    <button>Read more...</button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}

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