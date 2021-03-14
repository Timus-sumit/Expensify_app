import React from 'react';
import {startLogin} from '../actions/auth';
import {connect} from 'react-redux';

const LoginPage = ({startLogin})=>{
    return(
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Rupee Manager</h1>
                <p>Time to act like an adult </p>
                <button className="button"onClick={startLogin}>Login with Google</button>
            </div>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        startLogin : ()=>dispatch(startLogin())
    }
}

export default connect(undefined,mapDispatchToProps)(LoginPage);