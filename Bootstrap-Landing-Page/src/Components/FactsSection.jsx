

const FactsSection = () => {
    return (
        <>
            <section className="Facts-section position-relative pt-100 pb-100">
                <div className="color-overlay"></div>
                <div className="container position-relative">
                    <div className="row text-center text-white">
                        <div className="col-6 col-md-3 mb-4">
                            <div className="counter-single">
                                <i className="bi bi-magic"></i>
                                <h2>100%</h2>
                                <p>Faster</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="counter-single">
                                <i className="bi bi-cup-hot"></i>
                                <h2>900</h2>
                                <p>Cup of Coffee</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="counter-single">
                                <i className="bi bi-check-circle"></i>
                                <h2>10000</h2>
                                <p>Active Clients</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="counter-single">
                                <i className="bi bi-heart"></i>
                                <h2>1276</h2>
                                <p>Peoples Love</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FactsSection