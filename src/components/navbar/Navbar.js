import React from 'react';
import { useNavigate } from "react-router-dom";

import Strings from "../../constants/string";
import Logo from "../../Logo.png";
import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className='nav__wrapper'>
            <img
                onClick={() => navigate('/')}
                alt='logo'
                height={100}
                width={300}
                src={Logo}
            />

            <span className='nav__title'>
                {Strings.linkVoteChanllenge}
            </span>
        </div>
    );
}

export default Navbar;