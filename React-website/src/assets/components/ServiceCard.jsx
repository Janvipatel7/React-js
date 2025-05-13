const ServiceCard = ({image, title, desc}) => {
  return (
    <div className="col-3">
      <div className="service-card">
        <div className="card-image mb-4">
          <img src={image} alt="" />
        </div>
        <div className="">
            <h4 className="fw-1 mb-4">{title}</h4>
            <p className="card-text">{desc}</p>
            <div className="card-btn "> 
              <button className=""><i class="bi bi-arrow-up-right"></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard