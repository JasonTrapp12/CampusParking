import React from "react";
import ParkingLotModal from "./ParkingLotModal";

const Card = ({ image, name }) => {
    const displayDetails = () => {
        console.log({name});
    }

    return(
        <div className="card" onClick={ParkingLotModal.handleShow}>
        <img src={image}></img>
        <div className="name-and-openbutton">
            <h2> {name} </h2>
            <ParkingLotModal />
        </div>
        </div>
    )

}

export default Card;