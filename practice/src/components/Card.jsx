import Button from "./Button.jsx";
import Image from "./image.jsx";

const Card = (props)=>{
    return(
        <div className="card" style={{width: '18rem'}}>
            <Image image = {props.image}></Image>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.des}</p>
                <Button btnName= {props.name} color={props.color}/>
            </div>
    </div>

    )
}

export default Card;