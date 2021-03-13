import uuid from 'uuid';
import database from '../firebase/firebase';

//Add_expense

export const addExpense = (expense)=>{
    return {
        type:'ADD_EXPENSE',
        expense
    }
}

export const startAddExpense = (expenseData={})=>{
    return (dispatch)=>{
        const {description="", note ="", amount =0,createdAt=0}=expenseData;

        const expense = {description,note,amount,createdAt};
        database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id : ref.key,
                ...expense
            }))
        })
    
    }
}

//removing_expense

export const removeExpense = ({id})=>{
    return {
        type:'REMOVE_EXPENSE',
        id
    }
}

export const startRemoveExpense = ({id})=>{
    return (dispatch)=>{
        database.ref(`expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}));
        })
    }
}
//edit_expense

export const editExpense = (id,updates)=>{
    return {
        type:'EDIT_EXPENSE',
        id,
        updates
    }
}

export const startEditExpense = (id,updates)=>{
    return (dispatch)=>{
        database.ref(`expenses/${id}`).update({...updates}).then(()=>{
            dispatch(editExpense(id,updates))
        })
    }
}

export const setExpense = (expense)=>{
    return{
        type:'SET_EXPENSE',
        expense
    }
}
export const startSetExpense = ()=>{
    return (dispatch)=>{
        
    return database.ref('expenses').once('value').then((snapshot)=>{
            const expense = [];
            snapshot.forEach((childSnapShot)=>{
                expense.push({
                    id: childSnapShot.key,
                    ...childSnapShot.val()
                })
            })

            dispatch(setExpense(expense))
        })
    }
}