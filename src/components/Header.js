import React from 'react';
import {NavLink} from 'react-router-dom';
import { startLogout } from '../actions/auth';
import {connect} from 'react-redux';

const Header=({startLogout})=>{
    return(
        <header>
            <h1><NavLink to="/" exact={true}>Expensify</NavLink></h1>
            <NavLink to="/create">create  </NavLink>
            <NavLink to="/help">help  </NavLink>
            <button onClick={startLogout}>LogOut</button>
        </header>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return {
        startLogout : ()=>dispatch(startLogout())
    }
}

export default connect(undefined,mapDispatchToProps)(Header);