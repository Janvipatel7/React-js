
import FirstService from './FirstService'
import TestimonialSecond from './TestimonialSecond';

const Testimonial = () => {
    let title ="INSPIRING TESTIMONIALS FROM HAPPY CLIENTS";
    let desc ="Sagittis purus sit amet volutpat consequat mauris nunc congue nisi and tortor dignissim convallis aenean venenatis urna";
    return (
        <section className='py-5'>
            <div className="container">
                <FirstService title={title} desc={desc}/>
                <div className='row'>
                    <TestimonialSecond />
                 
                </div>
            </div>
        </section>
    )
}

export default Testimonial