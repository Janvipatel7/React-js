
import AllSectionHeadline from './AllSectionHeadline'
import FeaturesContent from './FeaturesContent'

const Features = () => {
    let title = "Amazing" ;
    let highlight = "Features";
    let des = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut."
    
  return (
    <>
        <section className='pt-100 pb-100'>
            <div className="container">
                <div className="row">
                    <div>
                        <AllSectionHeadline title={title} highlight={highlight} des={des}/>
                    </div>
                </div>
                <div>
                    <FeaturesContent />
                </div>
            </div>
        </section>
    </>
  )
}

export default Features