import React from 'react';
import {startLogin} from '../actions/auth';
import {connect} from 'react-redux';

const LoginPage = ({startLogin})=>{
    return(
        <div>
            <button onClick={startLogin}>login</button>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        startLogin : ()=>dispatch(startLogin())
    }
}

export default connect(undefined,mapDispatchToProps)(LoginPage);