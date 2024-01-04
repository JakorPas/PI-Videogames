import { Link } from "react-router-dom";
import style from "./Card.module.css"

const Card = (props) => {   
    return(
        <div className={style.container}>
            <Link to={`/detail/${props.name}`}>
                <h2>{props.name}</h2> 
            </Link>
            <img src={props.image} alt={props.name} />
        </div>
    );

}

export default Card;