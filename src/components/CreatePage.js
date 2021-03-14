import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import { startAddExpense } from '../actions/expenses';
const CreatePage=(props)=>{
    return(
        <div>
            <div className="pageheader">
                <div className="contentContainer">
                    <h1 className="pageheader__title">Add an Expense !</h1>
                </div>
            </div>
            <div className="contentContainer">
                <ExpenseForm
                onSubmit={(expense)=>{
                    props.dispatch(startAddExpense(expense));
                    props.history.push('/dashboard');
                }}
                    />
            </div>
            
        </div>
    )
}

export default connect()(CreatePage);