import React from 'react';
import {NavLink} from 'react-router-dom';
import { startLogout } from '../actions/auth';
import {connect} from 'react-redux';

const Header=({startLogout})=>{
    return(
        <header className="header">
            <div className="contentContainer">
                <div className="header__content">
                    <h1><NavLink className="header__title" to="/" exact={true}>Rupee Manager</NavLink></h1>
                    <button className="button button--link" onClick={startLogout}>Logout</button>
                </div>
           
            </div> 
        </header>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return {
        startLogout : ()=>dispatch(startLogout())
    }
}

export default connect(undefined,mapDispatchToProps)(Header);