import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
import{NavLink}from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({dispatch, id,description , amount, createdAt})=>{
    
    return (
        <div>
            <h3>{description}</h3>
            <p>
            ₹{amount}
            -
            {moment(createdAt).format('MMMM Do, YYYY')}</p>
            
            <NavLink to={"/edit/"+id}>Edit</NavLink>
        </div>
    )
}

export default connect()(ExpenseListItem);