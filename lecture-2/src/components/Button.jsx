const Button = (props)=>{
   
    return(
        <button className={`btn btn-${props.color}`}>{props.name}</button>
    )
}

export default Button;