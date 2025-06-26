import AboutContent from "./AboutContent";
import AllSectionHeadline from "./AllSectionHeadline";


const About = () => {
    let title = "About";
    let highlight = "Sandy";
    let des = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut."
    return (
        <>
            <section className='pb-100 pt-100 bg-light-blue'>
                <div className="container">
                    <div className="row">
                        <AllSectionHeadline title={title} highlight={highlight} des={des} />
                    </div>
                    <div className='row gy-4'>
                        <AboutContent />

                    </div>
                </div>
            </section>
        </>

    )
}

export default About