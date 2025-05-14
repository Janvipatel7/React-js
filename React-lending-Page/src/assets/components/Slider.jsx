

const Slider = ({ desc, name, desig }) => {
    return (
        <div class="swiper-slide">
            <div>
                <p>{desc}</p>
                <div>
                    <h4>{name}</h4>
                    <p>{desig}</p>
                </div>
            </div>
        </div>
    )
}

export default Slider