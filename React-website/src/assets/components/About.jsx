
import AboutSecond from './AboutSecond'
import AboutSlider from './AboutSlider'
import FirstService from './FirstService'

const About = () => {
    let title ="INSPIRING TESTIMONIALS FROM HAPPY CLIENTS";
    let desc ="Sagittis purus sit amet volutpat consequat mauris nunc congue nisi and tortor dignissim convallis aenean venenatis urna";
    return (
        <section className='py-5'>
            <div className="container">
                <FirstService title={title} desc={desc}/>
                <div className='row'>
                    <AboutSecond />
                 
                </div>
            </div>
        </section>
    )
}

export default About