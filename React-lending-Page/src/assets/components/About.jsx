
import AboutFirst from './AboutFirst'
import AboutSecond from './AboutSecond'

const About = () => {
  return (
    <section className='pt-120 pb-120'>
        <div className="container">
            <div className="row">
                <AboutFirst />
                <AboutSecond />
            </div>
        </div>
    </section>
  )
}

export default About