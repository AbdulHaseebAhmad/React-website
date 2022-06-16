import React, {useState} from "react";
import './Button.css';
import {Link} from "react-router-dom";


const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium' , 'btn--large'];

export default function Button(props){   

    const checkButtonStyles = STYLES.includes(props.buttonStyle) ? props.buttonStyle : STYLES[1];

    const checkButtonSize = STYLES.includes(props.buttonSize) ? props.buttonSize : SIZES[0];

    return(
        <button 
        onClick={props.onClick} 
        className={`btn ${checkButtonStyles} ${checkButtonSize}`}>{props.value}</button>
        )
 }