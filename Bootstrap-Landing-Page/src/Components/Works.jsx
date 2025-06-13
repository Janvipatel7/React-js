
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
                    <div className='row ps-146'>
                        <div className="col-3 p-0">
                            <div className='afterLine'>
                                <div className='how-works  text-start '>
                                    <div className='icon-box '>
                                        <i class="bi bi-person-add"></i>
                                    </div>
                                     <h4>Add friends</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 p-0">
                            <div className='afterLine'>
                                <div className='how-works '>
                                    <div className='icon-box'>
                                        <i class="bi bi-hand-thumbs-up"></i>
                                    </div>
                                    <h4>Posts like</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 p-0">
                            <div className='afterLine'>
                                <div className='how-works afterLine '>
                                    <div className='icon-box'>
                                        <i class="bi bi-envelope-open"></i>
                                    </div>
                                    <h4>Messageing</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 p-0">
                            <div className=''>
                                <div className='how-works '>
                                    <div className='icon-box'>
                                        <i class="bi bi-airplane"></i>
                                    </div>
                                    <h4>Check in</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Works