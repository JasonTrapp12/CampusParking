import React from "react";

const Card = ({ image, name }) => {
    return(
        <div className="card">
        <img src={image}></img>
        <p> {name} </p>
        </div>
    )

}

export default Card;