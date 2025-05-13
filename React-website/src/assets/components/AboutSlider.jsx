import Slider from "./Slider"
let sliderArr=[
    {
        desc:"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”",
        name:"John Hilly",
        designation:"Project Manager"
    },
    {
        desc:"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”",
        name:"Mattie Warner",
        designation:"Founder & CEO"
    },
    {
        desc:"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.”",
        name:"Michel Dark",
        designation:"Team Lead"
    },
]
const AboutSlider = () => {
    
    
    return (
        <div className="col-9">
         <div>
               <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    {sliderArr.map((item)=>{
                        return <Slider desc={item.desc} name={item.name} desig={item.designation} />
                    })}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
         </div>
        </div>
    )
}

export default AboutSlider
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});