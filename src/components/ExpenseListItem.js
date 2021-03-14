import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
import{NavLink}from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({dispatch, id,description , amount, createdAt})=>{
    
    return (
        <div>
            <NavLink className="list-item" to={"/edit/"+id}>
                <div>
                    <h3 className="list-item__title">{description}</h3>
                    <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
                </div>
                <div>
                    <h3 className="list-item__data"> ₹{amount}</h3>
                </div>
            </NavLink>
        </div>
    )
}

export default connect()(ExpenseListItem);