import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
const Dashboard = ()=>{
    return(
        <div>
            Dashboard
            <ExpenseListFilter/>
            <ExpenseList/>
        </div>
    )
}

export default Dashboard;