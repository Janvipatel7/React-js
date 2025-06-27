

const FeatureCard = ({ icon, title, desc }) => {
    return (
        <>
            <div className="col-md-6">
                <div className="single-feature-item media d-flex">
                    <div className="feature-icon">
                        <i className={icon}></i>
                    </div>
                    <div>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureCard