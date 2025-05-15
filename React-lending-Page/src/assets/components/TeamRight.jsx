import TeamProfile from "./TeamProfile"

let teamArr = [
    {
        image:"/image/team_1.png",
        title:"D. Tasha",
        designation:"Founder & CEO",
    },
    {
        image:"/image/team_2.png",
        title:"R. Mckinney",
        designation:"Project Manager",
    },
    {
        image:"/image/team_3.png",
        title:"M. Lambert",
        designation:"Senior Consultant",
    },
    {
        image:"/image/team_4.png",
        title:"G. Thompson",
        designation:"Junior Consultant",
    },
]

const TeamRight = () => {
  return (
    <div className="col-8">
        <div className="row align-items-center h-100 team-profile position-relative ">
            {teamArr.map((item)=>{
                return <TeamProfile image= {item.image} title={item.title} desig={item.designation}/>
            })}
            <img src="/public/image/team_icon.webp" alt="" className="team-icon"/>
        </div>
        
    </div>
  )
}

export default TeamRight