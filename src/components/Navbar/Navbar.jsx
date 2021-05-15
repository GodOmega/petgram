import React from "react";
import { Nav, Link } from "./styles";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";

const SIZE = "30px";

const Navbar = () => {
    return (
        <Nav>
            <Link exact to="/">
                <MdHome size={SIZE} />
            </Link>
            <Link to="/favs">
                <MdFavoriteBorder size={SIZE} />
            </Link>
            <Link to="/user">
                <MdPersonOutline size={SIZE} />
            </Link>
        </Nav>
    );
};

export default Navbar;
