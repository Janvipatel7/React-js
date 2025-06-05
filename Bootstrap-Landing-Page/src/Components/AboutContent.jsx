import AboutBox from "./AboutBox"

let aboutarr = [
    {
        icon : "bi bi-archive",
        title : "Blog page included",
        desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut."
    },
    {
        icon : "bi bi-archive",
        title : "W3C Valid HTML",
        desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut."
    },
    {
        icon : "bi bi-eye",
        title : "Very Easy to Customize",
        desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut."
    },
    {
        icon : "bi bi-magic",
        title : "Google fonts used",
        desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut."
    },
    {
        icon : "bi bi-graph-up",
        title : "SEO friendly",
        desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut."
    },
    {
        icon : "bi bi-display",
        title : "Well documented",
        desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut."
    },
]
const AboutContent = () => {
  return (
    <>
        {aboutarr.map((item) => {
            return <AboutBox icon = {item.icon} title={item.title} desc={item.desc}/>
        })}
        
    </>
  )
}

export default AboutContent