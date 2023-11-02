import React from "react";
import Grid from "./Grid";
import { lotsData } from "./Lots";

const Home = () => {
    return (
        <div>
            <h1 className="title">
                RIT Parking
            </h1>
            <Grid data={lotsData}/>
        </div>
    )
}

export default Home;