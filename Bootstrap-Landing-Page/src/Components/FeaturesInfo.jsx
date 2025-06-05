import FeatureCard from "./FeatureCard"

let featureInfo =[
    {
        icon : "bi bi-arrow-clockwise",
        title : "Responsive design",
        desc:"Lorem ipsum dolor sit amet, elita dolor sit amet Uniquely fashion."
    },
    {
        icon : "bi bi-shield-x",
        title : "Unique Design",
        desc:"Holisticly transform integrated ipsum dolor sit amet, elita dolor."
    },
    {
        icon : "bi bi-rocket",
        title : "Bootstrap framework",
        desc:"Lorem ipsum dolor sit amet, elita dolor sit Synergistically incubate."
    },
    {
        icon : "bi bi-emoji-smile",
        title : "CSS3 Animations",
        desc:"Professionally optimize one-to-one dolor sit amet, elita dolor."
    },
    {
        icon : "bi bi-gear-wide",
        title : "Pixel perfect design",
        desc:"Efficiently benchmark compelling Lorem ipsum dolor sit amet, elita."
    },
    {
        icon : "bi bi-search",
        title : "Working Forms",
        desc:"Compellingly leverage existing ipsum dolor sit amet, elita dolor."
    },
    
]
const FeaturesInfo = () => {
  return (
    <>
        {featureInfo.map((item) => {
            return <FeatureCard icon = {item.icon} title={item.title} desc={item.desc}/>
        })}
    </>
  )
}

export default FeaturesInfo