import React from "react";
import ParkingLotModal from "./ParkingLotModal";

const Card = ({ image, name, description }) => {

    return(
        <div className="card">
        <img src={image} alt=""></img>
        <div className="name-and-openbutton">
            <h2> {name} </h2>
            <ParkingLotModal image={image} name={name} description={description}/>
        </div>
        </div>
    )

}

export default Card;