import React from "react";
import Grid from "./Grid";
import Header from "./Header"
import { lotsData } from "./Lots";

const Home = () => {
    return (
        <div>
            <Header />
            <Grid data={lotsData}/>
        </div>
    )
}

export default Home;