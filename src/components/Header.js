import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Link to="/parking-club" style={{ textDecoration: 'none' }}>
            <h1 className="title">
                RIT Parking
            </h1>
        </Link>
    );
};

export default Header;
