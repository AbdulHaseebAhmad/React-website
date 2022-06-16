import React from "react";
import Button from "./Button";
import "./HeroSection.css";
import {Link} from "react-router-dom";

export default function Hero(){
    return(
        <div className="hero-container">
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Link to="/services">
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" value="What We Offer"></Button>
                </Link>
                <Link to="/products">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" value="Our Range"></Button>
                </Link>
            </div>
        </div>
    )
}