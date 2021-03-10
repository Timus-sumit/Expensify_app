import {connect} from 'react-redux';
import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import getVisibleData from '../selectors/expenses';
const ExpenseList = (props)=>{
    return (
        <div>
            <h2>Expense List</h2>
            {props.expense.map((expense)=>{
                return <ExpenseListItem key={expense.id} {...expense} />
            })}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        expense:getVisibleData(state.expense,state.filter)
    }
}

export default connect(mapStateToProps)(ExpenseList);