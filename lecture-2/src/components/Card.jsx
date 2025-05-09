import Button from "./Button.jsx";
import Image from "./Image.jsx"
const Card = (props) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-image">
                <Image image={props.image} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.pageName}</h5>
                <p className="card-text">{props.des}</p>
                <Button name={props.pageName} color={props.color} />
            </div>
        </div>

    )
}

export default Card;