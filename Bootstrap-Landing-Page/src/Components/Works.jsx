
import AllSectionHeadline from './AllSectionHeadline';
const Works = () => {
    let title = "How ";
    let highlight = "Sandy  works?";
    let des = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut."

    return (
            <>
                <section className='pb-100 pt-100 bg-light-blue'>
                    <div className="container">
                        <div className="row">
                            <AllSectionHeadline title={title} highlight={highlight} des={des} />
                        </div>
                        <div className='row'>
                            <div className="col-md-3">
                                <div className='how-works'>
                                    <div className='icon-box'>
                                        <i class="bi bi-person-add"></i>
                                    </div>
                                    <h4>Add friends </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
    )
}

export default Works