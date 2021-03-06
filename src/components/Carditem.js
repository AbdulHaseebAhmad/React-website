import React from "react";
import {Link} from "react-router-dom";
import "./Cards.css";


export default function Card(props){
    return(
        <li className="cards__item">
            <Link className="cards__item__link" to={props.path}>
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img className="cards__item__img" src={props.source} alt={props.alt}></img>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </figure>
            </Link>
        </li>
        
    )
}