import LeftMain from "./leftMain"
import RightMain from "./RightMain"


const HeroMain = () => {
  return (
    <section className="hero-section">
        <div className="container">
            <div className="row">
                <LeftMain />
                <RightMain />
            </div>
        </div>
    </section>
  )
}

export default HeroMain