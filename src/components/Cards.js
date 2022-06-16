import React from "react";
import "./Cards.css";
import CardItem from "./Carditem.js";

export default function Cards(){
        return(
            <div className="cards">
                <h1>Check Out These Epic Destinations</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">

                    <ul className="cards__items">
                        <CardItem
                            source="https://media.istockphoto.com/photos/african-sunset-with-silhouette-picture-id532389864?k=20&m=532389864&s=612x612&w=0&h=BZxQXKWFxj4CZMs0YxnOxNgJcL0UGGveeepU8baWd-0="
                            text="Explore the colors over the horizon while the sun sets over the Sahara    "
                            alt="jungle"
                            path="/services"
                            label="Adventure"/>

                        <CardItem
                            source="https://images.unsplash.com/photo-1592784201029-bdb351d47eff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80"
                            text="Explore the colors over the horizon while the sun sets over the Sahara    "
                            alt="jungle"
                            path="/products"
                            label="Adventure"/>
                        </ul>
                        <ul className="cards__items">
                        <CardItem
                            source="https://images.unsplash.com/photo-1592784201029-bdb351d47eff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80"
                            text="Explore the colors over the horizon while the sun sets over the Sahara    "
                            alt="jungle"
                            path="/signup"
                            label="Adventure"/>
                        <CardItem
                            source="https://media.istockphoto.com/photos/bowhunter-in-sunset-picture-id810499894?s=612x612"
                            text="Explore the colors over the horizon while the sun sets over the Sahara    "
                            alt="jungle"
                            path="/services"
                            label="Adventure"/>

                        <CardItem
                            source="https://media.istockphoto.com/photos/elk-silhouette-at-sunrise-kansas-picture-id867342734?s=612x612"
                            text="Explore the colors over the horizon while the sun sets over the Sahara    "
                            alt="jungle"
                            path="/products"
                            label="Adventure"/>
                        </ul>
                    </div>
                </div>
            </div>
        )
}

