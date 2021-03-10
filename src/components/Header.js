import React from 'react';
import {NavLink} from 'react-router-dom';

const Header=()=>{
    return(
        <header>
            <h1><NavLink to="/" exact={true}>Expensify</NavLink></h1>
            <NavLink to="/create">create  </NavLink>
            <NavLink to="/help">help  </NavLink>
            
        </header>
    )
}

export default Header;