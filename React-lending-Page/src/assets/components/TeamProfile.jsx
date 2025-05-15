

const TeamProfile = ({image,title,desig}) => {
  return (
    <div className='col-3 '>
        <div className="profile-hover">
            <div className="mb-4 profile">
                <img src={image} alt="" width="100%" />
            </div>
            <div className="text-white">
                <h6 className="fs-4 fw-bold  text-decoration-underline">{title}</h6>
                <span className="team-desig">{desig}</span>
            </div>
        </div>
    </div>
    
  )
}

export default TeamProfile