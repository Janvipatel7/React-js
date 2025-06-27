
import AllSectionHeadline from './AllSectionHeadline'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Screenshots = () => {
    let title = "Apps ";
    let highlight = "Screenshots";
    let des = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut."


    return (
        <>
            <section className='pb-100 pt-100'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <AllSectionHeadline title={title} highlight={highlight} des={des} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={3}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                autoPlay={true}
                            >
                                <SwiperSlide>
                                    <div className='shot-item'>
                                        <span className='overlay'>
                                            <img src="/Image/screenshot-1.jpg" alt="" className='img-fluid ' />
                                            <i className="bi bi-camera item-content"></i>
                                        </span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='shot-item'>
                                        <span className='overlay'>
                                            <img src="/Image/screenshot-2.jpg" alt="" className='img-fluid ' />
                                            <i className="bi bi-camera item-content"></i>
                                        </span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='shot-item'>
                                        <span className='overlay'>
                                            <img src="/Image/screenshot-3.jpg" alt="" className='img-fluid ' />
                                            <i className="bi bi-camera item-content"></i>
                                        </span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='shot-item'>
                                        <span className='overlay'>
                                            <img src="/Image/screenshot-1.jpg" alt="" className='img-fluid ' />
                                            <i className="bi bi-camera item-content"></i>
                                        </span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='shot-item'>
                                        <span className='overlay'>
                                            <img src="/Image/screenshot-2.jpg" alt="" className='img-fluid ' />
                                            <i className="bi bi-camera item-content"></i>
                                        </span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='shot-item'>
                                        <span className='overlay'>
                                            <img src="/Image/screenshot-3.jpg" alt="" className='img-fluid ' />
                                            <i className="bi bi-camera item-content"></i>
                                        </span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='shot-item'>
                                        <span className='overlay'>
                                            <img src="/Image/screenshot-1.jpg" alt="" className='img-fluid ' />
                                            <i className="bi bi-camera item-content"></i>
                                        </span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='shot-item'>
                                        <span className='overlay'>
                                            <img src="/Image/screenshot-2.jpg" alt="" className='img-fluid ' />
                                            <i className="bi bi-camera item-content"></i>
                                        </span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='shot-item'>
                                        <span className='overlay'>
                                            <img src="/Image/screenshot-3.jpg" alt="" className='img-fluid ' />
                                            <i className="bi bi-camera item-content"></i>
                                        </span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='shot-item'>
                                        <span className='overlay'>
                                            <img src="/Image/screenshot-1.jpg" alt="" className='img-fluid ' />
                                            <i className="bi bi-camera item-content"></i>
                                        </span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='shot-item'>
                                        <span className='overlay'>
                                            <img src="/Image/screenshot-2.jpg" alt="" className='img-fluid ' />
                                            <i className="bi bi-camera item-content"></i>
                                        </span>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Screenshots