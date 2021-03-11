import {connect} from 'react-redux';
import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import getVisibleData from '../selectors/expenses';
import ExpenseTotal from '../selectors/expense_total';
const ExpenseList = (props)=>{
    const total = ExpenseTotal(props.expense);
    const expenseWord = total.totalItem===1?'expense':'expenses';
    return (
        <div>
            <h2>Expense List</h2>
            <h3>Viewing {total.totalItem} {expenseWord} totalling ₹{total.totalExpense}</h3>
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