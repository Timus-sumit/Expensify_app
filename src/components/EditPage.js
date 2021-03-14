import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditPage=(props)=>{
 
    return(
        <div>
            <div className="pageheader">
                <div className="contentContainer">
                    <h1 className="pageheader__title">Edit your Expense</h1>
                </div>
            </div>
            <div className="contentContainer">
                <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense)=>{
                props.dispatch(startEditExpense(props.expense.id,expense))
                props.history.push('/')
                }}/>
                <button className="button button--remove" onClick={()=>{
                    props.dispatch(startRemoveExpense({id:props.expense.id}))
                    props.history.push('/')
                }}>Remove Expense</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state,props)=>{
    return{
        expense: state.expense.find((expense)=>{
            return expense.id===props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditPage);