
const AllSectionHeadline = ({title,highlight,des }) => {
  return (
    <>
      <div>
        <div className="section-title text-center mb60">
          <h2>{title} <span>{highlight}</span></h2>
          <span className="lines"></span>
          <p> {des}</p>
          </div>
      </div>
    </>
  )
}

export default AllSectionHeadline