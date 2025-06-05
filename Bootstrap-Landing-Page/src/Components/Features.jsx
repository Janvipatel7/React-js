
import AllSectionHeadline from './AllSectionHeadline'
import FeaturesContent from './FeaturesContent'

const Features = () => {
  return (
    <>
        <section className='pt-100 pb-100'>
            <div className="container">
                <div className="row">
                    <AllSectionHeadline />
                </div>
                <div className='row align-items-center'>
                    <FeaturesContent />
                </div>
            </div>
        </section>
    </>
  )
}

export default Features