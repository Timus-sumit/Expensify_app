import {connect} from 'react-redux';
import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import getVisibleData from '../selectors/expenses';
import ExpenseTotal from '../selectors/expense_total';
import {Link} from 'react-router-dom';
const ExpenseList = (props)=>{
    const total = ExpenseTotal(props.expense);
    const expenseWord = total.totalItem===1?'expense':'expenses';
    return (
        <div>
            <div className="pageheader"> 
             <div className="contentContainer">
               <h1 className="pageheader__title">Viewing <span>{total.totalItem}</span> {expenseWord} totalling <span>₹{total.totalExpense}</span></h1>
                <Link className="button" to="/create">Add Expense</Link>
             </div>
            </div>
            <div className="contentContainer">
                <div className="list-header">Expense List</div>
                {props.expense.map((expense)=>{
                    return <ExpenseListItem key={expense.id} {...expense} />
                })}
                <br/>
                <br/>
            </div>   
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        expense:getVisibleData(state.expense,state.filter)
    }
}

export default connect(mapStateToProps)(ExpenseList);