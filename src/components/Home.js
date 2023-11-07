import React from "react";
import { useState } from "react";
import Grid from "./Grid";
import Header from "./Header"
import SortDropdown from "./SortDropdown"
import { lotsData } from "./Lots";

const Home = () => {

const [selectedOption, setSelectedOption] = useState("All");

const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
};

const filteredLotsData = lotsData.filter((lot) => {
    if (selectedOption === "All") {
      return true;
    } else if(selectedOption === "Handicap Parking"){
        return lot.tags.includes("handicapped");
    } else if(selectedOption === "General Parking"){
        return lot.tags.includes("general");
    } else if(selectedOption === "Motorcycle Parking"){
        return lot.tags.includes("motorcycle");
    }
  });

    return (
        <div>
            <div className="top-bar">
                <Header />
                <SortDropdown onSelect={handleSelect}/>
            </div>
            <Grid data={filteredLotsData}/>
        </div>
    )
}

export default Home;